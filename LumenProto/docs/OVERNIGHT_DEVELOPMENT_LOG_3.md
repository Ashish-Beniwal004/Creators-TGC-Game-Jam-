# Overnight Development Log (Session 3)

## Phase 1: Ice Biome Boss Visibility
- **Issue:** The Ice Biome spawned a "Boss" entity, but the `Boss.js` was still hardcoded to load `villain.png`, which was intentionally removed from `AssetManager.js` in the previous session in favor of `villain_cleaned.png`. As a result, the boss material was null and the sprite was invisible.
- **Fix:** Updated `Boss.js` to reference `villain_cleaned.png`. The Ice Boss ("Cold Blood") and Jungle Boss ("Overgrowth") are now fully visible and scaled correctly.

## Phase 2: Boss Combat Synchronization
- **Issue:** The Boss dealt continuous damage to the player during its entire 0.5s "attack" state because it lacked the `canDealDamage()` frame synchronization added to standard enemies in the previous session.
- **Fix:** Implemented `canDealDamage()` in `Boss.js` so it only deals damage between 0.2s and 0.4s of its attack state, giving the player a fair dodge/block window.

## General
- Re-verified biome progression logic and gate unlocking works accurately with Boss entities (checks `!bossAlive` instead of just the standard enemies array).
