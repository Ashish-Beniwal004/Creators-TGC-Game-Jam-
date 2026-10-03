# Core Logic Repair Report

## Bugs Found

1. **R Key Respawn Freeze**: Pressing `R` after dying caused the game to completely freeze. It correctly teleported the player and reset health, but the game loop terminated entirely because it did not request the next animation frame.
2. **Duplicate Enemies on Respawn**: Dying quickly and respawning during a biome load caused the async `spawnEnemy` and `spawnBoss` routines to push stale enemies into the array after the array had already been cleared. This caused invisible collision bodies, double-damage attacks, and un-killable duplicate enemies.
3. **Block / Shield State Locked in Hitstun**: When taking damage, the player enters a 0.5s or 0.3s hurt state. During this hitstun, the `isBlocking` state was skipped over during updates, meaning if you were blocking when hit, you would remain blocking involuntarily throughout hitstun, and releasing `C` was ignored.

## Root Causes

- **Game Loop Disruption**: `Game.js` used an early `return;` in the `R` key input handler but failed to queue the next loop tick via `requestAnimationFrame(this.loop.bind(this));`.
- **Async Spawning Race Condition**: `LevelManager.js` used asynchronous `init()` calls for enemies but pushed them to the global array blindly upon resolution, irrespective of whether a reset had occurred in the meantime.
- **Input Evaluation Scope**: `Player.js` conditionally evaluated `isBlocking = this.input.isDown('KeyC')` inside an `if (!this.isHurt)` block. It failed to decouple player input intention from physics/state lockouts.

## Fixes

1. Added `requestAnimationFrame(this.loop.bind(this));` to the `R` key handler block in `Game.js` before returning, ensuring the loop continues after respawning.
2. Implemented a `spawnId` generational counter in `LevelManager.js`. Every time a level is loaded or enemies are reset, `spawnId` increments. Async spawns verify that `this.spawnId === currentSpawnId` before pushing to the `enemies` array, otherwise they cleanly destroy themselves using `e.die()`.
3. Moved the `isBlocking` evaluation block in `Player.js` outside of the `!this.isHurt` condition, ensuring that the shield state accurately reflects the `C` key status at all times, drastically improving responsiveness and allowing mutual exclusion (`isAttacking`) to process correctly.

## Browser Tests

**TEST: Checkpoint**
RESULT: PASS
OBSERVED: Player successfully touches a checkpoint (turns green). After dying to void or enemy, pressing R teleports the player exactly to the activated checkpoint in the correct biome. Loop resumes flawlessly.

**TEST: Block**
RESULT: PASS
OBSERVED: Holding C reduces speed. Allowing enemy to attack while holding C significantly reduces damage and knockback. Hitstun feels responsive and the shield drops immediately upon releasing C, even during recovery.

**TEST: Block + Attack**
RESULT: PASS
OBSERVED: Holding C prevents X from attacking. Releasing C and pressing X immediately executes an attack. No dead inputs.

**TEST: Repeated Respawn**
RESULT: PASS
OBSERVED: Rapidly triggering death and respawning multiple times does not create duplicate enemies or cause performance drops. Stale async enemies are discarded correctly.

**TEST: Boss**
RESULT: PASS
OBSERVED: Reaching Boss Arena triggers boss sequence. Block correctly mitigates boss attacks.

## Automated Tests

Passed 740/740 automated static validations in `tools/validate_all.js`.
(0 bugs found during static parsing).

## Remaining Issues

- Block lacks a dedicated animation frame (currently uses idle pose). A dedicated defensive posture animation frame could make the visual feedback much clearer.
- While the core logic is strictly enforced, fine-tuning of hitboxes and weapon reach might still be necessary for polish.
