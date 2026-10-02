import numpy as np
from PIL import Image

def analyze_checkerboard():
    img_path = "../../assets/genrated assests/Gemini_Generated_Image_13q7vp13q7vp13q7.png"
    img = Image.open(img_path).convert("RGBA")
    arr = np.array(img)
    
    # Sample top-left corner
    corner = arr[0:50, 0:50]
    for y in range(0, 50, 10):
        for x in range(0, 50, 10):
            print(f"[{y},{x}] = {corner[y, x]}")
            
analyze_checkerboard()
