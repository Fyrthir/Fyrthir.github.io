export class GameOverScene extends Phaser.Scene{
    constructor(){
        super({
            key: "GAMEOVER"
        })
    }

    create(){
               
        this.final_score = this.game.score;
        this.add.text(125, 50, "Game Over", { fontSize: '100px', fontStyle: 'Bold', fill: '#000000' });
        this.add.text(75, 250, "Final Score: " + this.final_score, { fontSize: '75px', fontStyle: 'Bold', fill: '#000000' });

        const StartButton = this.add.text(225, 450, 'Try again', { fontSize: '60px', fontStyle: 'Bold', fill: '#00FF99' });
        StartButton.setInteractive();
        StartButton.on('pointerdown', () => this.scene.start("GAME"));

        this.game.score = 0;
        this.game.level=0;
        this.game.iteration_level=0;
        
    }
}