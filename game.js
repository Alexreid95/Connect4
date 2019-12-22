var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: 0x43676B,
  scene: {
    gameStart,
    gamePlay,
    gameOver
  }
};

var game = new Phaser.Game(config);
