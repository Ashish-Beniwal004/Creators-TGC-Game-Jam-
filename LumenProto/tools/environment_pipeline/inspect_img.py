from PIL import Image
import numpy as np

img = Image.open("../../assets/genrated assests/Gemini_Generated_Image_13q7vp13q7vp13q7.png").convert("RGBA")
arr = np.array(img)
print(f"Shape: {arr.shape}")

# Look at top-left corner for checkerboard colors
corner = arr[0:50, 0:50]
unique_colors = np.unique(corner.reshape(-1, 4), axis=0)
print(f"Top-left unique colors:\n{unique_colors}")

# Look at bottom-right corner
corner_br = arr[-50:, -50:]
unique_br = np.unique(corner_br.reshape(-1, 4), axis=0)
print(f"Bottom-right unique colors:\n{unique_br}")
