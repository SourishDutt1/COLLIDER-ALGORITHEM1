
var fixedrectangle,movingrectangle
function setup() {
  createCanvas(800,400);
 fixedrectangle= createSprite(600, 400, 50, 50);
 fixedrectangle.shapeColor="blue";
 
 movingrectangle= createSprite(300, 100, 40, 30);
 movingrectangle.shapeColor="red";
}

function draw() {
  background(255,255,255);  
movingrectangle.x=World.mouseX
movingrectangle.y=World.mouseY
console.log(movingrectangle.x-fixedrectangle.x);
if (movingrectangle.x-fixedrectangle.x < fixedrectangle.width/2+movingrectangle.width/2&&fixedrectangle.x-movingrectangle.x < fixedrectangle.width/2+movingrectangle.width/2&&movingrectangle.y-fixedrectangle.y < fixedrectangle.width/2+movingrectangle.width/2&&fixedrectangle.y-movingrectangle.y < fixedrectangle.width/2+movingrectangle.width/2){
  fixedrectangle.shapeColor="green";
  movingrectangle.shapeColor="orange";
}
else{
  fixedrectangle.shapeColor="blue";
  movingrectangle.shapeColor="red";

}
  drawSprites();
}