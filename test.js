//참고 https://rottk.tistory.com/entry/Phaser3-%EC%9D%98-%EA%B8%B0%EB%B3%B8%EA%B8%B0%EB%8A%A5-%EB%B0%8F-%ED%8D%BC%EC%A6%90%EA%B2%8C%EC%9E%84-%EC%98%88%EC%8B%9C

const gameStatus = {};

let notice;
let square;
function preload(){
  this.load.setBaseURL("https://labs.phaser.io/");
  this.load.audio('sfx', 'assets/audio/SoundEffects/magical_horror_audiosprite.mp3');
}

function create() {
  
  gameStatus.notice = this.add.text(100, 300, "Press Any Key to Start");
  gameStatus.square = this.add.rectangle(10, 10, 10, 10, 0xff0000);
  gameStatus.square.setInteractive();
  gameStatus.Sound = this.sound.add('sfx');

  gameStatus.square.on('pointerup', function(){
    this.fillColor = 0x00FF00;
  });

  this.input.keyboard.on('keydown-S', function() {
    console.log(gameStatus);
    gameStatus.square.fillColor = 0xFFFF00;
    gameStatus.Sound.play();
  });


}

function update() {
  gameStatus.square.y += 1;
}

const config = {
  type: Phaser.AUTO,
  width: 300,
  height: 600,
  backgroundColor: "#18216D",
  scene: {
    create: create,
    update : update,
    preload : preload,
  }
};

let game = new Phaser.Game(config);