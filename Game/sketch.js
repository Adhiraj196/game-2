const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var background,backgroundImg
var ground2



function preload() {
  backgroundImg = loadImage ("City.jpg");
  obstacleImg = loadImage ("Building.png");
  obstacleImg1 = loadImage ("Building 2.png");
}

function setup() {
  createCanvas(1200,700);
  background = createSprite (600, 200,1200,700);
  background.addImage(backgroundImg)
  background.scale = 0.3
  ground = createSprite (600,525,1200,15);
  ground2 = createSprite (600,1,1200,15);
 
}

function draw() {
  drawSprites();
  SpwanBuilding(450);
  SpwanBuilding(75);
} 

function SpwanBuilding(yPos){
   if(frameCount%70===0){
     Building = createSprite(1400,yPos,random(800,1500),700,);
    var num = Math.round(random(1,5));
     if(num == 1){
       Building.shapeColor = "blue"
     }
     else if(num == 2){
      Building.shapeColor="white"
    }
    else if(num == 3){
      Building.shapeColor = "orange"
    }
    else if(num == 4){
      Building.shapeColor = "black"
    }
    else {
      Building.shapeColor = "yellow"
    }
    
     Building.lifetime = 325
     Building.scale = 0.2
     Building.velocityX = -5
   }
   

}

