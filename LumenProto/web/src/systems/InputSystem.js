export class InputSystem {
    constructor() {
        this.keys = {};
        this.justPressed = {};
        
        window.addEventListener('keydown', (e) => {
            if (!this.keys[e.code]) {
                this.justPressed[e.code] = true;
            }
            this.keys[e.code] = true;
        });
        
        window.addEventListener('keyup', (e) => {
            this.keys[e.code] = false;
        });
        
        window.addEventListener('mousedown', (e) => {
            const code = 'Mouse' + e.button;
            if (!this.keys[code]) {
                this.justPressed[code] = true;
            }
            this.keys[code] = true;
        });
        
        window.addEventListener('mouseup', (e) => {
            const code = 'Mouse' + e.button;
            this.keys[code] = false;
        });
        
        window.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
        
        window.addEventListener('blur', () => {
            this.keys = {};
            this.justPressed = {};
        });
    }
    
    init() {}
    
    update() {
        // Clear justPressed at the end of the frame
        this.justPressed = {};
    }
    
    isDown(code) {
        return this.keys[code] === true;
    }
    
    isJustPressed(code) {
        return this.justPressed[code] === true;
    }
    
    consumeKey(code) {
        this.keys[code] = false;
        this.justPressed[code] = false;
    }
}
