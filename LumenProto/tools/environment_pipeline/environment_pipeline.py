import os
import json
import glob
from PIL import Image

CONFIG_FILE = "config.json"
MANIFEST_FILE = "manifest.json"

def main():
    with open(CONFIG_FILE, "r") as f:
        config = json.load(f)
        
    input_dir = config.get("input_dir", "../../assets/genrated assests")
    output_dir = config.get("output_dir", "../../assets/web/environments")
    
    os.makedirs(output_dir, exist_ok=True)
    os.makedirs("previews", exist_ok=True)
    
    manifest = {"environments": {}}
    
    # Process categories mapped in config
    for category, files in config.get("categories", {}).items():
        manifest["environments"][category] = []
        for file_pattern in files:
            for file_path in glob.glob(os.path.join(input_dir, file_pattern)):
                filename = os.path.basename(file_path)
                out_name = f"{category}_{filename.split('.')[0]}.webp"
                out_path = os.path.join(output_dir, out_name)
                
                print(f"Processing {filename} -> {out_name}")
                try:
                    with Image.open(file_path) as img:
                        img = img.convert("RGBA")
                        # Nearest neighbor resize (e.g., scale to 512 max width for environments to save memory)
                        target_width = 1024
                        ratio = target_width / float(img.size[0])
                        target_height = int((float(img.size[1]) * float(ratio)))
                        img = img.resize((target_width, target_height), Image.NEAREST)
                        
                        img.save(out_path, "WEBP", quality=85)
                        manifest["environments"][category].append(out_name)
                except Exception as e:
                    print(f"Error processing {file_path}: {e}")
                    
    with open(MANIFEST_FILE, "w") as f:
        json.dump(manifest, f, indent=4)
    print("Environment pipeline complete.")

if __name__ == "__main__":
    main()
