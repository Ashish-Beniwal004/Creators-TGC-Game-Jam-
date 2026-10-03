# Core Gameplay Contract

This document outlines the strict intended behavior and state machine for all major gameplay mechanics in LumenProto.

## 1. Movement
- Uses `ArrowLeft`/`ArrowRight` or `A`/`D` (`isDown`).
- Modifies `Matter.Body` velocity `x`.
- Block/shield reduces `speed` by 70%.

## 2. Jump
- Uses `ArrowUp`, `W`, or `Space` (`isJustPressed`).
- Modifies `Matter.Body` velocity `y` negatively (anti-gravity).
- Only executable when `isGrounded` is true.

## 3. Attack
- Uses `X` (`isJustPressed`).
- Enters `isAttacking` state. Sets `attackTimer`.
- Prevents movement (velocity `x` zeroed).
- Hitbox deals damage to enemies overlapping the attack range in front of player.

## 4. Block/Shield
- Uses `C` (`isDown`).
- Sets `isBlocking = true`.
- Cannot be initiated while `isAttacking`.
- When hit, reduces incoming damage by 75% and reduces knockback.
- Block state persists during hitstun and immediately recovers if C is still held.

## 5. Enemy Attack
- Controlled by `Enemy.js` state machine.
- Requires distance <= `attackRange`.
- Sets `isAttacking` and `attackTimer`.
- `canDealDamage()` opens a window during the attack frames.

## 6. Enemy Damage
- Triggered by Player attack overlapping Enemy.
- Decrements Enemy `health`.
- Sets Enemy `isHurt = true` preventing immediate retaliation.

## 7. Boss Attack
- Boss has multiple states (`telegraph`, `attack`).
- `canDealDamage()` only returns true during the middle of the `attack` state.
- Applies heavy damage and camera shake.

## 8. Player Damage
- Received via `player.takeDamage(amount, knockbackDir)`.
- If `isBlocking`: reduces damage, sets `isHurt`, applies minimal knockback.
- If not blocking: full damage, sets `isHurt`, applies full knockback, cancels `isAttacking`, cancels `isBlocking`.

## 9. Player Death
- Triggered when `player.health <= 0` or void death (y > 1500).
- Sets `isDead = true`.
- Pauses game loop physics (via early return).
- Shows Death UI.

## 10. Checkpoint Activation
- Triggered when `Matter.Bounds.overlaps` player and checkpoint.
- Sets `checkpoint.isActivated = true` and updates visuals (green).
- Stores `this.game.respawnPoint = {x, y, biome}`.

## 11. Checkpoint Persistence
- The `respawnPoint` persists in `Game.js` across deaths.
- Overwritten only when a new checkpoint is touched.

## 12. R Respawn
- Uses `R` (`isJustPressed`) while `isDead == true`.
- Removes Death UI.
- Reloads Biome (or just resets enemies if biome unchanged).
- Teleports player to `respawnPoint.x`, `respawnPoint.y`.
- Restores player health, resets velocity, clears hurt/attack states.
- Continues `requestAnimationFrame`.

## 13. Void Death
- `Game.js` checks `player.body.position.y > 1500`.
- Bypasses `takeDamage` and directly calls `player.die()`.

## 14. Enemy Void Death
- `Enemy.js` checks `body.position.y > 1500`.
- Calls `die()`, clearing body and mesh.
- Automatically splices from `game.enemies` array.

## 15. Gate Locking
- `LevelManager.js` checks `game.enemies.length === 0` and `!bossAlive`.
- Gate body is solid `isStatic = true` and red.

## 16. Gate Unlocking
- When conditions met, `gate.unlock()` is called.
- Gate becomes `isSensor = true` and blue.

## 17. Biome Transition
- Player overlaps unlocked Gate.
- `LevelManager.loadLevel(targetBiome)` is called.
- Player velocity is reset.
- Player teleports to `100, 300` in the new biome.

## 18. Boss Death
- Boss health <= 0 triggers `boss.die()`.
- Mesh and physics removed.
- Gate unlocks as `bossAlive` becomes false.

## 19. Pause
- Uses `Escape` or `P` (`isJustPressed`).
- `UIAndDialogue.js` sets `isPaused = true`.
- `Game.js` pauses physics and entities updates but keeps rendering.

## 20. Dialogue
- Pauses physics and entities (except renderer).
- `UIAndDialogue.js` manages state.
- Advances via Input system.

## 21. Entity Cleanup
- `resetEnemies()` increments `spawnId` to kill pending async spawns.
- Iterates and destroys all physics bodies and meshes.
- Empties arrays explicitly.
