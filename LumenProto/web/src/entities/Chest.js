import * as Matter from 'matter-js';
import * as THREE from 'three';
import chestImg from '../../../assets/chests/chest-removebg-preview.png';

export class Chest {
    constructor(physics, scene, x, y, game) {
        this.physics = physics;
        this.scene = scene;
        this.game = game;
        this.x = x;
        this.y = y;
        this.isOpened = false;
        
        // Sensor body to detect player
        this.body = Matter.Bodies.rectangle(x, y, 60, 60, {
            isStatic: true,
            isSensor: true,
            label: 'chest'
        });
        Matter.Composite.add(this.physics.engine.world, this.body);
        
        // Visual (Plane with texture)
        this.tex = new THREE.TextureLoader().load(chestImg).clone();
        this.tex.colorSpace = THREE.SRGBColorSpace;
        this.tex.needsUpdate = true;
        
        // Spritesheet is 4x4. Zoom in to one frame.
        this.tex.repeat.set(1/4, 1/4);
        // Set to top-left frame (Closed Chest). WebGL UV Y=0 is bottom.
        this.tex.offset.set(0, 3/4);
        
        const geo = new THREE.PlaneGeometry(80, 80);
        this.material = new THREE.MeshBasicMaterial({ 
            map: this.tex,
            transparent: true,
            side: THREE.DoubleSide
        });
        this.mesh = new THREE.Mesh(geo, this.material);
        this.mesh.position.set(x, -y, -5);
        this.scene.add(this.mesh);
    }
    
    open() {
        if (this.isOpened) return;
        this.isOpened = true;
        
        // Change texture to the bottom-right frame (Fully open and glowing)
        this.tex.offset.set(3/4, 0);
        this.material.color.setHex(0x888888); // Also darken it for clear visual state change
        
        // Random Reward (Health OR Invincibility)
        if (this.game.player) {
            if (Math.random() > 0.5) {
                this.game.player.health = Math.min(100, this.game.player.health + 25);
                this.game.ui.showDialogue(["CHEST OPENED!", "+25 Health"]);
            } else {
                this.game.player.isInvincible = true;
                this.game.player.invincibleTimer = 10.0;
                this.game.ui.showDialogue(["CHEST OPENED!", "INVINCIBILITY (10s)"]);
            }
        }
    }
    
    destroy() {
        Matter.Composite.remove(this.physics.engine.world, this.body);
        this.scene.remove(this.mesh);
    }
}
