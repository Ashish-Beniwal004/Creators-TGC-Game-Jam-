# GAMEPLAY FEEL QA REPORT

## 1. World Dimensions

- **Dark Biome:** 9900px wide [-500 ➔ 9400]
- **Ice Biome:** 10100px wide [-500 ➔ 9600]
- **Jungle Biome:** 10100px wide [-500 ➔ 9600]

## 2. Spawn Zones

- **Dimensions:** The first platform stretches from `x = -500` to `x = 1500`.
- **First Enemy Distance:** The player spawns at `x = 100`, giving them 1700px of safe exploration before encountering the first enemy (at `x = 1800`), ensuring they have plenty of time to get accustomed to the mechanics without stress.

## 3. Encounter Distribution

Enemy spacing has been deliberately redesigned to ensure pacing follows the requested formula (Exploration ➔ Encounter ➔ Platforming ➔ Boss).

### Dark Biome (14 Enemies)
- **Early:** 1 Wolf (`x=1800`)
- **Mid:** Spider + Wolf pairing (`x=2800`, `x=3100`)
- **High-ground surprise:** Bat (`x=3800`)
- **Hard Mixed Encounter:** Scorpion + Spider + Wolf (`x=4300` ➔ `4700`)
- **Split-route trap:** Scorpion in a lower pit (`x=5000`), Bat guarding the high reward route (`x=5300`)
- **Final Gauntlet:** Wolf + Spider + Bat + Scorpion (`x=6300` ➔ `6800`), with a final Bat guarding the stairs up to the boss arena (`x=7100`)

### Ice Biome (14 Enemies)
- **Early:** 1 Wolf (`x=1800`)
- **Mid / Open Ice:** Ice Wolf (`x=2500`)
- **Pit Trap:** Ice Wolf + Bat overlapping a drop pit (`x=3900`)
- **Mid Encounter:** Ice Wolf (`x=4400`), Bat (`x=4900`)
- **Hard Mixed Encounter:** Ice Wolf + Wolf + Bat grouped tightly (`x=5400` ➔ `5600`)
- **Platforming Harassment:** Bat guarding slippery jumps (`x=6400`)
- **Final Gauntlet:** Intense wave of Ice Wolf + Wolf + Bat + Ice Wolf (`x=7100` ➔ `7400`)

### Jungle Biome (14 Enemies)
- **Early:** 1 Lizard (`x=1800`)
- **Vertical Climb:** Spider + Bat placed on staggered ascending platforms (`x=2500`, `x=2800`)
- **Swamp Trap:** 2 Crocodiles grouped together in a deep swamp pit (`x=3500`, `x=3700`)
- **Exploration:** 1 Lizard (`x=4200`)
- **Dragon Intro:** A Dragon + Bat encounter requiring aerial combat (`x=4800`, `x=4700`)
- **Canopy / Split:** Spider + Bat on high canopy (`x=5400`, `x=5700`), Crocodile on lower route (`x=6000`)
- **Final Gauntlet:** Lizard + Spider + Dragon guarding the boss arena approach (`x=6800` ➔ `7200`)

## 4. Platforming & Pacing

- Replaced flat stretches with vertical jumps, pits, staggered platforms, and split routes.
- Adjusted maximum horizontal jump gaps to 50–200px and vertical drops to logical limits manageable with the player's `-12` jump force.

## 5. Checkpoints

- **Dark Biome:** 100, 3400, 5900
- **Ice Biome:** 100, 3500, 6700
- **Jungle Biome:** 100, 3100, 6500
- **Logic:** Checkpoints are spaced to reward significant exploration milestones and always precede a difficult encounter or challenging terrain section.

## 6. Boss Arenas

- **Dark Boss:** Starts at `x=8400` on a 2000px wide platform.
- **Ice Boss:** Starts at `x=8600` on a 2000px wide platform.
- **Jungle Boss:** Starts at `x=8600` on a 2000px wide platform.
- The arenas are completely flat, massive, and free from standard enemy spawns to focus fully on the boss fight.

## 7. Bugs Found & Fixed

1. **Test Suite Out of Sync:** The `validate_all.js` suite was hardcoded to check for the old flat-world values.
   - *Fix:* Re-mapped the exact platform sizes, enemy spawn points, and checkpoints into `validate_all.js` to dynamically run against the new handcrafted geometry.
2. **Jump Physics Impossibility:** Initial math on the jump pits had some jumps extending up to 400px gaps, which the player speed (4) and jump (-12) cannot make.
   - *Fix:* Rebalanced gap sizes globally to a maximum of 200px horizontal and 150px vertical.

## 8. Final Test Results

```text
Build: PASS (npm run build success, 0 errors)
Asset validation: PASS
Spawn validation: PASS
Biome validation: PASS
Checkpoint validation: PASS
Enemy simulation: PASS
Boss validation: PASS
Browser playtest: UNAVAILABLE (Proceeded with strict deterministic physics/math assertions)
```
