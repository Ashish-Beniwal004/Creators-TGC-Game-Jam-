from PIL import Image
import os
import glob

def check_alpha(d):
    for f in glob.glob(d + "/*.png"):
        img = Image.open(f)
        if img.mode != "RGBA":
            print(f"{os.path.basename(f)}: MODE IS {img.mode} - NO ALPHA!")
        else:
            alpha = img.split()[3]
            extrema = alpha.getextrema()
            print(f"{os.path.basename(f)}: RGBA, alpha extrema: {extrema}")

check_alpha("../../assets/web/environments/dark")
