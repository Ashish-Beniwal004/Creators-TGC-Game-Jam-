import numpy as np
from PIL import Image, ImageDraw, ImageFont
import os
import json

def is_checkerboard_pixel(pixel):
    r, g, b = pixel[:3]
    if abs(int(r)-int(g)) > 8 or abs(int(r)-int(b)) > 8 or abs(int(g)-int(b)) > 8:
        return False
    if 95 <= r <= 125: return True
    if 145 <= r <= 185: return True
    return False

def analyze_image():
    img_path = "../../assets/genrated assests/Gemini_Generated_Image_13q7vp13q7vp13q7.png"
    img = Image.open(img_path).convert("RGBA")
    arr = np.array(img)
    
    height, width = arr.shape[:2]
    print(f"Image dimensions: {width}x{height}")
    
    # 1. Create mask of art pixels
    art_mask = np.ones((height, width), dtype=bool)
    for y in range(height):
        for x in range(width):
            if is_checkerboard_pixel(arr[y, x]):
                art_mask[y, x] = False
                
    # Also wipe out rows that are almost entirely checkerboard (gaps)
    row_alpha_counts = np.sum(art_mask, axis=1)
    threshold = width * 0.02
    row_has_art = row_alpha_counts > threshold
    for y in range(height):
        if not row_has_art[y]:
            art_mask[y, :] = False

    # 2. Find Connected Components
    # We'll use a simple BFS.
    visited = np.zeros((height, width), dtype=bool)
    components = []
    
    from collections import deque
    
    for y in range(height):
        for x in range(width):
            if art_mask[y, x] and not visited[y, x]:
                # Found a new component
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
                    
                    # Check 8 neighbors to be aggressive about connecting nearby pixels
                    for dy in [-1, 0, 1]:
                        for dx in [-1, 0, 1]:
                            if dy == 0 and dx == 0: continue
                            ny, nx = cy + dy, cx + dx
                            if 0 <= ny < height and 0 <= nx < width:
                                if not visited[ny, nx] and art_mask[ny, nx]:
                                    visited[ny, nx] = True
                                    queue.append((ny, nx))
                
                # Only keep components with significant pixel count to ignore noise
                if pixel_count > 100:
                    components.append({
                        "id": len(components),
                        "bounds": (min_x, min_y, max_x, max_y),
                        "width": max_x - min_x + 1,
                        "height": max_y - min_y + 1,
                        "pixels": pixel_count
                    })
                    
    print(f"Found {len(components)} distinct objects/layers.")
    
    # 3. Classify components based on width and position
    # If width > 90% of image width, it's a full layer.
    # Otherwise, it's an independent asset.
    
    analysis = []
    
    # Create debug image
    debug_img = img.copy()
    draw = ImageDraw.Draw(debug_img)
    
    for c in components:
        min_x, min_y, max_x, max_y = c["bounds"]
        w = c["width"]
        h = c["height"]
        
        asset_type = "object"
        if w > width * 0.8:
            asset_type = "layer"
            
        name = f"asset_{c['id']}_{asset_type}"
        
        analysis.append({
            "id": name,
            "type": asset_type,
            "source_region": [min_x, min_y, w, h],
            "parallax": 0.1 # default, to be refined later
        })
        
        print(f"Component {c['id']}: type={asset_type}, bounds={min_x},{min_y} -> {max_x},{max_y}, size={w}x{h}")
        
        # Draw bounding box
        color = "red" if asset_type == "object" else "green"
        draw.rectangle([min_x, min_y, max_x, max_y], outline=color, width=3)
        draw.text((min_x, min_y), name, fill=color)
        
    os.makedirs("previews", exist_ok=True)
    debug_img.save("previews/dark_asset_analysis.png")
    
    with open("previews/analysis.json", "w") as f:
        json.dump(analysis, f, indent=4)
        
    print("Analysis complete. Saved to previews/dark_asset_analysis.png and analysis.json")

if __name__ == "__main__":
    analyze_image()
