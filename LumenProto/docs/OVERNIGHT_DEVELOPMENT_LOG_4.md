# Overnight Development Log (Session 4: Critical Bug Fixes)

## Phase 1: Player Death and Respawn Lock
- **Issue:** When the player reached 0 health, the 'R' key did not restart the game. The Ice Biome dialogue could also incorrectly trigger post-death.
- **Root Cause:** In `Game.js`, the loop performed an early `return` when `this.ui.isDead === true`. Because `this.input.update()` (which clears the just-pressed buffer) was at the bottom of the loop, it was never called while dead. The 'R' key event accumulated but never triggered properly. Additionally, `LevelManager.update()` was still running, allowing the dead player's knockback velocity to trigger unlocked biome gates post-death.
- **Fix:** 
  1. Moved `this.input.update()` into the early return block so the input buffer clears cleanly while dead/paused.
  2. Modified `LevelManager.js` to skip `update()` entirely if `this.game.ui.isDead` is true, cleanly preventing dialogue locks and accidental biome transitions.

## Phase 2: Block Mechanic Input Bug
- **Issue:** The player could not block by holding 'C'.
- **Root Cause:** In `InputSystem.js`, the `isJustPressed(code)` method incorrectly contained `|| this.keys[code] === true`. This meant `isJustPressed` behaved identically to `isDown`, essentially firing 60 times a second for every held key. This subtly broke combat timing and prevented continuous actions like block from functioning properly in conjunction with other state checks.
- **Fix:** Removed the erroneous logical OR. `isJustPressed` now strictly returns true for a single frame. The 'C' block mechanic now engages properly while held.

## Phase 3: Boss AI Movement Stalling
- **Issue:** The Boss (Ice Biome enemy) spawned visibly but would frequently stop moving and stare blankly before attacking.
- **Root Cause:** The Boss used a rigid, time-based state machine (Run for 3.0s -> Telegraph for 1.0s -> Attack). If the boss came within attack range (80px) during the 3.0s 'run' phase, it stopped moving but did not abort the timer, standing idle until the remaining time elapsed.
- **Fix:** Modified `Boss.js` AI to dynamically transition from `run` to `telegraph` the exact frame it comes within range of the player, creating aggressive and highly responsive movement.
