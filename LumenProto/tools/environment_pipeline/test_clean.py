import numpy as np
from PIL import Image

def test_checkerboard_removal():
    img_path = "../../assets/genrated assests/Gemini_Generated_Image_13q7vp13q7vp13q7.png"
    img = Image.open(img_path).convert("RGBA")
    arr = np.array(img)
    
    height, width = arr.shape[:2]
    
    # Aggressive gray removal
    r = arr[:, :, 0].astype(int)
    g = arr[:, :, 1].astype(int)
    b = arr[:, :, 2].astype(int)
    
    diff_rg = np.abs(r - g)
    diff_rb = np.abs(r - b)
    diff_gb = np.abs(g - b)
    
    # Is it grayish?
    is_gray = (diff_rg < 15) & (diff_rb < 15) & (diff_gb < 15)
    
    # Is it in the brightness range of the checkerboard?
    # Checkerboard is around 107-112 for dark, 172-175 for light.
    # Let's say anything between 80 and 200 that is gray is checkerboard!
    brightness = (r + g + b) // 3
    is_checker = is_gray & (brightness > 90) & (brightness < 190)
    
    # Remove it!
    arr[is_checker, 3] = 0
    
    out_img = Image.fromarray(arr)
    out_img.save("test_cleaned.png", "PNG")
    print("Saved test_cleaned.png")

test_checkerboard_removal()
