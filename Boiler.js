var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(800, 400, 90, 60);
  ob1 = createSprite(400, 400, 20, 60);
  ob2 = createSprite(300, 390, 70, 60);
  ob3 = createSprite(500, 300, 10, 60);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ob1.velocityY=5;
  ob2.velocityY = -3;
  ob1.velocityX = 5;
  ob2.velocityX = 3;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  bounceOff(ob1,ob2);
  drawSprites();
}
function bounceOff(object1,object2){
      if (object1.x - object2.x < object2.width/2 + object1.width/2
        && object2.x - object1.x < object2.width/2 + object1.width/2)
        {
            object1.velocityX=object1.velocityX * (-1)
            object2.velocityX=object2.velocityX * (-1)
        }

        else if(
         object1.y - object2.y < object2.height/2 + object1.height/2
        && object2.y - object1.y < object2.height/2 + object1.height/2) {
            object1.velocityY=object1.velocityY * (-1)
            object2.velocityY=object2.velocityY * (-1)
       }
      
}