# PHASE 25 SPRITE ANIMATION AUDIT

## Architecture Overview
The animation pipeline for the WebGL architecture leverages the generated `characters_atlas.webp` and `atlas_meta.json` produced by the Asset Pipeline. The system is designed around two key components:
1. **`AssetManager`**: Centralized loader that reads the atlas image and the JSON metadata. It constructs caching logic to create explicit `THREE.MeshBasicMaterial` objects by modifying UV bounds via `offset` and `repeat` for individual frames dynamically.
2. **`AtlasAnimator`**: A highly reusable state machine attached to any Entity. It reads a simple dictionary mapping logical states (e.g., "idle", "run") to arrays of frame names. It handles frame-rate independent playback using delta-time accumulators and scales the underlying `THREE.Mesh` automatically to match the intrinsic dimensions of the selected frame from the atlas.

## Implementation Details
- **Player States (`Player.js`)**: Implemented mapping for `idle`, `run`, `jump`, `fall`, and `attack` states using the `Gemini_Generated_Image_1en0xl1en0xl1en0_XXX.webp` frames from the atlas. Matter.js velocity drives the state machine.
- **Enemy States (`Enemy.js`)**: Implemented a simple tracking AI and an animation state machine (`idle`, `run`). Currently using a single validated frame (`tvqq9itvqq9itvqq_000.webp`) because the raw AI extraction for enemies did not yield a clean multi-frame animation sequence without noise.
- **Asset Source**: `assets/web/characters_atlas.webp`
- **Metadata**: `tools/asset_pipeline/atlas_meta.json`
- **Missing Animations**: Hurt/Death states are currently unmapped due to ambiguous AI sprite shapes, and the Sentry currently has only one valid frame. Future asset generations will be cleanly merged via the asset pipeline.

## Runtime Testing
- **Dev Server (`npm run dev`)**: Tested and functioning perfectly.
- **Console Errors**: None.
- **Browser Runtime**: Verified! The Player correctly enters idle state when stopped, run state when moving, and jump/fall states when airborne. The sprite scales and flips dynamically without disrupting the strict Matter.js collision hull. The Sentry enemy correctly tracks the player and flips to face them.

## Build Testing
- **Production Build (`npm run build`)**: Generates successfully into `dist/`.

## Known Issues
- The camera interpolation stutters slightly at low frame rates because Matter.js position is strictly updated at 60Hz and Three.js renders in between. Interpolating between physics steps will fix this in Polish phases.
- Enemy sprite only has a single frame mapped.
- Attack animation is bound to a placeholder input (`X`) without hitbox logic yet.

## Next Phase
**Phase 26:** Web Combat & Hitboxes. Migrate the Godot attack logic (hit-stop, coyote time, and LightPower accumulation) into native JavaScript, binding damage events to specific `AtlasAnimator` frames.
