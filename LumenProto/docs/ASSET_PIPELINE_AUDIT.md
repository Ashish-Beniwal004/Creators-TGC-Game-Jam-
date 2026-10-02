# LUMEN ASSET PIPELINE AUDIT

## 1. Verified Facts
- **Location:** The raw assets are located in `LumenProto/assets/genrated assests/`.
- **Game Engine:** The current repository is a functioning Godot 4 (GDScript) prototype.
- **Future Architecture:** The game is intended to be migrated to a native JavaScript/Three.js + Matter.js + WebGL stack.
- **Asset State:** The original assets (`.png`) were AI-generated and many contain baked-in checkerboard backgrounds. The `_transparent.png` variants were processed during an earlier development phase.
- **Sprite Organization:** The sprite sheets are NOT uniformly arranged on a grid (e.g., standard 8x6 layout). They require dynamic extraction/cropping using connected component analysis.

## 2. Detected Assets

| Filename | Dimensions | Format | Alpha | Likely Category | Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `Gemini_Generated_Image_1en0xl1en0xl1en0.png` | 2752x1536 | RGBA | Yes | Player Sprite Sheet | Contains baked checkerboard |
| `Gemini_Generated_Image_1en0xl1en0xl1en0_transparent.png` | 2752x1536 | RGBA | Yes | Player Sprite Sheet | Pre-processed for transparency |
| `Gemini_Generated_Image_1en0xl1en0xl1en0 (3).png` | 1376x768 | RGB | No | Player Sprite Sheet (Small) | Contains baked checkerboard |
| `Gemini_Generated_Image_tvqq9itvqq9itvqq.png` | 2752x1536 | RGBA | Yes | Enemy Sprite Sheet | Contains Corrupted Sentry & Bat |
| `Gemini_Generated_Image_fuovs6fuovs6fuov.png` | 2752x1536 | RGBA | Yes | Environment / Tileset | Dark Ruins platforms/backgrounds |
| `Gemini_Generated_Image_gmaixygmaixygmai.png` | 2752x1536 | RGBA | Yes | UI / VFX / Unknown | TBD |
| `Gemini_Generated_Image_jm9u8jm9u8jm9u8j.png` | 2752x1536 | RGBA | Yes | Environment / Foreground | Vines / Jungle |
| `Gemini_Generated_Image_l3bl6gl3bl6gl3bl.png` | 2752x1536 | RGBA | Yes | Environment / Decor | Jungle / Spores |
| `Gemini_Generated_Image_m4xjd0m4xjd0m4xj.png` | 2752x1536 | RGBA | Yes | Sprite Sheet | Needs manual categorization |

*(Note: Every base asset has a corresponding `_transparent.png` version created in previous steps).*

## 3. Assumptions
- The generated assets with a baked-in checkerboard pattern use roughly uniform gray colors for the background, allowing for chroma-key/flood-fill transparency removal.
- Sprites on a sheet are separated by at least a few pixels of fully transparent space (alpha=0), allowing for connected component analysis (`scipy.ndimage.label`).
- The asset pipeline must generate `.webp` files for optimal web delivery.
- The pipeline should export a `manifest.json` and a combined atlas texture for Three.js.

## 4. Manual Configuration Requirements
- **Animations:** Since the sprites are dynamically extracted, they cannot be automatically assigned to specific animation states (e.g., Idle, Run, Jump) without a manual mapping configuration (e.g., `config.json`).
- **Scale:** Because these are AI-generated, different sprite sheets have wildly different scales relative to the game world. A `scale_factor` or target normalization height must be manually defined per asset.
- **Anchor Points:** The extraction bounding boxes will vary in size, requiring either center-bottom alignment or manual anchor definition.
