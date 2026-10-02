import numpy as np
from PIL import Image
import os
from collections import deque

def extract_all_components(image_path, output_dir, prefix):
    print(f"Processing {image_path}...")
    img = Image.open(image_path).convert("RGBA")
    arr = np.array(img)
    height, width = arr.shape[:2]
    
    # Use a stricter alpha threshold for villain to disconnect artifacts
    art_mask = arr[:, :, 3] > 150
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
                    
                    for dy in [-1, 0, 1]:
                        for dx in [-1, 0, 1]:
                            if dy == 0 and dx == 0: continue
                            ny, nx = cy + dy, cx + dx
                            if 0 <= ny < height and 0 <= nx < width:
                                if not visited[ny, nx] and art_mask[ny, nx]:
                                    visited[ny, nx] = True
                                    queue.append((ny, nx))
                
                if pixel_count > 1000: # Filter out noise
                    components.append({
                        "bounds": (min_x, min_y, max_x, max_y),
                        "pixels": pixel_count
                    })
                    
    components.sort(key=lambda c: c["bounds"][0]) # Sort by X position (left to right)
    
    os.makedirs(output_dir, exist_ok=True)
    
    for idx, c in enumerate(components):
        min_x, min_y, max_x, max_y = c["bounds"]
        w = max_x - min_x + 1
        h = max_y - min_y + 1
        
        print(f"Component {idx}: size {w}x{h}, pos ({min_x},{min_y}), pixels {c['pixels']}")
        
        layer_arr = np.zeros((h, w, 4), dtype=np.uint8)
        for cy in range(min_y, max_y + 1):
            for cx in range(min_x, max_x + 1):
                if art_mask[cy, cx]:
                    layer_arr[cy - min_y, cx - min_x] = arr[cy, cx]
                    
        out_img = Image.fromarray(layer_arr)
        out_path = os.path.join(output_dir, f"{prefix}_{idx}.png")
        out_img.save(out_path, "PNG")
        print(f"Saved {out_path}")

if __name__ == "__main__":
    extract_all_components(
        "../../assets/genrated assests/Gemini_Generated_Image_tvqq9itvqq9itvqq_transparent.png",
        "../../assets/web/entities/villain_frames",
        "villain_frame"
    )
