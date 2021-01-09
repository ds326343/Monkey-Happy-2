var ground
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var fails
var invisibleGround
score = 0
fails = 0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  jungleImage = loadImage("jungle.jpg");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
}



function setup() {
createCanvas(1000,400) 
ground = createSprite(500,390,1500,25)
  
bg = createSprite(500,200,2000,400);
bg.addImage(jungleImage);

monkey = createSprite(100,200,30,30) 
monkey.addAnimation("run",monkey_running);
monkey.scale = 0.15

invisibleGround = createSprite(500,400,1500,25)
invisibleGround.visible = false;
  
FoodGroup = createGroup();
obstacleGroup = createGroup();
}


function draw() {
background("black")
textSize(20);
fill("orange")
text("Score: " + score,25,25)
text.depth = 2000
textSize(20);
fill("red");
text("Fails: " + fails,150,25);
 text.depth = 2000 
ground.velocityX = -6;
ground.shapeColor = "green"
if(ground.x < 300){
  ground.x = 500;
}

bg.velocityX = -9
if(bg.x < 300){
  bg.x = 500;
}

if(monkey.isTouching(FoodGroup)){
  FoodGroup.destroyEach();
  score+=1;
  monkey.scale = monkey.scale + 0.02;
}
  
if(keyDown("space")&&monkey.isTouching(ground)){
  monkey.velocityY = -20
}
  
if(monkey.isTouching(obstacleGroup)){
  obstacleGroup.destroyEach();
  FoodGroup.destroyEach();
  fails+=1;
}  
  
  
  
  
monkey.velocityY = monkey.velocityY + 0.8
spawnFood();  
spawnObstacles();
monkey.collide(invisibleGround);
drawSprites();
}

function spawnFood(){
  if(frameCount%160===0){
    banana = createSprite(800,Math.round(random(120,200)));
    banana.addImage(bananaImage)
    banana.velocityX = -4;
    banana.scale = 0.1;
    FoodGroup.add(banana);
    banana.lifetime = 250;
  }
  
}

function spawnObstacles(){
  if(frameCount%160===0){
    obstacle = createSprite(800,355,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -4 
    obstacle.scale = 0.13
    obstacleGroup.add(obstacle);
    obstacle.lifetime = 250;
  }
  
  
  
  
  
}


