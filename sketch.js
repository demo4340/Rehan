const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var sceneImg, backgroundImage, icePathImg;
var elsa, elsaSpeakImg, elsaSong, elsaHandImg;
var castle, castleImg;
var playButtonImg, playButton, playImg, playObj;
var textBox, textBoxImg;
var gameState = "serve";


function preload(){

  backgroundImage = loadImage("snow1.jpg");
  elsaSpeakImg = loadAnimation("images/Elsa_speak/0.png", "images/Elsa_speak/1.png", "images/Elsa_speak/2.png", "images/Elsa_speak/3.png", "images/Elsa_speak/4.png", "images/Elsa_speak/5.png", "images/Elsa_speak/6.png", "images/Elsa_speak/7.png", "images/Elsa_speak/8.png", "images/Elsa_speak/9.png", "images/Elsa_speak/10.png", "images/Elsa_speak/11.png", "images/Elsa_speak/12.png", "images/Elsa_speak/13.png", "images/Elsa_speak/14.png", "images/Elsa_speak/15.png", "images/Elsa_speak/16.png", "images/Elsa_speak/17.png", "images/Elsa_speak/18.png", "images/Elsa_speak/20.png", "images/Elsa_speak/21.png", "images/Elsa_speak/22.png", "images/Elsa_speak/23.png", "images/Elsa_speak/24.png", "images/Elsa_speak/25.png", "images/Elsa_speak/26.png", "images/Elsa_speak/27.png", "images/Elsa_speak/28.png", "images/Elsa_speak/29.png", "images/Elsa_speak/30.png");
  castleImg = loadImage("images/castle1.png");
  elsaSong = loadSound("sounds/elsaSong.mp3");
  sceneImg = loadImage("images/1.jpg");
  playButtonImg = loadImage("images/playBtn.png");
  textBoxImg1 = loadImage("images/textBox.png");
  textBoxImg2 = loadImage("images/textBox2.png");
  elsaHandImg = loadImage("images/elsaHand.png");
  playImg = loadImage("images/play.png");
  icePathImg = loadImage("images/icePath.jfif");

}


function setup() {
  createCanvas(displayWidth, displayHeight-110);

  engine = Engine.create();
  world = engine.world;


  elsa = createSprite(displayWidth/2 - 600, displayHeight-300);
  elsa.addAnimation("elsa", elsaHandImg);
  elsa.scale = 1;
  elsa.visible = false;
  

  castle = createSprite(windowWidth/2 + 300, windowHeight/2 - 50);
  castle.addImage("castle", castleImg);
  castle.scale = 0.7;
  castle.visible = false;

  playButton = createSprite(displayWidth/2, displayHeight/2);
  playButton.addImage("button", playButtonImg);
  playButton.scale = 0.5;

  textBox = createSprite(elsa.x + 400, elsa.y - 200);
  textBox.addImage("text", textBoxImg1);
  textBox.visible = false;
  textBox.scale = 0.6;

  playObj = createSprite(textBox.x + 50, textBox.y + 60);
  playObj.addImage("play", playImg);
  playObj.scale = 0.5;
  playObj.visible = false;

 

  
}

function draw() {
  background(0);
  
  Engine.update(engine);  

  if(gameState === "serve"){

    background(sceneImg);
    elsaSong.play();
  
  }
  
  if(mousePressedOver(playButton) && gameState === "serve"){

    gameState = "welcome";
    elsaSong.stop();
    playButton.destroy();

  }

  if(gameState === "welcome"){

    background(backgroundImage);
    elsa.visible = true;
    castle.visible = true;
    textBox.visible = true;

    if(keyDown("space")){

      textBox.addImage("text", textBoxImg2);
      textBox.x = elsa.x + 450;
      textBox.scale = 0.35;

     playObj.visible = true;
      
    }

    if(mousePressedOver(playObj)){

      gameState = "play";
      playObj.destroy();
      castle.destroy();
      textBox.destroy();
      elsa.destroy();

    }

  }

if(gameState === "play"){

  background(icePathImg);
  elsaSong.play();


}  

drawSprites();

  
  
}