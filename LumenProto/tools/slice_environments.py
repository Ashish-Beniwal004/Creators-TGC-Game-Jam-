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

def extract_irregular_sprites(img_path, output_dir, prefix):
    os.makedirs(output_dir, exist_ok=True)
    img = Image.open(img_path).convert('RGBA')
    arr = np.array(img)
    
    # Remove checkerboard if needed
    if arr[:,:,3].min() > 250:
        arr = remove_checkerboard(arr)
        
    clean_img = Image.fromarray(arr)
        
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
        
        if w > 30 and h > 30:
            rects.append((x, y, w, h))
            
    # Sort top to bottom
    rects.sort(key=lambda r: (r[1]//100, r[0]))
    
    frame_index = 0
    for x, y, w, h in rects:
        # Crop with a little padding
        cropped = clean_img.crop((max(0, x-2), max(0, y-2), min(clean_img.width, x+w+2), min(clean_img.height, y+h+2)))
        
        out_file = os.path.join(output_dir, f"{prefix}_decor_{frame_index}.png")
        cropped.save(out_file)
        frame_index += 1
        
    print(f"Extracted {frame_index} decor pieces for {prefix}")

def main():
    base_dir = "e:/New folder/game jam/Creators-TGC-Game-Jam-/LumenProto"
    
    # Dark Env
    extract_irregular_sprites(
        os.path.join(base_dir, "assets/environments/dark/Gemini_Generated_Image_ouoc85ouoc85ouoc.png"),
        os.path.join(base_dir, "assets/web/environments/dark"),
        "dark"
    )
    
    # Ice Env
    extract_irregular_sprites(
        os.path.join(base_dir, "assets/environments/ice/Gemini_Generated_Image_wt5gkkwt5gkkwt5g.png"),
        os.path.join(base_dir, "assets/web/environments/ice"),
        "ice"
    )
    
    # Jungle Env
    extract_irregular_sprites(
        os.path.join(base_dir, "assets/environments/jungle/Gemini_Generated_Image_wmot1wwmot1wwmot.png"),
        os.path.join(base_dir, "assets/web/environments/jungle"),
        "jungle"
    )
    
    # Light Orbs
    extract_irregular_sprites(
        os.path.join(base_dir, "assets/particles/Gemini_Generated_Image_5y8cvt5y8cvt5y8c.png"),
        os.path.join(base_dir, "assets/web/particles"),
        "orb_blue"
    )
    extract_irregular_sprites(
        os.path.join(base_dir, "assets/particles/Gemini_Generated_Image_wte5aywte5aywte5.png"),
        os.path.join(base_dir, "assets/web/particles"),
        "orb_red"
    )
    extract_irregular_sprites(
        os.path.join(base_dir, "assets/particles/Gemini_Generated_Image_ybtgmrybtgmrybtg.png"),
        os.path.join(base_dir, "assets/web/particles"),
        "orb_green"
    )

if __name__ == "__main__":
    main()
