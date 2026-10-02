export class UIAndDialogue {
    constructor() {
        this.container = document.createElement('div');
        this.container.id = 'ui-container';
        Object.assign(this.container.style, {
            position: 'absolute',
            top: '0', left: '0', width: '100vw', height: '100vh',
            pointerEvents: 'none',
            display: 'flex', flexDirection: 'column',
            justifyContent: 'space-between',
            fontFamily: 'monospace'
        });
        document.body.appendChild(this.container);
        
        // HUD
        this.hud = document.createElement('div');
        Object.assign(this.hud.style, { padding: '20px', fontSize: '24px', textShadow: '2px 2px 0 #000' });
        this.container.appendChild(this.hud);
        
        // Dialogue Box (Comic style)
        this.dialogueBox = document.createElement('div');
        Object.assign(this.dialogueBox.style, {
            margin: '20px auto', width: '80%', padding: '20px',
            backgroundColor: '#fff', color: '#000',
            border: '4px solid #000', borderRadius: '10px',
            boxShadow: '8px 8px 0 rgba(0,0,0,0.5)',
            fontSize: '20px', fontWeight: 'bold',
            display: 'none',
            fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif'
        });
        this.container.appendChild(this.dialogueBox);
        
        this.queue = [];
        this.isTyping = false;
        this.currentText = "";
    }
    
    updateHUD(player, light) {
        if (!player) return;
        this.hud.innerHTML = `HEALTH: ${Math.max(0, player.health)}/100<br>LIGHT: ${light.lightPower}/2`;
    }
    
    showDialogue(textLines) {
        this.queue.push(...textLines);
        if (!this.isTyping && this.dialogueBox.style.display === 'none') {
            this.nextDialogue();
        }
    }
    
    nextDialogue() {
        if (this.queue.length === 0) {
            this.dialogueBox.style.display = 'none';
            return;
        }
        this.dialogueBox.style.display = 'block';
        this.currentText = this.queue.shift();
        this.dialogueBox.innerHTML = this.currentText + " <br><span style='font-size:12px; color:gray'>(Press ENTER)</span>";
    }
    
    handleInput(inputSystem) {
        // Debounced enter key
        if (inputSystem.isDown('Enter') && this.dialogueBox.style.display === 'block') {
            if (!this.enterPressed) {
                this.enterPressed = true;
                this.nextDialogue();
            }
        } else {
            this.enterPressed = false;
        }
    }
}
