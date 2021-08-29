var astronaut,iss,invisible1,invisible2,invisible3,invisible4;

var bathimg,brushimg,drinkimg,eatimg,gymimg,sgymimg,issimg,moveimg,sleepimg;

function preload(){

  issimg=loadImage("iss.png");
  bathimg=loadAnimation("bath1.png","bath2.png");
  brushimg=loadImage("brush.png");
  drinkimg=loadAnimation("drink1.png","drink2.png");
  eatimg=loadAnimation("eat1.png","eat2.png");
  gymimg=loadAnimation("gym1.png","gym2.png");
  sgymimg=loadAnimation("gym11.png","gym12.png");
  moveimg=loadAnimation("move.png","move1.png");
  sleepimg=loadImage("sleep.png");
  

}

function setup() {
  createCanvas(windowWidth,windowHeight);

  iss=createSprite(width/2,height/2);
  iss.addImage(issimg);
  iss.scale=0.3;

  invisible1=createSprite(width/2,height/1,1300,20);
  invisible2=createSprite(width/2,height/100,1300,20);
  invisible3=createSprite(width/1,height/2,20,1300);
  invisible4=createSprite(width/100,height/2,20,1300);
  invisible1.visible=false;
  invisible2.visible=false;
  invisible3.visible=false;
  invisible4.visible=false;

  astronaut=createSprite(width/2,height/2);
  astronaut.addImage("sleep",sleepimg);
  astronaut.addAnimation("eat",eatimg);
  astronaut.addAnimation("move",moveimg);
  astronaut.addAnimation("bath",bathimg);
  astronaut.addAnimation("drink",drinkimg);
  astronaut.addAnimation("gym2",sgymimg);
  astronaut.addAnimation("gym",gymimg);
  astronaut.addImage("brush",brushimg);
  astronaut.scale=0.1;
 
  
}

function draw() {
  background(225);

  astronaut.bounceOff(invisible1);
  astronaut.bounceOff(invisible2);
  astronaut.bounceOff(invisible3);
  astronaut.bounceOff(invisible4);

  if (keyDown("b")){
    astronaut.changeAnimation("bath");
    astronaut.velocityX=0;
    astronaut.velocityY=0;

  }

  if (keyDown("UP_ARROW")){
    astronaut.changeImage("sleep");
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }

  if (keyDown("LEFT_ARROW")){
    astronaut.changeAnimation("gym");
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }
  
  if (keyDown("RIGHT_ARROW")){
    astronaut.changeAnimation("drink");
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }

  if (keyDown("m")){
    astronaut.changeAnimation("gym2");
    astronaut.velocityY=0;
    astronaut.velocityX=0;
  }

  if (keyDown("n")){
    astronaut.changeImage("brush");
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if (keyDown("DOWN_ARROW")){
    astronaut.changeAnimation("eat");
    astronaut.velocityY=1.5;
    astronaut.velocityX=1.5;
    
  }

  drawSprites();
  drawSprites();
  textSize(20);
  fill(255,0,0);
  text("press up arrow,down arrow,left arrow,right arrow,m,n,b ",width/100,height/40);


}
