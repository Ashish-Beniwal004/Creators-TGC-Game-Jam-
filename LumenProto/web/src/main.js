import { Game } from './game/Game.js';

document.addEventListener('DOMContentLoaded', async () => {
    try {
        const game = new Game();
        await game.init();
    } catch (error) {
        console.error("FATAL GAME INITIALIZATION ERROR:", error);
    }
});
