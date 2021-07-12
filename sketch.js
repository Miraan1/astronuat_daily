
var bathAnimation,bath
var astronuat
var gym
var eat
var brushing
var backgroundImg


function preload() {
  bathAnimation = loadAnimation("bath1.png","bath2.png")
  gym = loadAnimation("gym1.png","gym2.png")
  eat = loadAnimation("eat1.png","eat2.png")
  brushing = loadAnimation("brush.png")
  backgroundImg = loadImage("iss.png")
  

}

function setup() {
  createCanvas(800,400);

  astronuat = createSprite(500,200);

  
}

function draw() {
  background(backgroundImg);  
  
  text("up arrow = bath",40,20)
  text("down arrow = gym",40,40)
  text("left arrow = eat",40,60)
  text("right arrow = brus",40,80)
 
  if(keyDown("UP_ARROW")) {
    astronuat.addAnimation("showering",bathAnimation)
    astronuat.changeAnimation("showering")
    astronuat.scale = 0.1;
  
  }

  if(keyDown("DOWN_ARROW")) {
    astronuat.addAnimation("gym1",gym)
    astronuat.changeAnimation("gym1")
    astronuat.scale = 0.1;
  
  }

  if(keyDown("LEFT_ARROW")) {
    astronuat.addAnimation("eat1",eat)
    astronuat.changeAnimation("eat1")
    astronuat.scale = 0.1;
  
  }

  if(keyDown("RIGHT_ARROW")) {
    astronuat.addAnimation("brush1",brushing)
    astronuat.changeAnimation("brush1")
    astronuat.scale = 0.1;
  
  }

  drawSprites();
}