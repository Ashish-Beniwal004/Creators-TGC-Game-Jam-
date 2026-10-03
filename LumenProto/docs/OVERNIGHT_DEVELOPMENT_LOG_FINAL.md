# Master Debugging & Repair Log

## Complete Audit & Fixes Implemented

1. **Input Lifecycle Semantics Fixed:**
   - **Root Cause:** `isJustPressed` in `InputSystem.js` included `|| this.keys[code] === true`, breaking single-frame input semantics. This caused 'C' (Block) and 'X' (Attack) states to conflict, stall, or endlessly loop depending on key-hold ordering.
   - **Fix:** Purged the `||` logic. `isJustPressed` now strictly returns true for a single frame.

2. **Block Mechanic & State Conflict Fixed:**
   - **Root Cause:** The player could bypass block slowdowns by attacking, or block mid-swing.
   - **Fix:** In `Player.js`, implemented strict state tracking: `this.isBlocking = this.input.isDown('KeyC') && !this.isAttacking;`. Blocking completely cuts incoming damage to 25%, drops movement speed to 30%, and drastically lowers physics knockback. It visibly tints the player `0x55aaff`.

3. **Death & Respawn Flow (No Browser Reloads):**
   - **Root Cause:** Early game versions relied on `window.location.reload()`. We refactored to a true `respawn()` loop, but it retained stale state issues (the player could respawn locked in an attack or hurt state, and a dead player's knockback velocity could push them into a level transition).
   - **Fix:** Added `player.reset()` to definitively clear `isAttacking`, `isHurt`, `isBlocking`, and velocity vectors upon respawning. Placed early-returns in `LevelManager.js` to ensure Gates completely ignore overlapping physics bodies if `this.game.ui.isDead` is true.

4. **Boss AI Stalling Fixed:**
   - **Root Cause:** Bosses utilized a strict time-based AI state machine (Run 3s -> Telegraph 1s -> Attack 0.5s). If they entered the player's 80px range early, they would stop applying velocity but failed to exit the 'Run' state until the timer naturally ran out, looking frozen.
   - **Fix:** Refactored `Boss.js` to dynamically force state transitions to `telegraph` the exact frame they reach the 80px radius, vastly improving the AI's aggressiveness and fluidity.

5. **Entity / Memory Leak Audits:**
   - Validated that `loadLevel()` cleanly iterates and removes all `Matter.Composite` bodies for old platforms, enemies, bosses, and gates before transitioning biomes. Checked that dead entities correctly destroy their own bodies rather than leaving invisible physics colliders. 

6. **Asset Validations:**
   - Replaced all static `villain.png` textures with isolated, 16-frame 4x4 animated spritesheets correctly instantiated in `AssetManager.js` to ensure the Dark, Ice, and Jungle biome bosses and enemies all animate perfectly without transparent bounding-box artifacting.
