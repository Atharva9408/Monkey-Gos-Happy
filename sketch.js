var monkey , monkey_running;
var ground;
var banana,bananaimg,bananaGroup;
var obstacle,obstacleimg,obstacleGroup;
var ST;
var PLAY=0;
var END;
var gameState=PLAY;

function preload()
{
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaimg = loadImage("banana.png");
  obstacleimg = loadImage("obstacle.png");
  monkey_collided=loadImage("sprite_1.png");
 
}



function setup()
{
  createCanvas(400,400);
  
  monkey=createSprite(70,340,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(200,380,1000,40);
  ground.shapeColor="brown"
  ground.velocityX=-3;
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
  
  ST=0;

}


function draw() 
{
background("lightBlue")
  
  if (gameState===PLAY){
    
    
  if (keyDown("space") && monkey.y>=300){
  monkey.velocityY=-17;
  }
    
    
  if (monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach();
  }
    
  if (monkey.isTouching(obstacleGroup)){
    gameState=END
  }
  ST=Math.round(frameCount/frameRate())
    
  }
  
  if (gameState===END){
    obstacle.velocityX=0;
    banana.velocityX=0;
  }
  
  
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
    monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  B();
  O();
  SurvivalTime();
  
  drawSprites();
}

function B(){
  if (frameCount%80===0){
  banana=createSprite(500,120,20,20);
  banana.velocityX=-(3+3*ST/15);
  banana.addImage(bananaimg);
  banana.scale=0.1;
  banana.y=Math.round(random(120,200));
  banana.lifetime=200;
    bananaGroup.add(banana)
  }
}

function O(){
  if (frameCount%300===0){
  obstacle=createSprite(500,345,20,20);
  obstacle.velocityX=-(3+3*ST/15);
  obstacle.addImage(obstacleimg);
  obstacle.scale=0.1;
  obstacleGroup.add(obstacle);
  }
}

function SurvivalTime(){
  stroke("white");
  textSize(20);
  fill("red");
  text("Survival Time : "+ST,140,50)
}




