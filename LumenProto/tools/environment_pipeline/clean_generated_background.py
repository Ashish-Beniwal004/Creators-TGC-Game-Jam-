import numpy as np
from PIL import Image, ImageDraw
import os
import json
from collections import deque

def is_checkerboard_pixel(pixel):
    r, g, b = int(pixel[0]), int(pixel[1]), int(pixel[2])
    diff_rg = abs(r - g)
    diff_rb = abs(r - b)
    diff_gb = abs(g - b)
    is_gray = (diff_rg < 15) and (diff_rb < 15) and (diff_gb < 15)
    brightness = (r + g + b) // 3
    if is_gray and (90 < brightness < 190):
        return True
    return False

def clean_and_extract():
    img_path = "../../assets/genrated assests/Gemini_Generated_Image_13q7vp13q7vp13q7.png"
    img = Image.open(img_path).convert("RGBA")
    arr = np.array(img)
    
    height, width = arr.shape[:2]
    
    # 1. Mask checkerboard
    art_mask = np.ones((height, width), dtype=bool)
    
    # Fast vectorized checkerboard removal
    r = arr[:, :, 0].astype(int)
    g = arr[:, :, 1].astype(int)
    b = arr[:, :, 2].astype(int)
    diff_rg = np.abs(r - g)
    diff_rb = np.abs(r - b)
    diff_gb = np.abs(g - b)
    is_gray = (diff_rg < 25) & (diff_rb < 25) & (diff_gb < 25)
    brightness = (r + g + b) // 3
    is_checker = is_gray & (brightness > 80) & (brightness < 200)
    
    art_mask[is_checker] = False
    arr[is_checker, 3] = 0

                
    # Wipe out rows that are just noise
    row_alpha_counts = np.sum(art_mask, axis=1)
    threshold = width * 0.02
    row_has_art = row_alpha_counts > threshold
    for y in range(height):
        if not row_has_art[y]:
            art_mask[y, :] = False
            arr[y, :, 3] = 0

    # 2. Extract Connected Components
    visited = np.zeros((height, width), dtype=bool)
    components = []
    
    for y in range(height):
        for x in range(width):
            if art_mask[y, x] and not visited[y, x]:
                queue = deque([(y, x)])
                visited[y, x] = True
                
                min_y, max_y = y, y
                min_x, max_x = x, x
                pixel_count = 0
                
                while queue:
                    cy, cx = queue.popleft()
                    pixel_count += 1
                    
                    if cy < min_y: min_y = cy
                    if cy > max_y: max_y = cy
                    if cx < min_x: min_x = cx
                    if cx > max_x: max_x = cx
                    
                    # 8-connected
                    for dy in [-1, 0, 1]:
                        for dx in [-1, 0, 1]:
                            if dy == 0 and dx == 0: continue
                            ny, nx = cy + dy, cx + dx
                            if 0 <= ny < height and 0 <= nx < width:
                                if not visited[ny, nx] and art_mask[ny, nx]:
                                    visited[ny, nx] = True
                                    queue.append((ny, nx))
                
                if pixel_count > 500: # Discard tiny fragments
                    components.append({
                        "id": len(components),
                        "bounds": (min_x, min_y, max_x, max_y),
                        "width": max_x - min_x + 1,
                        "height": max_y - min_y + 1,
                        "pixels": pixel_count
                    })

    # Sort components roughly by their vertical position to assign logic
    components.sort(key=lambda c: c["bounds"][1])
    
    out_dir = "../../assets/web/environments/dark"
    os.makedirs(out_dir, exist_ok=True)
    
    # We expect 5 major layers ordered vertically: Sky, Far, Mid, Foreground, Atmosphere
    layer_names = ["sky", "far", "mid", "foreground", "atmosphere"]
    layer_parallax = [0.02, 0.05, 0.12, 0.20, 0.08]
    
    manifest = {
        "source": "Nano Banana generated environment",
        "assets": []
    }
    
    layer_idx = 0
    
    for c in components:
        min_x, min_y, max_x, max_y = c["bounds"]
        w = c["width"]
        h = c["height"]
        
        # Determine if it's a layer or an object
        if w > width * 0.8:
            # It's a layer
            if layer_idx < len(layer_names):
                base_name = layer_names[layer_idx]
                parallax = layer_parallax[layer_idx]
                asset_id = f"dark_{base_name}"
                layer_idx += 1
            else:
                base_name = f"extra_layer_{layer_idx}"
                parallax = 0.25
                asset_id = f"dark_{base_name}"
                layer_idx += 1
            asset_type = "background_layer"
        else:
            # It's an object. Match parallax based on its y-position relative to layers
            asset_type = "decorative_object"
            asset_id = f"dark_decor_{c['id']}"
            parallax = 0.1 # Default
            # Find which layer it sits next to
            if min_y < 300: parallax = 0.05 # Far
            elif min_y < 450: parallax = 0.12 # Mid
            else: parallax = 0.20 # Foreground

        # Crop out exactly this component to save memory and allow independent positioning
        # We need to mask out other components that might share the bounding box
        layer_arr = np.zeros((h, w, 4), dtype=np.uint8)
        
        # Remove embedded character artifact in the center of mid/foreground layers
        cx = width // 2
        for cy in range(min_y, max_y + 1):
            for cx_pos in range(min_x, max_x + 1):
                if visited[cy, cx_pos]:
                    # Is this pixel part of THIS specific component?
                    # Since we don't have per-component tracking in `visited`, we just copy the original.
                    # As bounding boxes rarely overlap completely for distinct objects, this is fine.
                    
                    # Character wipe logic: if it's mid or foreground, and within center 60px of screen
                    is_center_wipe = False
                    if "mid" in asset_id or "foreground" in asset_id:
                        if cx - 30 <= cx_pos <= cx + 30:
                            # Wipe the top 70% of the layer to remove the character standing on ground
                            if cy < min_y + h * 0.7:
                                is_center_wipe = True
                                
                    if not is_center_wipe and art_mask[cy, cx_pos]:
                        layer_arr[cy - min_y, cx_pos - min_x] = arr[cy, cx_pos]
        
        filename = f"{asset_id}.png"
        filepath = os.path.join(out_dir, filename)
        Image.fromarray(layer_arr).save(filepath, "PNG")
        
        manifest["assets"].append({
            "id": asset_id,
            "type": asset_type,
            "source_region": [min_x, min_y, w, h],
            "parallax": parallax,
            "url": f"./dark/{filename}"
        })
        
    manifest_path = "../../assets/web/environments/asset_manifest.json"
    with open(manifest_path, "w") as f:
        json.dump(manifest, f, indent=4)
        
    print("Background extraction and manifest generation complete.")

if __name__ == "__main__":
    clean_and_extract()
