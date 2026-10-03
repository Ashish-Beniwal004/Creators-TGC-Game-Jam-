# Combat and Level Repair Report

## 1. Impossible Platforming Repairs

The previous platforming logic contained sections that were mathematically impossible to cross with the player's given physics parameters (jump force -12.0, speed 4.0, air friction 0.02). 

Specifically, gaps wider than 50px combined with vertical elevations of 40px or more caused the player to lose momentum and hit the sides of the platforms, blocking progression. This was most evident in the Jungle biome (spider climb) and the Dark biome (high route).

**Fixes Applied (in `LevelManager.js`):**

*   **Dark Biome:** 
    *   Adjusted the "Environmental Challenge" high route. The first platform was moved from `5000, 350` to `4900, 400`, reducing the vertical jump from the previous `4500, 500` platform.
    *   Adjusted the second platform from `5300, 300` to `5200, 320`.
*   **Ice Biome:**
    *   Adjusted the "Slippery gaps" section. Moved the elevated platform from `3150, 300` to `3100, 320` to reduce the jump distance.
*   **Jungle Biome:**
    *   Adjusted the "Vertical Climb" section. 
    *   Moved the spider's platform from `2500, 300` to `2400, 320`.
    *   Moved the bat's platform from `2800, 200` to `2600, 240`.
    *   Adjusted corresponding enemy spawn locations to match the new coordinates.

## 2. Creature Special Attacks (Spider & Bat)

To increase combat variety without disrupting the existing state machine, a new `Projectile` system was implemented and integrated seamlessly into the existing combat loop.

**Implementation Details:**

*   **`CreatureConfig.js` Updated:**
    *   Added `specialAttack: "web"`, `specialAttackRange: 250`, `specialAttackCooldown: 3.5`, `specialAttackDamage: 2`, `specialAttackProjectileSpeed: 4` to Spider.
    *   Added `specialAttack: "acid"`, `specialAttackRange: 250`, `specialAttackCooldown: 3.0`, `specialAttackDamage: 10`, `specialAttackProjectileSpeed: 5` to Bat.

*   **`Projectile.js` Created:**
    *   Manages the lifecycle (spawn, update, destroy) of non-colliding Matter.js sensor bodies.
    *   Renders a simple colored mesh (white for web, green for acid).
    *   Automatically cleans itself up after 3 seconds to prevent memory leaks.

*   **`Enemy.js` Updated:**
    *   Enemies now track a `specialCooldownTimer`.
    *   If a player enters `specialAttackRange` and the cooldown is ready, the enemy transitions to an `attack` state, flagging `currentAttackType = "special"`.
    *   The projectile is fired exactly halfway through the attack animation duration (wind-up).

*   **`Game.js` Integration:**
    *   A `this.projectiles` array manages all active projectiles.
    *   Added precise collision detection between projectiles, the player's bounding box, and terrain platforms.
    *   Projectiles are wiped during level resets (`resetEnemies`) and transitions to prevent cross-level bugs.

## 3. Block System Integration (`C` Key)

The new projectiles fully respect the game's defensive mechanics:

*   **Web Projectile (Spider):**
    *   **Unblocked:** Deals 2 damage and applies a 2.0-second slow effect (`isWebbed`). The player turns pale green.
    *   **Blocked:** The projectile is destroyed with no damage and no slow effect.
*   **Acid Projectile (Bat):**
    *   **Unblocked:** Deals 10 damage and triggers standard knockback.
    *   **Blocked:** The damage is mitigated down to 25% (2 damage).

## 4. Test Verification

The `tools/validate_all.js` test suite was expanded to include deterministic simulations for the new projectile lifecycle:
*   `TEST H` verifies that unblocked webs slow the player.
*   `TEST I` verifies that blocking successfully nullifies the web slow effect.
*   **All 756 tests currently pass.**
