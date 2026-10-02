from PIL import Image

def analyze_layers():
    for f in ["dark_sky.png", "dark_far.png", "dark_mid.png", "dark_foreground.png", "dark_atmosphere.png", "dark_decor_1.png"]:
        path = "../../assets/web/environments/dark/" + f
        try:
            img = Image.open(path)
            print(f"{f}: size {img.size}")
        except:
            print(f"Could not open {f}")
            
analyze_layers()
