# POLISH AUDIT

## Current Architecture
- **Entities**: Player, Enemy, Boss, Checkpoint, Gate. 
- **Systems**: Physics (Matter.js), Rendering (THREE.js + WebGL), LevelManager (Procedural/Hardcoded platform definitions), CombatSystem (Distance + facing-based melee), InputSystem, UIAndDialogue, AudioManager, ParticleSystem.
- **Config**: `CreatureConfig.js` handles stats, hitbox size, and sprite folder maps.
- **Loop**: Handled centrally in `Game.js`.

## Existing Systems
- **Player Mechanics**: Movement, Jump, Attack (hit-stop implemented implicitly via zeroing velocity), Block (damage reduction, speed reduction), and Death states.
- **Enemy AI**: Driven by distance to player. Flips sprite appropriately. Contains grounded and anti-gravity "flying" states. Uses a simple proximity state machine (`run` vs `attack`).
- **Boss AI**: A time-based state machine (`idle` -> `run` -> `telegraph` -> `attack`). Telegraphing uses a red flashing box.
- **Biomes**: Dark, Ice, Jungle. Currently massive (10,000px wide) with hardcoded platforms and distributed encounters. 

## Known Limitations
- The player's attack hit-stop is abrupt and currently tied to zeroing velocity while attacking.
- Enemy AI (spiders, wolves, lizards) currently all share the identical distance-based chase logic. Only speeds and ranges vary.
- Bosses currently only have a single telegraph/attack cycle. There are no secondary attacks or 50% HP phases.
- Block visual feedback is entirely missing (no shield or color change when 'C' is held).

## Potential Bugs
- Enemies could stack directly on top of each other because Matter.js sensors/ghost bodies don't repel each other (or they are completely clipping).
- Flying enemies might sink if `gravityScale: 0` isn't fully neutralizing their mass/force, or they might clip through the player instead of swooping.
- Boss teleporting isn't explicitly blocked if velocities spike.

## Systems That Should NOT Be Rewritten
- **Matter.js integration**: The core physics loop works. Do not replace it with custom AABB.
- **LevelManager layouts**: The 10,000px layouts were handcrafted in the previous phase. Do not wipe them out.
- **Asset/Atlas Animator**: The texture loading and atlas parsing works flawlessly. Do not rewrite.
- **Validation Suite**: `validate_all.js` has 740 passing tests. Maintain compatibility with it.
