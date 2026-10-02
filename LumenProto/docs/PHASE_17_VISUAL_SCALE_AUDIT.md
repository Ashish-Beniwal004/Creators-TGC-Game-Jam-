# PHASE 17J VISUAL SCALE AUDIT

## LUMEN
- **Current Pixel Height:** 48px base (CollisionShape: radius 16, height 48; Visual scaling intact).
- **Viewport Relative Scale:** At a Camera2D zoom of 1.5x on a standard 720p or 1080p base resolution, Lumen occupies precisely ~10-15% of the vertical screen real estate.
- **Result:** PASS. Lumen correctly remains small and reads cleanly against the dark background.

## NORMAL ENEMIES
- **Base Enemy:** 48px height. Equal to Lumen.
- **Frost Bite:** 54px height. Slightly taller than Lumen.
- **Jungle Enemy:** 60px height. Noticeably larger than Lumen, matching its aggressive leap mechanics.
- **Result:** PASS. Normal enemies are sized distinctly but clearly rank below Bosses.

## BOSSES
- **Cold Blood:** 96px height + massive 48px aura radius (Total ~144px vertical presence). Roughly 3x Lumen's size.
- **Overgrowth:** 120px height + massive 60px aura radius (Total ~180px vertical presence). Roughly 3.5x to 4x Lumen's size.
- **Result:** PASS. Threatening, massive, but localized enough to avoid breaking platforming visibility or exceeding screen bounds.

## DIALOGUE
- **MarginContainer:** Constrained to the bottom 100px of the screen using Control node anchors.
- **Result:** PASS. Does not block the central gameplay area or obscure incoming projectiles.

## EFFECTS
- **Particles:** Localized CPUParticles2D attached directly to the entities emitting them (e.g. `FrostAura` radius 18x27). Environmental particles span across biome regions behind the foreground layer.
- **Result:** PASS. No screen-dominating global filters exist.

## ENVIRONMENT
- **Parallax Layers:** `FarBackground` and `MidBackground` use motion scales of 0.2 and 0.5 respectively, conveying immense depth and dwarfing the foreground platforming layer.
- **Result:** PASS. Player successfully feels small in an abandoned, massive world.
