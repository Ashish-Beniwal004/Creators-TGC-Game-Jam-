# Overnight Development Log

## Phase 1 & 2: Biome Progression and Crossing Gates
- **Issue:** Level transition was hardcoded to `px > 1500`. There was no progression blocker.
- **Fix:** Implemented a new `Gate.js` physical entity. 
  - The Gate spawns at the end of the biome as a red, solid `Matter.js` box.
  - If touched while locked, it triggers a dialogue: `"BIOME NOT CLEARED. X ENEMIES REMAIN."`
  - `LevelManager.js` monitors `game.enemies`. When the count reaches 0, the gate visually turns blue, sets `isSensor = true`, and unlocks.
  - Walking into an unlocked gate cleanly triggers `loadLevel(targetBiome)` and teleports the player to the start of the new level.

## Phase 3: Checkpoint System
- **Issue:** Death forced a hard window reload, resetting the entire game state and sending the player back to the very beginning of the Dark World.
- **Fix:** Implemented `Checkpoint.js`. 
  - A checkpoint spawns at the start of each biome. When the player walks past it, it lights up green and saves `game.respawnPoint = {x, y, biome}`.
  - When the player dies and presses 'R', the game no longer reloads the browser window. Instead, it fully resets player health, removes the death screen, runs `loadLevel()` on the saved biome (respawning enemies like a Soulslike), and teleports the player perfectly to the checkpoint coordinates.

## Phase 4: Block / Defend Combat
- **Issue:** The player had no defensive options against enemy attacks other than walking away.
- **Fix:** Added 'C' key block logic to `Player.js`.
  - Holding 'C' applies a blue visual tint to the player sprite.
  - Movement speed is reduced to 30%.
  - Attacking is disabled.
  - Incoming damage from all sources is reduced by 75% (e.g., 20 damage becomes 5 damage), and knockback is minimized to prevent stunlocks.

## Phase 5: Villain Rendering & Transparency
- **Issue:** The Corrupted Sentry had a baked-in dark gray background artifact.
- **Fix:** Created a custom CV Python script (`remove_villain_bg.py`) to dynamically flood-fill and remove the specific hex background color and replace it with true alpha transparency. Saved as `villain_cleaned.png`.

## Phase 6: Combat Timing Polish
- **Issue:** Damage was registered immediately on button press, ignoring animation frames.
- **Fix:** Added `canDealDamage()` to both Player and Enemy. Damage is now only dealt precisely during the active swing frames of the sword (Player) or the middle telegraph window of the spear (Enemy).
