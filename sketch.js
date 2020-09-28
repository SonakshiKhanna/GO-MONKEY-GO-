var  jungle, backImage, score, player_running, ground, player, banana, bananaImage, obstacle, obstacleImage, bananaGroup, obstacleGroup;

function spawnStones() {
  if(frameCount%60===0){
    obstacle = createSprite(400,340,20,20);
    obstacle.addImage("stones",obstacleImage);
    obstacle.velocityX = -6;
    obstacle.scale = 0.1;
    obstacle.lifetime = 150;
    obstacleGroup.add(obstacle);
  }  
}
function spawnBanana(){
  if(frameCount%60===0){
    banana = createSprite(400,200,20,20);
    banana.addImage("fruits",bananaImage);
    banana.scale = 0.03;
    banana.velocityX = -5;
    banana.lifetime = 150;
    bananaGroup.add(banana);
  } 
} 
switch(score){
    case 10: player.scale = 0.12;
             break;
    case 20: player.scale = 0.12;
             break;
    case 30: player.scale = 0.12;
             break;
    case 40: player.scale = 0.12;
             break;
             default: break;
  } 
function preload() {
  
  backImage = loadImage("jungle2.jpg");
  
  player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  bananaImage = loadImage("Banana.png");
  obstacleImage = loadImage("stone.png");
  

}
  
function setup() {
  createCanvas(400, 400);
  jungle = createSprite(200,200,400,20); 
  jungle.addImage("back1",backImage);
  jungle.velocityX = -5;
  player = createSprite(50,360,20,20);
  player.addAnimation("jungles",player_running);
  player.scale = 0.1;
  ground = createSprite(200,365,400,20);
  ground.visible = false;
  jungle.x = jungle.width/2;
  score = 0;
  bananaGroup = new Group();
  obstacleGroup = new Group();
  
}
 

function draw() {
  background("white");
  
  player.collide(ground);
  
  if(jungle.x<0){
    jungle.x = jungle.width/2;
  }  
  
  if(keyDown("space")) {
    player.velocityY = -5;
  } 
  
  player.velocityY = player.velocityY + 0.8;
  
  if(obstacleGroup.isTouching(player)){
    player.scale = 0.05;
  }  
  if(bananaGroup.isTouching(player)){
    player.scale = 0.2;
  }
  
  
  
  if(player.isTouching(bananaGroup)){
    score = score+2;
  } 
  
  spawnStones();
  spawnBanana();
  
  drawSprites();
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:"+score,320,50);
}
