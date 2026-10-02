from PIL import Image
import os
import numpy as np

img_path = "../../assets/genrated assests/Gemini_Generated_Image_1en0xl1en0xl1en0_transparent.png"
img = Image.open(img_path).convert("RGBA")

print(f"Original image size: {img.size}")

# Find bounding boxes of all non-transparent pixels
arr = np.array(img)
alpha = arr[:, :, 3]
y_coords, x_coords = np.nonzero(alpha > 10)

if len(x_coords) == 0:
    print("Image is empty.")
else:
    min_x, max_x = np.min(x_coords), np.max(x_coords)
    min_y, max_y = np.min(y_coords), np.max(y_coords)
    print(f"Content bounds: x({min_x}-{max_x}) y({min_y}-{max_y})")

# Let's slice the image horizontally assuming it's a sprite sheet (1xN or NxM)
# A typical AI generated sprite sheet might have 3x3 or 4x4 characters.
# Let's see where the gaps are.

column_alphas = np.sum(alpha > 10, axis=0)
row_alphas = np.sum(alpha > 10, axis=1)

# Find horizontal gaps (x coordinates where alpha sum is 0 or very low)
x_gaps = np.where(column_alphas < 5)[0]
# Group continuous gaps
def group_gaps(gaps):
    if len(gaps) == 0: return []
    groups = []
    current_group = [gaps[0]]
    for x in gaps[1:]:
        if x == current_group[-1] + 1:
            current_group.append(x)
        else:
            groups.append(current_group)
            current_group = [x]
    groups.append(current_group)
    return groups

print(f"X gaps: {[ (g[0], g[-1]) for g in group_gaps(x_gaps) ]}")
print(f"Y gaps: {[ (g[0], g[-1]) for g in group_gaps(np.where(row_alphas < 5)[0]) ]}")
