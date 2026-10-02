import numpy as np
from PIL import Image
import os

def slice_quarters(image_path, output_dir):
    print(f"Slicing {image_path}...")
    img = Image.open(image_path).convert("RGBA")
    arr = np.array(img)
    height, width = arr.shape[:2]
    
    # Slice into 4 equal quarters horizontally
    q_width = width // 4
    
    for i in range(4):
        x1 = i * q_width
        x2 = (i + 1) * q_width
        
        region = arr[:, x1:x2, :]
        
        # Crop tight vertically
        row_alpha = np.sum(region[:, :, 3] > 50, axis=1)
        y1, y2 = 0, height - 1
        
        for y in range(height):
            if row_alpha[y] > 20:
                y1 = y
                break
        for y in range(height - 1, -1, -1):
            if row_alpha[y] > 20:
                y2 = y
                break
                
        # Crop tight horizontally
        col_alpha = np.sum(region[y1:y2+1, :, 3] > 50, axis=0)
        cx1, cx2 = 0, q_width - 1
        for x in range(q_width):
            if col_alpha[x] > 20:
                cx1 = x
                break
        for x in range(q_width - 1, -1, -1):
            if col_alpha[x] > 20:
                cx2 = x
                break
                
        h = y2 - y1 + 1
        w = cx2 - cx1 + 1
        
        if h > 50 and w > 50:
            out_arr = region[y1:y2+1, cx1:cx2+1, :]
            out_img = Image.fromarray(out_arr)
            out_path = os.path.join(output_dir, f"villain_quarter_{i}.png")
            out_img.save(out_path, "PNG")
            print(f"Saved quarter {i}: {w}x{h} to {out_path}")


if __name__ == "__main__":
    os.makedirs("../../assets/web/entities", exist_ok=True)
    slice_quarters(
        "../../assets/genrated assests/Gemini_Generated_Image_tvqq9itvqq9itvqq_transparent.png",
        "../../assets/web/entities"
    )
