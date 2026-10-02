# DARK WORLD ART DIRECTION

## Core Aesthetic
- **Theme:** Corrupted fantasy, abandoned ruins, mysterious ambient light.
- **Palette:** Deep blacks, muted purples, dark blues, accented with vibrant cyan (Blue Core) and toxic green (Green Core).
- **Pixel Density:** Consistent nearest-neighbor scaling. Not overly detailed; emphasizes silhouettes and readability.

## Environment Layers
1. **Sky:** Dark gradient (Dark Blue to Black).
2. **Distant:** Low-detail silhouettes of ruined towers and mountains. Low opacity to simulate atmospheric haze.
3. **Background:** Ruined architecture, stone walls, hanging vines.
4. **Midground:** Detailed stone platforms, broken pillars.
5. **Gameplay:** Ground tiles and solid platforms with clear edges so player bounds are obvious.
6. **Foreground:** Subtle silhouetted debris or out-of-focus vines (very sparse).

## Lighting and Atmosphere
- Rely on Three.js basic materials and vertex colors to simulate glow without heavy post-processing.
- Particle spores provide ambient movement and light-like dust.
- No heavy volumetric fog; use layered opacity instead.
