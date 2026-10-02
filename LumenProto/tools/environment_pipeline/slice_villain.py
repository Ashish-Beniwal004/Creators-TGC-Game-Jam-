import numpy as np
from PIL import Image
import os

def slice_grid(image_path, output_dir, prefix, rows=4, cols=4):
    print(f"Slicing {image_path} into {rows}x{cols} grid...")
    img = Image.open(image_path).convert("RGBA")
    w, h = img.size
    
    cell_w = w // cols
    cell_h = h // rows
    
    os.makedirs(output_dir, exist_ok=True)
    
    idx = 0
    for r in range(rows):
        for c in range(cols):
            x = c * cell_w
            y = r * cell_h
            box = (x, y, x + cell_w, y + cell_h)
            cell_img = img.crop(box)
            out_path = os.path.join(output_dir, f"{prefix}_{r}_{c}.png")
            cell_img.save(out_path, "PNG")
            idx += 1
            print(f"Saved {out_path}")

if __name__ == "__main__":
    slice_grid(
        "../../assets/genrated assests/Gemini_Generated_Image_tvqq9itvqq9itvqq_transparent.png",
        "../../assets/web/entities/villain_frames_4x4",
        "villain",
        rows=4, cols=4
    )
