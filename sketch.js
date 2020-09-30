var PLAY = 1;
var END = 0;
var gamestate = 1;
var PLAY = 1;
var END = 0;
var sword;
var score = 0;
var fruitsGroup;
var aliensGroup;

function preload() {
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  swordImage = loadImage("sword.png");
  alienAnimation = loadAnimation("alien2.png", "alien1.png");
  gameOverImage = loadImage("gameover.png");
  knifeSound = loadSound("knifeSwoosh.mp3");
  gameOverSound = loadSound("gameover.mp3");

}

function setup() {
  sword = createSprite(40, 200, 20, 20);
  sword.addImage(swordImage);
  sword.scale = 0.7;


  fruitsGroup = new Group();
  aliensGroup = new Group();

}

function draw() {
  text("score : " + score, 50, 500);
  background("lightBlue");


  if (gamestate === PLAY) {
    fruits();
    alien();


    sword.x = World.mouseX;
    sword.y = World.mouseY;
    if (fruitsGroup.isTouching(sword)) {
      fruitsGroup.destroyEach();
      knifeSound.play();
      score = score + 2;

    } else {
      if (sword.isTouching(aliensGroup)) {
        gamestate = END;
        gameOverSound.play();
        fruitsGroup.destroyEach();
        aliensGroup.destroyEach();
        fruitsGroup.setVelocityXEach(0);
        aliensGroup.setVelocityXEach(0);
        sword.addImage(gameOverImage)
        sword.x = 200;
        sword.y = 200;
      }
    }
  }


  drawSprites();
  text("Score : " + score, 300, 30);


}

function fruits() {
  if (frameCount % 80 === 0) {
    fruit = createSprite(400, 200, 20, 20);
    fruit.scale = 0.2;
    position = Math.round(random(1, 2))
     if(position==1)
    {
    fruit.x=400;
    fruit.velocityX=-(9+(score/4));
    }
    else
    {
      if(position==2){
      fruit.x=0;
      
  //Increase the velocity of fruit after score 4 or 10
      fruit.velocityX= (9+(score/4));
      }
    }
        fruit.scale = 0.2;
     r=Math.round(random(1,4));

    
    if (r === 1) {
      fruit.addImage(fruit1);
    } else if (r === 2) {
      fruit.addImage(fruit2);
    } else if (r === 3) {
      fruit.addImage(fruit3);
    } else if (r === 4) {
      fruit.addImage(fruit4);
    }
    fruit.y = Math.round(random(50, 340));
//    fruit.velocityX = -4;
    fruit.setLifetime = 100;
    fruitsGroup.add(fruit);

  }
 /*position = Math.round(random(1, 2))
  fruit = createSprite(400, 200, 20, 20);
  if (position === 1) {
    fruit.x = 400;
    fruit.velocityX = -(4 + (score / 4))
    // fruit.visible=false;
  } else {
    if (position === 2) {
      fruit.x = 0
      fruit.velocityX = (4 + (score / 4))
      // fruit.visible=false;
    }
  }*/



}


function alien() {
  if (frameCount % 200 === 0) {
    var alien = createSprite(400, 200, 20, 20);
    alien.addAnimation("moving", alienAnimation);
        alien.y = Math.round(random(100, 300));
    alien.velocityX = -(8+(score/10));
    alien.setLifetime = 50;
    aliensGroup.add(alien);
  }
}