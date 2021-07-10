var tom, jerry;
var tomimg1,tomimg2, jerryimg1, jerryimg2;
var bg, canvas;

function preload() {
    //load the images here
    bg = loadImage("images/garden.png");
    tomimg1 = loadAnimation("images/cat1.png");
    tomimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    tomimg3 = loadAnimation("images/cat4.png");
    jerryimg1 = loadAnimation("images/mouse1.png");
    jerryimg2 = loadAnimation("images/mouse2.png");
    jerryimg3 = loadAnimation("images/mouse3.png");
    jerryimg4 = loadAnimation("images/mouse4.png");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
  tom = createSprite(870, 600);
  tom.scale = 0.2
  tom.addAnimation("tom sleeping", tomimg1);
  jerry = createSprite(200, 600);
  jerry.scale = 0.15
  jerry.addAnimation("jerry standing", jerryimg1);

}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
  if(tom.x-jerry.x < (tom.width-jerry.width)/2){
      tom.velocityX = 0;
    tom.addAnimation("tomLastImage", tomimg3);
    tom.x = 300;
    tom.scale = 0.2
    tom.changeAnimation("tomLastImage");
    jerry.addAnimation("jerryLastImage", jerryimg3);
    jerry.scale = 0.15
    jerry.changeAnimation("JerryLastImage");

  }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    tom.velocityX = -5
    tom.addAnimation("tomRunning", tomimg2);
    tom.changeAnimation("tomRunning");
    jerry.addAnimation("jerryTeasing", jerryimg2);
    jerry.frameDelay = 25;
    jerry.changeAnimation("jerryTeasing", jerryimg3);


}

}
