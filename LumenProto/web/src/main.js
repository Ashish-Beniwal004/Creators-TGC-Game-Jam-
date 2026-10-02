import { Game } from './game/Game.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const game = new Game();
        await game.init();
    } catch (error) {
        console.error("FATAL GAME INITIALIZATION ERROR:", error);
        const container = document.getElementById('game-container') || document.body;
        container.innerHTML = `
            <div style="
                position: absolute; top: 0; left: 0; width: 100vw; height: 100vh;
                background-color: black; color: red; font-family: monospace;
                padding: 40px; box-sizing: border-box; z-index: 99999;
            ">
                <h1 style="border-bottom: 2px solid red; padding-bottom: 10px;">LUMEN FAILED TO START</h1>
                <h2 style="color: white; margin-top: 20px;">Error Details:</h2>
                <pre style="background: #220000; padding: 20px; border: 1px solid red; white-space: pre-wrap; font-size: 16px;">${error.stack || error.message || error}</pre>
                <p style="color: yellow; margin-top: 20px;">Please check the browser console and network tab for 404s or missing assets.</p>
            </div>
        `;
    }
});
