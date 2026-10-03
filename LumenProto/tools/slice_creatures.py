import os
import numpy as np
from PIL import Image
import scipy.ndimage as ndimage

# Ensure PIL uses no limit to prevent DecompressionBombError on large AI images
Image.MAX_IMAGE_PIXELS = None

mapping = {
    "Gemini_Generated_Image_1ww7gr1ww7gr1ww7.png": "spider",
    "Gemini_Generated_Image_395nc2395nc2395n.png": "scorpion",
    "Gemini_Generated_Image_7tzzl17tzzl17tzz.png": "crocodile",
    "Gemini_Generated_Image_9wak2t9wak2t9wak.png": "wolf",
    "Gemini_Generated_Image_cg5z8bcg5z8bcg5z.png": "bat",
    "Gemini_Generated_Image_tkh4gitkh4gitkh4.png": "lizard",
    "Gemini_Generated_Image_u2wmj2u2wmj2u2wm.png": "dragon",
    "Gemini_Generated_Image_u8t5g5u8t5g5u8t5.png": "ice_wolf",
    "Gemini_Generated_Image_xus1unxus1unxus1.png": "ancient_dragon"
}

def remove_checkerboard(arr):
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

input_dir = "e:/New folder/game jam/Creators-TGC-Game-Jam-/LumenProto/assets/entity"
output_base = "e:/New folder/game jam/Creators-TGC-Game-Jam-/LumenProto/assets/web/entities"

for filename, creature_name in mapping.items():
    in_path = os.path.join(input_dir, filename)
    out_dir = os.path.join(output_base, f"{creature_name}_frames")
    os.makedirs(out_dir, exist_ok=True)
    
    print(f"Processing {creature_name}...")
    img = Image.open(in_path).convert("RGBA")
    
    # Check if we need checkerboard removal
    arr = np.array(img)
    if arr[:,:,3].min() > 250: # Mostly opaque, meaning checkerboard is baked in
        print(f"  Removing baked checkerboard for {creature_name}...")
        arr = remove_checkerboard(arr)
        img = Image.fromarray(arr)
    
    w, h = img.size
    cell_w = w // 4
    cell_h = h // 4
    
    for y in range(4):
        for x in range(4):
            box = (x * cell_w, y * cell_h, (x + 1) * cell_w, (y + 1) * cell_h)
            cell = img.crop(box)
            out_file = f"{creature_name}_{y}_{x}.png"
            cell.save(os.path.join(out_dir, out_file))
            
print("Done!")
