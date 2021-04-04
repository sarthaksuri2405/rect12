var cat1, cat2, cat3, cat4;
var garden;
var mouse1, mouse2;

function preload() {
    //load the images here
cat1=loadImage("images/cat1.png")
cat2=loadImage("images/cat2.png")
cat3=loadImage("images/cat3.png")
cat4=loadImage("images/cat4.png")
garden=loadImage("images/garden.png")
mouse1=loadAnimation("images/mouse1.png","images/mouse3.png","images/mouse4.png")
mouse2=loadAnimation("images/mouse2.png")

}

function setup(){
    createCanvas(windowWidth,windowHeight);
    
    bg=createSprite(500, 500, windowWidth, windowHeight);
    bg.addImage(garden);
    bg.scale=2
    //create tom and jerry sprites here
tom=createSprite(900,900,50,50);
tom.addImage(cat1);
tom.scale=0.1
jerry=createSprite(500, 900, 100, 100 );
jerry.addAnimation("running",mouse1);

jerry.scale=0.1


}

function draw() {

    background(255);
   jerry.velocityX=1 

   //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x===90){
        jerry.velocityX=0
        jerry.addAnimation("running",mouse2)
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if (keyDown("RIGHT_ARROW")){
    
}


}
