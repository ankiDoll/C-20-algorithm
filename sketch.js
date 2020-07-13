var fixedRect,movingRect;

function setup() {
  var canves = createCanvas(800,600);
  
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(600,200,40,60);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 && 
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){

    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";

  } else {

    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";

  }

  drawSprites();
}