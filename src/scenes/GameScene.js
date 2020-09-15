export class GameScene extends Phaser.Scene{
    constructor(){
        super({
            key: "GAME"
        })
    }

    preload() {
        this.load.image('GreenCard', 'assets/Green_rect.png');
        this.load.image('RedCard', 'assets/Red_rect.png');
    }

    create(){
        this.clockSize = 100;
        var Card=['RedCard','RedCard','RedCard','RedCard'];
        
        // Select the letters
        var list_letter_origin = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        var list=[0];
        for (let i = 0; i < 4; i++){
            var rand_number = Math.floor(Math.random() * (26-i));
            list[i]=list_letter_origin.splice(rand_number,1);
        }
    
        // Selection of the key to press
        const Winning_card = Math.floor(Math.random() * (4));
        Card[Winning_card]='GreenCard';
        var Winning_letter = list[Winning_card];
        Winning_letter = Winning_letter.join();
        this.Winnig_input = this.input.keyboard.addKey(Winning_letter);
        
        // Put the cards on the screen
        this.add.image(150, 150, Card[0]);
        this.add.image(650, 150, Card[1]);
        this.add.image(150, 450, Card[2]);
        this.add.image(650, 450, Card[3]);
    
        // Put the letters on the cards
        this.add.text(125, 100, list[0], { fontSize: '100px', fontStyle: 'Bold', fill: '#000000' });
        this.add.text(625, 100, list[1], { fontSize: '100px', fontStyle: 'Bold', fill: '#000000' });
        this.add.text(125, 400, list[2], { fontSize: '100px', fontStyle: 'Bold', fill: '#000000' });
        this.add.text(625, 400, list[3], { fontSize: '100px', fontStyle: 'Bold', fill: '#000000' });

        // console.log(this.Winnig_input);
        // console.log(this.game.iteration_level);
        // console.log(this.game.level);

        // Create for clock
        this.time_level =[5000, 4000, 3000, 2500, 2000, 1500, 1000, 800, 600, 500, 400, 300, 200]
        this.timerEvent = this.time.addEvent({ delay: this.time_level[this.game.level], timeScale: 1 });
        this.graphics = this.add.graphics({ x: 250, y: 0 });

        // Text for the level
        this.score_text = this.add.text(265, 500 , "Score: " + this.game.score, { fontSize: '50px', fontStyle: 'Bold', fill: '#000000' });
        this.level_text = this.add.text(265, 100 , "Level: " + (this.game.level+1), { fontSize: '50px', fontStyle: 'Bold', fill: '#000000' });
    }
    
    
    update(){

        this.graphics.clear();
        this.drawClock(150, 300, this.timerEvent);
        this.score_text.setText("Score: " + this.game.score);
        this.level_text.setText("Level: " + (this.game.level+1));  
        if (this.Winnig_input.isDown){
            this.scene.restart();
            this.game.score = this.game.score +1;
            this.game.iteration_level = this.game.iteration_level+1;
        }
        if (this.game.iteration_level == 5 && this.game.level < 12){
            this.game.iteration_level =1;
            this.game.level = this.game.level +1;
        }

        if (this.timerEvent.getProgress() == 1) {
            this.scene.start("GAMEOVER");
        }
     
    }

    drawClock(x, y, timer){
      //  Progress is between 0 and 1, where 0 = the hand pointing up and then rotating clockwise a full 360

    //  The frame
    this.graphics.lineStyle(3, 0xffffff, 1);
    this.graphics.strokeCircle(x, y, this.clockSize);

    var angle;
    var dest;
    var p1;
    var p2;
    var size;

    //  The current iteration hand
    size = this.clockSize * 0.95;

    angle = (360 * timer.getProgress()) - 90;
    dest = Phaser.Math.RotateAroundDistance({ x: x, y: y }, x, y, Phaser.Math.DegToRad(angle), size);

    this.graphics.lineStyle(2, 0xffff00, 1);

    this.graphics.beginPath();

    this.graphics.moveTo(x, y);

    p1 = Phaser.Math.RotateAroundDistance({ x: x, y: y }, x, y, Phaser.Math.DegToRad(angle - 5), size * 0.7);

    this.graphics.lineTo(p1.x, p1.y);
    this.graphics.lineTo(dest.x, dest.y);

    this.graphics.moveTo(x, y);

    p2 = Phaser.Math.RotateAroundDistance({ x: x, y: y }, x, y, Phaser.Math.DegToRad(angle + 5), size * 0.7);

    this.graphics.lineTo(p2.x, p2.y);
    this.graphics.lineTo(dest.x, dest.y);
    
    this.graphics.strokePath();
    this.graphics.closePath();
    // this.graphics.fillStyle(0x000000, 1.0);
    
    }

    
}