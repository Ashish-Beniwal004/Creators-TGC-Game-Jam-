import os
import sys
import numpy as np
from PIL import Image
import scipy.ndimage as ndimage

Image.MAX_IMAGE_PIXELS = None

def remove_checkerboard(arr):
    if arr.shape[2] == 3:
        arr = np.dstack((arr, np.full(arr.shape[:2], 255, dtype=np.uint8)))
    rgb = arr[:,:,:3].astype(int)
    cmax = rgb.max(axis=-1)
    cmin = rgb.min(axis=-1)
    cmean = rgb.mean(axis=-1)
    is_bg = (cmax - cmin < 25) & (cmean > 70) & (cmean < 230)
    is_bg = is_bg | (cmean < 30) # also remove pure black/dark grey grid lines
    is_bg = ndimage.binary_dilation(is_bg, iterations=2)
    arr[is_bg, 3] = 0
    return arr

def slice_8x6(img_path, output_dir, prefix):
    os.makedirs(output_dir, exist_ok=True)
    img = Image.open(img_path).convert('RGBA')
    arr = np.array(img)
    
    # Always try to remove checkerboard
    arr = remove_checkerboard(arr)
    clean_img = Image.fromarray(arr)
    
    w, h = clean_img.size
    cols = 8
    rows = 6
    cell_w = w // cols
    cell_h = h // rows
    
    frame_index = 0
    for y in range(rows):
        for x in range(cols):
            # Crop exactly the cell, but shrink by 1 or 2 pixels to avoid grid lines
            box = (x * cell_w + 2, y * cell_h + 2, (x + 1) * cell_w - 2, (y + 1) * cell_h - 2)
            cell = clean_img.crop(box)
            
            out_file = os.path.join(output_dir, f"{prefix}_{y}_{x}.png")
            cell.save(out_file)
            frame_index += 1
                
    print(f"Extracted {frame_index} frames for {prefix}")

def main():
    base_dir = "e:/New folder/game jam/Creators-TGC-Game-Jam-/LumenProto"
    
    # Dark Boss
    slice_8x6(
        os.path.join(base_dir, "assets/enemies/bosses/Gemini_Generated_Image_u1vbf3u1vbf3u1vb.png"),
        os.path.join(base_dir, "assets/web/entities/dark_boss_frames"),
        "darkboss"
    )
    
    # Ice Boss
    slice_8x6(
        os.path.join(base_dir, "assets/enemies/frost/Gemini_Generated_Image_kta8igkta8igkta8.png"),
        os.path.join(base_dir, "assets/web/entities/ice_boss_frames"),
        "iceboss"
    )
    
    # Jungle Boss
    slice_8x6(
        os.path.join(base_dir, "assets/enemies/jungle/Gemini_Generated_Image_paunvzpaunvzpaun.png"),
        os.path.join(base_dir, "assets/web/entities/jungle_boss_frames"),
        "jungleboss"
    )

if __name__ == "__main__":
    main()
