var fixedRect,movingRect;
var gameObject1
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(100, 100, 50, 80);
  fixedRect.debug = true
  fixedRect.shapeColor = "green"
  movingRect= createSprite(400, 200, 80, 30);
  movingRect.debug = true
  movingRect.shapeColor = "green"

  gameObject1 = createSprite(200,100,50,80)
  gameObject1.shapeColor = "green"

}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
  gameObject1.shapeColor = "green"
  }

  drawSprites();
}
