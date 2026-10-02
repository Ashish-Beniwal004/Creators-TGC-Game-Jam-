# DARK ENVIRONMENT ASSET ANALYSIS

## Source Image
- **File:** `LumenProto/assets/genrated assests/Gemini_Generated_Image_13q7vp13q7vp13q7.png`
- **Dimensions:** 1376x768

## Layer and Object Discovery
A Connected-Component Analysis (BFS) separated by checkerboard transparency revealed exactly 13 independent regions. Regions wider than 80% of the image are classified as base Layers. Smaller regions are classified as decorative Objects.

### Base Environment Layers
1. **`dark_sky`** 
   - Type: `background_layer`
   - Bounds: `(46,42 -> 1375,173)`, Size: `1330x132`
   - Role: Distant night sky / clouds. 
   - Parallax: `0.02`
2. **`dark_far_ruins`** 
   - Type: `background_layer`
   - Bounds: `(68,189 -> 1307,318)`, Size: `1240x130`
   - Role: Main distant structures.
   - Parallax: `0.05`
3. **`dark_mid_ruins`** 
   - Type: `background_layer`
   - Bounds: `(46,324 -> 1352,468)`, Size: `1307x145`
   - Role: Midground castles and rocks. Contains center player artifact removal point.
   - Parallax: `0.12`
4. **`dark_foreground`**
   - Type: `background_layer`
   - Bounds: `(42,494 -> 1370,615)`, Size: `1329x122`
   - Role: Ground and foreground terrain.
   - Parallax: `0.20`
5. **`dark_atmosphere`**
   - Type: `background_layer`
   - Bounds: `(114,619 -> 1238,754)`, Size: `1125x136`
   - Role: Foreground fog/particles.
   - Parallax: `0.08` (Renders on top but moves slow for depth).

### Independent Decorative Objects
1. **`dark_decor_far_left`**
   - Type: `object`
   - Bounds: `(0,189 -> 225,272)`, Size: `226x84`
   - Role: Far left structural detail.
   - Parallax: `0.05`
2. **`dark_decor_far_right`**
   - Type: `object`
   - Bounds: `(1225,189 -> 1375,270)`, Size: `151x82`
   - Role: Far right structural detail.
   - Parallax: `0.05`
3. **`dark_decor_mid_snippet`**
   - Type: `object`
   - Bounds: `(413,494 -> 499,518)`, Size: `87x25`
   - Role: Midground small rubble.
   - Parallax: `0.12`

*(Note: Tiny fragments <100px or purely lines such as components 5, 9, 10, 11, 12 are treated as artifacts/noise and dropped to keep the asset pool clean and intentional).*
