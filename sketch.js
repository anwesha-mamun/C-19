var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"



function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");

  doorsGroup = new Group();
 
  climbersGroup = new Group();

  
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 3;
  

  ghost = createSprite(200,200,50,50);
  ghost.addImage("ghost" , ghostImg);
  ghost.scale = 0.3;
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }

    if (keyDown("space")) {
     ghost.velocityY = -5
    
    }
    ghost.velocityY = ghost.velocityY + 0.8;

    if(keyDown("right")) {
     ghost.x = ghost.x + 3

    }

    if(keyDown("left")) {
      ghost.x = ghost.x  -  3
 
     }

     if (climbersGroup.isTouching(ghost))  {
     ghost.velocityY = 0

     }

    spawnDoors()
    drawSprites()
}

function spawnDoors() {
  if (frameCount % 240 == 0)  {
    door = createSprite(200,50);
    door.addImage("doors", doorImg);
    door.velocityY = 3;
    door.x = Math.round(random (120,400));
door.lifetime = 800;
doorsGroup.add(door)

climber = createSprite(200,120);
climber.addImage("climb", climberImg);
climber.velocityY = 3;
climber.x = door.x
climber.lifetime = 800;
climbersGroup.add(climber)

door.depth = ghost.depth 
ghost.depth = ghost.depth + 1

  }
  
}


