var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
}


function setup(){
  
  createCanvas(1430,801);
// Moving background
garden=createSprite(715,401);
garden.addImage(gardenImg);
garden.scale=1.5


//creating boy running
rabbit = createSprite(160,650,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

inv1 = createSprite(350,401,10,700)
inv1.visible = false;

inv2 = createSprite(350,401,10,700)
inv2.visible = false;

}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
  
  var select_sprites = Math.round(random(1,3));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else if (select_sprites == 2) {
      createOrange();
    }else {
      createRed();
    }
  }
createEdgeSprites();

}

function createApples() {
apple = createSprite(random(900, 350),90, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 5;
apple.lifetime = 150;
apple.collide(inv1)
apple.collide(inv2)
}

function createOrange() {
orangeL = createSprite(random(900, 350),100, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 5;
orangeL.lifetime = 150;
orangeL.collide(inv1)
orangeL.collide(inv2)
}

function createRed() {
redL = createSprite(random(900, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 5;
  redL.lifetime = 150;
redL.collide(inv1)
redL.collide(inv2)
}