# Lumen

**Lumen** is a dark-fantasy action platformer centered around the mechanics of light. The player controls a mysterious light-bearing character exploring a corrupted, monochrome world. Light is utilized as both a core gameplay mechanic and a visual storytelling device as the player fights corrupted creatures, navigates ruined environments, and gradually restores color and light to the world.

## Team: Creators
* **Ashish Beniwal** - ashish.beniwal@students.iiit.ac.in (IndieConnect ID: ashishbeniwal)
* **Ishit Agarwal** - ishit.agarwal@students.iiit.ac.in (IndieConnect ID: hyperterror)
* **Princy Patel** - princy.patel@students.iiit.ac.in (IndieConnect ID: tinchu)
* **Moiesha Gupta** - moiesha.gupta@students.iiit.ac.in (IndieConnect ID: ascian)

## GameJam Themes

* **Light:** Light is the central gameplay mechanic. Lumen carries a light source and uses light energy (Blue Core/Green Core) during exploration, combat against corrupted enemies, and the environmental restoration of the dark world.
* **Comic:** The game features a comic-book presentation layer overlaying its dark-fantasy art direction. While the core pixel-art remains, the presentation will utilize comic-panel inspired framing, dramatic action cuts, impact flashes, and stylized attack effects to highlight key moments. *(Note: The comic presentation layer is planned for the final web build).*
* **Twist:** The narrative twist centers around Lumen's relationship with the corrupted world and the light. The player initially believes they are simply restoring a dead world, but later discovers that the source of the corruption and Lumen's own purpose are intimately connected.

## Gameplay
The player navigates a 2D side-scrolling environment. Combat involves striking enemies to build up a dynamic "LightPower" meter, which is then expended for special attacks (e.g., throwing Ice Projectiles). Exploration involves precision platforming, discovering colored cores that unlock new biomes (Dark World -> Ice Biome -> Jungle Biome), and fighting bosses that guard environmental gates.

## Visual Style
The game utilizes a dark-fantasy pixel art aesthetic combined with a comic-inspired presentation. The environments are built from ancient ruins, dark stone platforms, and glowing magical elements (cyan/blue/green crystals), creating a striking contrast against the dark background.

## Technology & Implementation State

**Current Prototype (Godot 4):**
The current working prototype in this repository is built using Godot 4 (GDScript). It is a fully functional 2D action platformer with integrated pixel-art assets, complex collision, state machines, and a dynamic light/combat system. 

**Intended Web Implementation:**
The final target architecture for this game is a native JavaScript Web Game using:
* **Three.js:** For rendering the 2D/2.5D visual layers, applying shaders, and rendering the comic-book style presentation.
* **InstancedBufferGeometry:** To be used for rendering massive amounts of environmental particles (spores, snow, dust) and large tilemaps efficiently in WebGL.
* **JavaScript Physics (Matter.js):** To replace Godot's physics engine, handling character controllers, rigid body collisions, and platforming logic natively in JS.

**Migration Status:**
* **Currently:** The project is strictly 100% Godot 4. There is no active Three.js or Matter.js code in this repository. 
* **Next Steps:** The generated visual assets and conceptual gameplay logic (state machines, light mechanics) will be ported to the JavaScript architecture. The current repository serves as the definitive mechanical and visual design prototype.
