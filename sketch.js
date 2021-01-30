var fixedRect,movingRect;




function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(400,300,50,60);
  fixedRect.shapeColor="purple";
  movingRect.shapeColor="red";

}

function draw() {
  background("black");
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
    && movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2
    && fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
      fixedRect.shapeColor="green";
      movingRect.shapeColor="yellow";
    }
    else{
      fixedRect.shapeColor="blue";
      movingRect.shapeColor="white";
    }
  drawSprites();
}