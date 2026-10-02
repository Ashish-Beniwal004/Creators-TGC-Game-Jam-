import os
import sys
import json
import argparse
from pathlib import Path
import numpy as np
from PIL import Image
import scipy.ndimage as ndimage

# Ensure PIL uses no limit to prevent DecompressionBombError on large AI images
Image.MAX_IMAGE_PIXELS = None

class LumenAssetFactory:
    def __init__(self, project_root):
        self.project_root = Path(project_root)
        self.raw_dir = self.project_root / 'assets' / 'genrated assests'
        self.processed_dir = self.project_root / 'assets' / 'processed'
        self.web_dir = self.project_root / 'assets' / 'web'
        self.config_path = self.project_root / 'tools' / 'asset_pipeline' / 'config.json'
        
        self.processed_dir.mkdir(parents=True, exist_ok=True)
        self.web_dir.mkdir(parents=True, exist_ok=True)
        
        self.inventory = {}
        self.config = {}
        if self.config_path.exists():
            with open(self.config_path, 'r') as f:
                self.config = json.load(f)

    def scan(self):
        print("Asset Scan")
        print("----------------------------")
        files = [f for f in self.raw_dir.iterdir() if f.suffix == '.png' and not f.name.endswith('_transparent.png')]
        
        for f in files:
            try:
                img = Image.open(f)
                self.inventory[f.name] = {
                    "file": f.name,
                    "width": img.width,
                    "height": img.height,
                    "format": img.format,
                    "has_alpha": img.mode in ('RGBA', 'LA') or (img.info.get("transparency", None) is not None),
                    "category": self.config.get(f.name, {}).get("category", "unknown")
                }
            except Exception as e:
                print(f"Error reading {f.name}: {e}")
                
        print(f"Total original assets: {len(self.inventory)}")
        
        inv_path = self.project_root / 'tools' / 'asset_pipeline' / 'asset_inventory.json'
        with open(inv_path, 'w') as f:
            json.dump(self.inventory, f, indent=2)
            
        return self.inventory

    def remove_checkerboard(self, arr):
        # Extremely robust checkerboard removal based on low-saturation mid-luma pixels
        if arr.shape[2] == 3:
            arr = np.dstack((arr, np.full(arr.shape[:2], 255, dtype=np.uint8)))
            
        rgb = arr[:,:,:3].astype(int)
        cmax = rgb.max(axis=-1)
        cmin = rgb.min(axis=-1)
        cmean = rgb.mean(axis=-1)
        
        # Identifies typical AI checkerboard
        is_bg = (cmax - cmin < 25) & (cmean > 70) & (cmean < 230)
        is_bg = ndimage.binary_dilation(is_bg, iterations=2)
        arr[is_bg, 3] = 0
        return arr

    def extract_sprites(self, img_arr, filename):
        mask = img_arr[:,:,3] > 10
        mask = ndimage.binary_dilation(mask, iterations=3)
        labeled, num_features = ndimage.label(mask)
        objs = ndimage.find_objects(labeled)
        
        rects = []
        for i, obj in enumerate(objs):
            if obj is None: continue
            y_slice, x_slice = obj
            x = x_slice.start
            y = y_slice.start
            w = x_slice.stop - x
            h = y_slice.stop - y
            if w > 30 and h > 30: # Ignore noise
                rects.append([x, y, w, h])
                
        rects.sort(key=lambda r: (r[1]//150, r[0]))
        return rects

    def process(self):
        if not self.inventory:
            self.scan()
            
        report_data = []
        
        for filename, data in self.inventory.items():
            print(f"Processing {filename}...")
            file_config = self.config.get(filename, {})
            in_path = self.raw_dir / filename
            img = Image.open(in_path).convert('RGBA')
            arr = np.array(img)
            
            # Transparency
            if file_config.get("remove_checkerboard", True):
                arr = self.remove_checkerboard(arr)
            
            clean_img = Image.fromarray(arr)
            
            # Extraction & Normalization
            if file_config.get("extract_sprites", False):
                rects = self.extract_sprites(arr, filename)
                base_name = Path(filename).stem
                out_sprites = []
                
                scale = file_config.get("scale", 1.0)
                
                for idx, r in enumerate(rects):
                    x, y, w, h = r
                    cropped = clean_img.crop((x, y, x+w, y+h))
                    
                    if scale != 1.0:
                        nw, nh = int(w * scale), int(h * scale)
                        cropped = cropped.resize((nw, nh), Image.NEAREST)
                        
                    sprite_name = f"{base_name}_{idx:03d}.webp"
                    out_path = self.web_dir / sprite_name
                    cropped.save(out_path, format="WEBP")
                    out_sprites.append({
                        "file": sprite_name,
                        "rect": [x, y, w, h]
                    })
                    
                report_data.append({
                    "original": filename,
                    "status": "Extracted",
                    "sprites": len(rects),
                    "category": data["category"]
                })
                
            else:
                # Just save the whole thing as webp
                base_name = Path(filename).stem
                out_path = self.web_dir / f"{base_name}.webp"
                
                scale = file_config.get("scale", 1.0)
                if scale != 1.0:
                    clean_img = clean_img.resize((int(clean_img.width*scale), int(clean_img.height*scale)), Image.NEAREST)
                    
                clean_img.save(out_path, format="WEBP")
                report_data.append({
                    "original": filename,
                    "status": "Converted Whole",
                    "sprites": 1,
                    "category": data["category"]
                })
                
        self.generate_manifest()
        self.generate_atlas()
        self.generate_report(report_data)

    def generate_atlas(self):
        print("Generating Atlas...")
        sprites = []
        for f in self.web_dir.iterdir():
            if f.suffix == '.webp' and '_' in f.name and not f.name.endswith(').webp'):
                sprites.append(f)
                
        if not sprites: return
        
        # Simple shelf packing
        sprites.sort(key=lambda p: Image.open(p).height, reverse=True)
        max_width = 2048
        x, y, row_h = 0, 0, 0
        
        placements = {}
        images = []
        
        for p in sprites:
            img = Image.open(p)
            if x + img.width > max_width:
                y += row_h
                x = 0
                row_h = 0
            
            placements[p.name] = {"x": x, "y": y, "width": img.width, "height": img.height}
            images.append((img, x, y))
            
            x += img.width
            row_h = max(row_h, img.height)
            
        atlas_h = y + row_h
        atlas_img = Image.new('RGBA', (max_width, atlas_h), (0,0,0,0))
        for img, pos_x, pos_y in images:
            atlas_img.paste(img, (pos_x, pos_y))
            
        atlas_path = self.web_dir / 'characters_atlas.webp'
        atlas_img.save(atlas_path, format="WEBP")
        
        with open(self.project_root / 'tools' / 'asset_pipeline' / 'atlas_meta.json', 'w') as f:
            json.dump(placements, f, indent=2)
            
        print("Atlas generated successfully.")

    def generate_manifest(self):
        manifest = {"assets": {}}
        for f in self.web_dir.iterdir():
            if f.suffix == '.webp':
                manifest["assets"][f.name] = {
                    "type": "sprite",
                    "path": f"assets/web/{f.name}"
                }
        
        with open(self.project_root / 'tools' / 'asset_pipeline' / 'manifest.json', 'w') as f:
            json.dump(manifest, f, indent=2)

    def generate_report(self, report_data):
        html = "<html><head><title>Asset Pipeline Report</title><style>body{font-family:sans-serif;}</style></head><body>"
        html += "<h1>Asset Pipeline Run Report</h1><table border='1' cellpadding='5'>"
        html += "<tr><th>Original File</th><th>Category</th><th>Status</th><th>Sprites Generated</th></tr>"
        for row in report_data:
            html += f"<tr><td>{row['original']}</td><td>{row['category']}</td><td>{row['status']}</td><td>{row['sprites']}</td></tr>"
        html += "</table></body></html>"
        
        with open(self.project_root / 'tools' / 'asset_pipeline' / 'asset_report.html', 'w') as f:
            f.write(html)
        print("Generated asset_report.html")

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description="Lumen Asset Factory")
    parser.add_argument("command", choices=["scan", "process", "build"], help="Command to run")
    args = parser.parse_args()
    
    root_path = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
    factory = LumenAssetFactory(root_path)
    
    if args.command == "scan":
        factory.scan()
    elif args.command == "process":
        factory.process()
    elif args.command == "build":
        factory.scan()
        factory.process()
