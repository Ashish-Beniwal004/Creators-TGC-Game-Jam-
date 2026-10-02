import * as Matter from 'matter-js';

export class PhysicsWorld {
    constructor() {
        this.engine = Matter.Engine.create();
        // Matter.js gravity is 1 down by default, which maps well to screen coordinates
        this.engine.world.gravity.y = 1.5; 
    }
    
    init() {
        // Could set up collision events here later
    }
    
    update(deltaTimeMs) {
        Matter.Engine.update(this.engine, deltaTimeMs);
    }
}
