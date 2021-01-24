var sword, sword_cutter;
var fruit_1_img;
var fruit2, fruit_2_img;
var fruit3, fruit_3_img;
var fruit4, fruit_4_img;
var score_it = 0;
var fruit_group;
var alien_animation;
var alien_group;
var PLAY = 0;
var END = 1;
var gamestate = PLAY;
var gameOver;
var  fruit_group2;
var alien_group2;
var gameOver_sound;
var fruit_sound;


function preload() {

  sword_cutter = loadImage("sword.png");

  fruit_1_img = loadImage("fruit1.png");
  fruit_2_img = loadImage("fruit2.png");
  fruit_3_img = loadImage("fruit3.png");
  fruit_4_img = loadImage("fruit4.png");
  
  alien_animation = loadAnimation("alien1.png","alien2.png");
  
  game_gone = loadImage("gameover.png");
  
  fruit_sound = loadSound("knifeSwooshSound.mp3");
  gameOver_sound = loadSound("gameover.mp3");
}

function setup() {

  createCanvas(windowWidth, windowHeight);

  sword = createSprite(250, 250, 20, 20);
  sword.addImage("swod", sword_cutter);
  sword.scale = 0.5
  
  fruit_group = createGroup();
   fruit_group2 = createGroup();
  alien_group = createGroup();
  alien_group2 = createGroup();

}

function draw() {
  background(0,255,0);

  textSize = 60;
  fill("black");
  text("score"+" "+score_it,windowWidth-100,50);
  
   
  
  
if(gamestate===PLAY);{
  sword.y = mouseY;
  sword.x = mouseX;
  fruit2();
  fruit();
  monster();
  monster2();
   if(sword.isTouching(alien_group)){
      alien_group.destroyEach();
      gamestate = END;
   gameOver_sound.play();  
   }
  
  if(sword.isTouching(alien_group2)){
    alien_group2.destroyEach();
    gamestate = END;
    gameOver_sound.play();
    
  }
     
   
  if (sword.isTouching(fruit_group)){
    fruit_group.destroyEach();
    score_it=score_it+1;
    fruit_sound.play();
  }
  if (sword.isTouching(fruit_group2)){
    fruit_group2.destroyEach();
    score_it=score_it+1;
    fruit_sound.play();
  }
 
}
 
    
  if(gamestate===END){
    gameOver = createSprite(windowWidth/2,250,50,10);
    gameOver.addImage("game",game_gone);
    
    sword.destroy();
    fruit_group.destroyEach();
    fruit_group2.destroyEach();
    alien_group.destroyEach();
   alien_group2.destroyEach();    
 }
  
  drawSprites();
}

function fruit() {
 
  if (frameCount % 100 === 0) {

var fruit1 = createSprite(windowWidth, Math.round(random(10, 490)), 20, 20);
   
    
var rand = Math.round(random(1, 4))
  switch (rand) {
    case 1: fruit1.addImage(fruit_1_img);
            break;
    case 2: fruit1.addImage(fruit_2_img);
           break;
    case 3: fruit1.addImage(fruit_3_img);
            break;
    case 4: fruit1.addImage(fruit_4_img);
            break;
    default: break;
  }
     fruit1.velocityX = -(4+score_it/4);
    fruit1.scale = 0.13;
    if(fruit1.x = 0){
    fruit1.lifetime = 0}
    fruit_group.add(fruit1);
  }
  
}  
  
  function monster(){
    if(frameCount%450===0){
      var alien = createSprite(windowWidth,Math.round(random(10,490)),50,50);
      alien.velocityX=-(4+score_it/10);
      alien.scale=0.7;
      alien.lifetime=120;
      alien.addAnimation("alien_move",alien_animation);
      alien_group.add(alien);      
    }
    
    
  }
 
function fruit2(){
  if(score_it > 3 && frameCount%150===0){
var fruit0 =  createSprite(0, Math.round(random(10, 490)), 20, 20);
   
var rand = Math.round(random(1, 4))
  switch (rand) {
    case 1: fruit0.addImage(fruit_1_img);
            break;
    case 2: fruit0.addImage(fruit_2_img);
           break;
    case 3: fruit0.addImage(fruit_3_img);
            break;
    case 4: fruit0.addImage(fruit_4_img);
            break;
    default: break;
  }
     fruit0.velocityX = (4+score_it/4);
    fruit0.scale = 0.13;
    fruit0.lifetime = 120;
    fruit_group2.add(fruit0);
  }     
  
}
function monster2(){
    if(frameCount%500===0){
      var alien2=createSprite(0,Math.round(random(10,490)),50,50);
      alien2.velocityX=(4+score_it/10);
      alien2.scale=0.7;
      alien2.lifetime=120;
      alien2.addAnimation("alien_move",alien_animation);
      alien_group2.add(alien2);      
    }
}
