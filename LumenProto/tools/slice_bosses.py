import os
from PIL import Image

def slice_sprite_sheet(input_path, output_dir, prefix):
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        
    img = Image.open(input_path)
    w, h = img.size
    cell_w = w // 4
    cell_h = h // 4
    
    html = ["<html><body style='background: #333;'>"]
    for y in range(4):
        html.append(f"<div><h3>Row {y}</h3>")
        for x in range(4):
            box = (x * cell_w, y * cell_h, (x + 1) * cell_w, (y + 1) * cell_h)
            cell = img.crop(box)
            out_file = f"{prefix}_{y}_{x}.png"
            cell.save(os.path.join(output_dir, out_file))
            html.append(f"<img src='{out_file}' style='border: 1px solid red; max-width: 150px;'>")
        html.append("</div>")
    html.append("</body></html>")
    
    with open(os.path.join(output_dir, "index.html"), "w") as f:
        f.write("\n".join(html))

input_dir = "e:/New folder/game jam/Creators-TGC-Game-Jam-/LumenProto/assets/genrated assests"
output_base = "e:/New folder/game jam/Creators-TGC-Game-Jam-/LumenProto/assets/web/entities"

# 1. Dark Boss
slice_sprite_sheet(os.path.join(input_dir, "Gemini_Generated_Image_l3bl6gl3bl6gl3bl_transparent.png"), 
                   os.path.join(output_base, "dark_boss_frames"), "darkboss")

# 2. Ice Boss
slice_sprite_sheet(os.path.join(input_dir, "Gemini_Generated_Image_fuovs6fuovs6fuov_transparent.png"), 
                   os.path.join(output_base, "ice_boss_frames"), "iceboss")

# 3. Jungle Boss
slice_sprite_sheet(os.path.join(input_dir, "Gemini_Generated_Image_gmaixygmaixygmai_transparent.png"), 
                   os.path.join(output_base, "jungle_boss_frames"), "jungleboss")

print("Done slicing bosses!")
