var riya ;







function setup() {
  createCanvas(400,400);
  riya = createSprite(200,200,20,40);
}

function draw() 
{
  background(30);
  drawSprites();
if(keyIsDown(RIGHT_ARROW)){
  riya.position.x = riya.position.x+5;
}
  if(keyIsDown(LEFT_ARROW)){
  riya.position.x = riya.position.x-5;
}
if(keyIsDown(UP_ARROW)){
  riya.position.y = riya.position.y-5;
}
if(keyIsDown(DOWN_ARROW)){
  riya.position.y = riya.position.y+5;
}
}




