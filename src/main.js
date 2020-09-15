import {GameScene} from "./scenes/GameScene.js";
import {MenuScene} from "./scenes/MenuScene.js";
import {GameOverScene} from "./scenes/GameOverScene.js";

var config = {
    type:Phaser.AUTO,
    width:800,
    height:600,
    backgroundColor: '#333388',
    scene: [
        MenuScene, GameScene, GameOverScene
    ],
    audio: {
        disableWebAudio: true},
    level:1,
    iteration_level:1
};

let game = new Phaser.Game(config);
game.level=0;
game.iteration_level=0;
game.score=0;

