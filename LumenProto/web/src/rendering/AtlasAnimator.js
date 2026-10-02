export class AtlasAnimator {
    constructor(spriteMesh, assetManager, animationMap) {
        this.sprite = spriteMesh;
        this.assetManager = assetManager;
        this.animationMap = animationMap; // { "idle": ["frame_000.webp", ...], "run": [...] }
        
        this.currentState = null;
        this.frames = [];
        this.frameIndex = 0;
        
        this.accumulator = 0;
        this.fps = 10;
        this.frameDuration = 1.0 / this.fps;
        
        this.isLooping = true;
        this.isPlaying = false;
        
        // To handle dynamic sizing based on actual frame size
        this.baseScale = 0.5; 
    }
    
    play(state, fps = 10, loop = true) {
        if (this.currentState === state) return;
        
        const frames = this.animationMap[state];
        if (!frames || frames.length === 0) {
            console.warn(`Animation state '${state}' not found or empty.`);
            return;
        }
        
        this.currentState = state;
        this.frames = frames;
        this.frameIndex = 0;
        this.accumulator = 0;
        this.fps = fps;
        this.frameDuration = 1.0 / this.fps;
        this.isLooping = loop;
        this.isPlaying = true;
        
        this.applyCurrentFrame();
    }
    
    setFlipX(flip) {
        // We use scale.x = -1 to flip in Three.js, but since we might scale the sprite to match frame dimensions,
        // we use a multiplier.
        const sign = flip ? -1 : 1;
        this.sprite.scale.x = Math.abs(this.sprite.scale.x) * sign;
    }
    
    update(delta) {
        if (!this.isPlaying || this.frames.length <= 1) return;
        
        this.accumulator += delta;
        
        if (this.accumulator >= this.frameDuration) {
            this.accumulator -= this.frameDuration;
            this.frameIndex++;
            
            if (this.frameIndex >= this.frames.length) {
                if (this.isLooping) {
                    this.frameIndex = 0;
                } else {
                    this.frameIndex = this.frames.length - 1;
                    this.isPlaying = false;
                }
            }
            
            this.applyCurrentFrame();
        }
    }
    
    applyCurrentFrame() {
        const frameName = this.frames[this.frameIndex];
        const material = this.assetManager.getFrameMaterial(frameName);
        if (material) {
            this.sprite.material = material;
            
            // Optionally adjust scale to match the actual frame size to prevent distortion
            const meta = this.assetManager.atlasMeta[frameName];
            if (meta) {
                const signX = Math.sign(this.sprite.scale.x) || 1;
                this.sprite.scale.set(meta.width * this.baseScale * signX, meta.height * this.baseScale, 1);
            }
        }
    }
}
