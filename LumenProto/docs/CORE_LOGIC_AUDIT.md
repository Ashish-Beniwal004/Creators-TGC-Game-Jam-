# Core Logic Audit

## 1. Checkpoint Respawn System

```text
INPUT (Press 'R')
 ↓
INPUT SYSTEM (InputSystem.js adds 'KeyR' to `justPressed`)
 ↓
UI / GAME STATE (Game.js checks `this.ui.isDead` and `this.input.isJustPressed('KeyR')`)
 ↓
GAME LOOP (Game.js calls `LevelManager.loadLevel` or `resetEnemies`, resets `respawnPoint.x`, `respawnPoint.y`, and calls `player.resetAtCheckpoint(x, y)`)
 ↓
PLAYER / ENTITY STATE (Player.js clears health, sets `isDead=false`, `isHurt=false`, explicitly clears velocity/forces)
 ↓
PHYSICS (Player.js explicit `Matter.Body.setPosition(body, {x, y})` and resets THREE.js sprite)
 ↓
RESULT (Player teleports to checkpoint)
```

**Where the chain broke:**
1. **Game Loop Frozen**: In `Game.js`, the handle restart block called `return;` without calling `requestAnimationFrame(this.loop.bind(this));`. This stopped the entire game loop indefinitely, requiring a full browser refresh to continue playing. It made it seem like the respawn system didn't work at all.
2. **Duplicate Entities (Race Condition)**: In `LevelManager.js`, `resetEnemies()` cleared `this.game.enemies`, but did not cancel pending asynchronous `spawnEnemy` promises. If the player died quickly and respawned while enemies were still spawning from `loadLevel`, the new array would fill up with both old pending spawns and new ones, creating duplicate enemies, stale bodies, and memory leaks.

## 2. Block / Shield System

```text
INPUT (Hold 'C')
 ↓
INPUT SYSTEM (InputSystem.js maps 'KeyC' as `isDown` true)
 ↓
PLAYER / ENTITY STATE (Player.js evaluates `isBlocking = this.input.isDown('KeyC') && !this.isAttacking`)
 ↓
PHYSICS (Player speed is reduced to `speed * 0.3`)
 ↓
GAME LOOP (Game.js combat checks `Enemy.canDealDamage()`)
 ↓
UI / GAME STATE (Player receives damage via `player.takeDamage`, hits `if (this.isBlocking)` mitigation)
 ↓
RESULT (Damage reduced to 1/4, knockback reduced)
```

**Where the chain broke:**
1. **State Machine Locked by Hurt State**: In `Player.js`, `this.isBlocking` was evaluated inside `if (!this.isHurt)`. When a blocked attack hit the player, `takeDamage` set `this.isHurt = true`. The player was then locked out of evaluating input, meaning releasing `C` during hitstun did not drop the shield, and pressing `C` during hitstun didn't raise it. The block state was effectively disconnected from the input system during hitstun, causing severe unresponsiveness.

## 3. Attack and Mutual Exclusion

```text
INPUT (Press 'X' while holding 'C', then release 'C', press 'X')
 ↓
INPUT SYSTEM (`justPressed['KeyX']` set)
 ↓
PLAYER / ENTITY STATE (Player evaluates `isAttacking`)
 ↓
RESULT (Attack triggers only if `!this.isBlocking`)
```

**Where the chain broke:**
The mutual exclusion logic itself (`!this.isBlocking && !this.isAttacking`) was technically sound, but because `isBlocking` was getting stuck due to the hurt state locking issue mentioned above, players felt they couldn't attack after blocking a hit, leading to reports of mutual exclusion bugs.

## 4. Void Death

```text
PHYSICS (Player falls below y > 1500)
 ↓
GAME LOOP (Game.js detects position and calls `player.die()`)
 ↓
PLAYER / ENTITY STATE (`player.health = 0`)
 ↓
UI / GAME STATE (`UIAndDialogue.js` detects `health <= 0` and triggers "YOU DIED" screen)
```

**Where the chain broke:**
This chain was mostly functioning correctly. Block mitigation correctly bypassed the void fall because `Game.js` directly calls `player.die()` for void falls instead of `player.takeDamage()`, guaranteeing death.

## 5. Enemy / Boss Damage Pathway

```text
GAME LOOP (Enemy AI updates, triggers `isAttacking`)
 ↓
ENTITY STATE (Enemy `canDealDamage()` opens a timed window)
 ↓
PHYSICS / COMBAT (`CombatSystem.checkMeleeHit()` returns true if in range)
 ↓
PLAYER STATE (`player.takeDamage(amount)` executes)
```

**Where the chain broke:**
This pathway was verified intact. Enemies do not bypass the block logic; they all correctly use `player.takeDamage`, allowing the block modifier to apply. The shield bugs were entirely on the `Player.js` side handling of state persistence.
