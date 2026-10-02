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
            fontSize: '2vw', fontWeight: 'bold', // Responsive font size
            display: 'none',
            fontFamily: '"Comic Sans MS", "Chalkboard SE", sans-serif'
        });
        this.container.appendChild(this.dialogueBox);
        
        // Pause/Death Overlay
        this.overlay = document.createElement('div');
        Object.assign(this.overlay.style, {
            position: 'absolute', top: '0', left: '0', width: '100%', height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'none', flexDirection: 'column',
            justifyContent: 'center', alignItems: 'center',
            fontSize: '4vw', color: 'white'
        });
        this.container.appendChild(this.overlay);
        
        this.queue = [];
        this.isTyping = false;
        this.currentText = "";
        
        this.isPaused = false;
        this.isDead = false;
        this.isVictory = false;
    }
    
    updateHUD(player, light) {
        if (!player) return;
        this.hud.innerHTML = `HEALTH: ${Math.max(0, player.health)}/100<br>LIGHT: ${light.lightPower}/2`;
        
        if (player.health <= 0 && !this.isDead) {
            this.showDeathScreen();
        }
    }
    
    showDeathScreen() {
        this.isDead = true;
        this.overlay.style.display = 'flex';
        this.overlay.innerHTML = `<div>YOU DIED</div><div style="font-size:2vw; margin-top:20px;">Press 'R' to Restart</div>`;
    }
    
    showVictoryScreen() {
        this.isVictory = true;
        this.overlay.style.display = 'flex';
        this.overlay.innerHTML = `<div>LIGHT RESTORED</div><div style="font-size:2vw; margin-top:20px;">The Dark World is safe.</div>`;
    }
    
    togglePause() {
        if (this.isDead || this.isVictory) return;
        this.isPaused = !this.isPaused;
        if (this.isPaused) {
            this.overlay.style.display = 'flex';
            this.overlay.innerHTML = `<div>PAUSED</div><div style="font-size:2vw; margin-top:20px;">Press 'ESC' or 'P' to Resume</div>`;
        } else {
            this.overlay.style.display = 'none';
        }
    }
    
    showDialogue(textLines) {
        console.log("showDialogue called with:", textLines);
        this.queue.push(...textLines);
        if (!this.isTyping && this.dialogueBox.style.display === 'none') {
            this.nextDialogue();
        }
    }
    
    nextDialogue() {
        console.log("nextDialogue called. Queue length:", this.queue.length);
        if (this.queue.length === 0) {
            console.log("Queue empty. Hiding dialogue box.");
            this.dialogueBox.style.display = 'none';
            return;
        }
        this.dialogueBox.style.display = 'block';
        this.currentText = this.queue.shift();
        console.log("Showing text:", this.currentText);
        this.dialogueBox.innerHTML = this.currentText + " <br><span style='font-size:12px; color:gray'>(Press ENTER)</span>";
    }
    
    handleInput(inputSystem) {
        // Handle Pause
        if ((inputSystem.isDown('Escape') || inputSystem.isDown('KeyP')) && !this.pausePressed) {
            this.pausePressed = true;
            this.togglePause();
        } else if (!inputSystem.isDown('Escape') && !inputSystem.isDown('KeyP')) {
            this.pausePressed = false;
        }
        
        // Debounced enter key for dialogue
        if (inputSystem.isJustPressed('Enter') && this.dialogueBox.style.display === 'block') {
            if (!this.enterPressed) {
                console.log("Enter pressed. Advancing dialogue.");
                this.enterPressed = true;
                this.nextDialogue();
            }
        } else if (!inputSystem.isJustPressed('Enter')) {
            this.enterPressed = false;
        }
    }
}
