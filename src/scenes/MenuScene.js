export class MenuScene extends Phaser.Scene{
    constructor(){
        super({
            key: "MENU"
        })
    }
    
    preload() {
        this.load.audio('Music_Game','assets/Card_game.mp3');

    }
    create(){

        this.game.music = this.game.sound.add('Music_Game');
        // var level = 1;
        // var iteration_level=1;
        this.add.text(125, 200, 'Start the game ?', { fontSize: '60px', fontStyle: 'Bold', fill: '#000000' });
        const StartButton = this.add.text(250, 350, 'Click me', { fontSize: '60px', fontStyle: 'Bold', fill: '#000000' });
        StartButton.setInteractive();
        StartButton.on('pointerdown', () => this.scene.start("GAME"));
        StartButton.on('pointerdown', () => this.game.music.play());
  

    }
    
}
