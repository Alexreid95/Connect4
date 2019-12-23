class GameStart extends Phaser.Scene {
  constructor() {
    super("gameStart");
  }

  preload() {
    this.load.audio("theme", ["assets/audio/theme_happy_adveture.ogg", "assets/audio/theme_happy_adveture.mp3"]);
    this.load.bitmapFont("cartoonSix", "assets/font/cartonsix_nc/Carton_Six.png", "assets/font/cartonsix_nc/Carton_Six.fnt");
    this.load.image("play", "assets/gui/playB.png");
    this.load.image("playHover", "assets/gui/playS.png");
    this.load.image("info", "assets/gui/infoB.png");
    this.load.image("infoHover", "assets/gui/infoS.png");
    this.load.image("exit", "assets/gui/exitB.png");
    this.load.image("exitHover", "assets/gui/exitS.png");
  }

  create() {
    var music = this.sound.add("theme");
    music.play();
    //this.titleTxt = this.add.bitmapText(config.width / 2, config.height / 2 * 0.6, "cartoonSix", "Start Menu", 125, 1).setOrigin(0.5);
    this.titleTxt = this.add.text(config.width / 2, config.height / 2 * 0.6, "Start Menu", { fontFamily: 'Arial', fontSize: 125, color: "#000000" }).setOrigin(0.5);
    this.playBtn = this.add.sprite(config.width / 2, config.height / 2 * 1.5, "play").setOrigin(0.5);
    this.playBtn.setInteractive();
    this.infoBtn = this.add.sprite(config.width / 2 * 0.5, config.height / 2 * 1.3, "info").setOrigin(0.5).setScale(0.8);
    this.infoBtn.setInteractive();
    this.exitBtn = this.add.sprite(config.width / 2 * 1.5, config.height / 2 * 1.3, "exit").setOrigin(0.5).setScale(0.8);
    this.exitBtn.setInteractive();

  }

  update() {}

}
