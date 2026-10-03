import numpy as np
from PIL import Image

def remove_background(input_path, output_path):
    print(f"Removing background from {input_path}")
    img = Image.open(input_path).convert("RGBA")
    arr = np.array(img)
    
    # Get the background color from top-left pixel
    bg_color = arr[0, 0, :3].copy()
    print(f"Detected background color: {bg_color}")
    
    # Create mask where pixels match the bg_color within a tolerance
    tolerance = 15
    diff = np.abs(arr[:, :, :3] - bg_color)
    mask = np.all(diff <= tolerance, axis=2)
    
    # Set alpha to 0 for matching pixels
    arr[mask, 3] = 0
    
    out_img = Image.fromarray(arr)
    
    # Now run extract_largest_component logic to crop it
    # We'll just crop it using the new alpha mask
    alpha_mask = arr[:, :, 3] > 10
    
    # Find bounding box
    rows = np.any(alpha_mask, axis=1)
    cols = np.any(alpha_mask, axis=0)
    
    if np.any(rows) and np.any(cols):
        rmin, rmax = np.where(rows)[0][[0, -1]]
        cmin, cmax = np.where(cols)[0][[0, -1]]
        
        cropped_img = out_img.crop((cmin, rmin, cmax + 1, rmax + 1))
        cropped_img.save(output_path, "PNG")
        print(f"Saved cropped and cleaned image to {output_path}")
    else:
        print("Image became completely transparent!")

if __name__ == "__main__":
    remove_background(
        "../../assets/web/entities/villain_frames_4x4/villain_1_1.png",
        "../../assets/web/entities/villain.png"
    )
