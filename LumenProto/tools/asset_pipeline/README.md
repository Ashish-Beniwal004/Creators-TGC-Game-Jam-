# Lumen Asset Factory

The Lumen Asset Factory is an automated processing pipeline designed to convert raw, AI-generated game assets into clean, optimized, structured, web-ready assets suitable for integration with a future Three.js / WebGL architecture.

## Overview
This tool operates non-destructively. It scans the raw asset directory (`assets/genrated assests/`), processes the images according to `config.json`, and outputs the final web-ready assets to `assets/web/`. It does NOT touch the existing Godot gameplay codebase or existing `.png.import` files.

## Features
- **Intelligent Checkerboard Removal:** Uses chroma-keying and morphological dilation to cleanly remove baked-in checkerboard patterns from raw AI images without damaging the foreground sprites.
- **Dynamic Sprite Extraction:** Uses connected component analysis (`scipy.ndimage`) to dynamically locate bounding boxes of individual sprites on an irregular grid.
- **Normalization:** Supports cropping and downscaling.
- **Optimization:** Exports to WebP.
- **Three.js Ready:** Generates `manifest.json` describing the web assets.
- **Preview System:** Generates `asset_report.html` for visual verification of processed outputs.

## Requirements
- Python 3
- Pillow
- numpy
- scipy

## Usage
Run the pipeline from the `tools/asset_pipeline/` directory.

Scan the assets directory and generate `asset_inventory.json`:
```bash
python asset_pipeline.py scan
```

Process assets (removes background, extracts, saves WebP, generates manifest and HTML report):
```bash
python asset_pipeline.py process
```

Run everything:
```bash
python asset_pipeline.py build
```

## Configuration (`config.json`)
You can configure per-file behaviors in `config.json`.
- `category`: The logical grouping of the asset (e.g. "player", "environment").
- `extract_sprites`: (boolean) If true, runs the connected components extractor to save individual `.webp` frames instead of one large sheet.
- `scale`: (float) Resizes the final output.
- `remove_checkerboard`: (boolean) If true, performs the intelligent background removal.

## Integration with Three.js
The final `assets/web/` directory and `manifest.json` will serve as the static asset directory for the future Webpack/Vite bundler in the JavaScript version. The `asset_pipeline.py` ensures continuous integration of new raw assets without requiring manual Photoshop work.
