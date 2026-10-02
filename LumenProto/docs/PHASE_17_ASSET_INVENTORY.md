# PHASE 17A ASSET INVENTORY

| Category | Current Asset | Placeholder? | Replacement Needed |
|---|---|---|---|
| Lumen | AnimatedSprite2D w/ GradientTexture2D | Yes | Requires external 2D sprite sheets / individual frames. |
| Basic Enemy | Sprite2D w/ GradientTexture2D | Yes | Requires external 2D sprites. |
| Frost Bite | Sprite2D w/ GradientTexture2D + CPUParticles2D | Yes | Requires external 2D sprites. |
| Cold Blood | Sprite2D w/ GradientTexture2D + CPUParticles2D | Yes | Requires large boss 2D sprite sheets. |
| Jungle Enemy | Sprite2D w/ GradientTexture2D + CPUParticles2D | Yes | Requires external 2D sprites. |
| Overgrowth | Sprite2D w/ GradientTexture2D + CPUParticles2D | Yes | Requires massive 2D boss sprite sheets. |
| Dark Environment | ColorRect + CPUParticles2D | Yes | Requires layered modular tilemaps/background assets. |
| Ice Environment | ColorRect + CPUParticles2D | Yes | Requires ice tiles and frozen ruin sprites. |
| Jungle Environment | ColorRect + CPUParticles2D | Yes | Requires large tree, vine, and ruin sprites. |
| Projectiles | PointLight2D + GradientTexture2D | Yes | Requires 2D particle/energy textures. |
| UI | Labels + ProgressBar | Yes | Requires styled panel textures / custom fonts. |

**Summary:** The `assets/` directory tree has been established containing only `.gitkeep` files. There are ZERO external image assets (`.png`, `.jpg`, `.webp`) currently available in the repository. All visual systems are utilizing Godot's built-in procedural generation (ColorRects, GradientTexture2D, CPUParticles2D) to maintain the 2D architectural footprint without bloated binary placeholders.
