import os
import numpy as np
from PIL import Image
import scipy.ndimage as ndimage
import sys

def remove_checkerboard(arr):
    if arr.shape[2] == 3:
        arr = np.dstack((arr, np.full(arr.shape[:2], 255, dtype=np.uint8)))
    rgb = arr[:,:,:3].astype(int)
    cmax = rgb.max(axis=-1)
    cmin = rgb.min(axis=-1)
    cmean = rgb.mean(axis=-1)
    # Identifies typical AI checkerboard
    is_bg = (cmax - cmin < 25) & (cmean > 70) & (cmean < 230)
    # For the ice boss grid lines (which might be dark lines)
    # We can also remove pure black or dark grey grid lines that might be part of the background
    is_bg = is_bg | (cmean < 50) # assuming grid lines are dark
    is_bg = ndimage.binary_dilation(is_bg, iterations=2)
    arr[is_bg, 3] = 0
    return arr

def extract_sprites(img_path, output_dir, prefix):
    os.makedirs(output_dir, exist_ok=True)
    img = Image.open(img_path).convert('RGBA')
    arr = np.array(img)
    
    # Remove checkerboard if needed
    if arr[:,:,3].min() > 250:
        arr = remove_checkerboard(arr)
        
    mask = arr[:,:,3] > 10
    mask = ndimage.binary_dilation(mask, iterations=3)
    labeled, num_features = ndimage.label(mask)
    objs = ndimage.find_objects(labeled)
    
    rects = []
    for obj in objs:
        if obj is None: continue
        y_slice, x_slice = obj
        x, y = x_slice.start, y_slice.start
        w, h = x_slice.stop - x, y_slice.stop - y
        
        # Filter out text (usually wide but short, or small)
        if w > 40 and h > 40:
            # Maybe text can be grouped together. Text typically has high width but very low height
            if w > 200 and h < 50: continue # Likely text label
            rects.append((x, y, w, h))
            
    # Sort rects top-to-bottom, then left-to-right
    # Group by rows (heuristic: if y difference is less than 50, they are in the same row)
    rects.sort(key=lambda r: r[1])
    rows = []
    current_row = []
    last_y = -1
    for r in rects:
        if last_y == -1 or abs(r[1] - last_y) < 100:
            current_row.append(r)
            if last_y == -1: last_y = r[1]
        else:
            current_row.sort(key=lambda x: x[0])
            rows.append(current_row)
            current_row = [r]
            last_y = r[1]
    if current_row:
        current_row.sort(key=lambda x: x[0])
        rows.append(current_row)
        
    clean_img = Image.fromarray(arr)
    
    frame_index = 0
    for row_idx, row in enumerate(rows):
        for col_idx, (x, y, w, h) in enumerate(row):
            # Crop with a little padding
            cropped = clean_img.crop((max(0, x-5), max(0, y-5), min(clean_img.width, x+w+5), min(clean_img.height, y+h+5)))
            
            # Save
            out_file = os.path.join(output_dir, f"{prefix}_{row_idx}_{col_idx}.png")
            cropped.save(out_file)
            frame_index += 1
            
    print(f"Extracted {frame_index} frames for {prefix} into {output_dir}")

def main():
    base_dir = "e:/New folder/game jam/Creators-TGC-Game-Jam-/LumenProto"
    
    # Dark Boss
    extract_sprites(
        os.path.join(base_dir, "assets/enemies/bosses/Gemini_Generated_Image_u1vbf3u1vbf3u1vb.png"),
        os.path.join(base_dir, "assets/web/entities/dark_boss_frames"),
        "darkboss"
    )
    
    # Ice Boss
    extract_sprites(
        os.path.join(base_dir, "assets/enemies/frost/Gemini_Generated_Image_kta8igkta8igkta8.png"),
        os.path.join(base_dir, "assets/web/entities/ice_boss_frames"),
        "iceboss"
    )
    
    # Jungle Boss
    extract_sprites(
        os.path.join(base_dir, "assets/enemies/jungle/Gemini_Generated_Image_paunvzpaunvzpaun.png"),
        os.path.join(base_dir, "assets/web/entities/jungle_boss_frames"),
        "jungleboss"
    )

if __name__ == "__main__":
    main()
