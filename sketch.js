var iss, spacecraft;
var hasDocked = false;

var issimg, spaceBGimg;
var spacecraft1, spacecraft2, spacecraft3, spacecraft4;

function preload() {

  issimg = loadImage("images/iss.png");
  spaceBGimg = loadImage("images/spacebg.jpg");

  spacecraft1 = loadImage("images/spacecraft1.png");
  spacecraft2 = loadImage("images/spacecraft2.png");
  spacecraft3 = loadImage("images/spacecraft3.png");
  spacecraft4 = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(600,350);

  iss = createSprite(330, 130);
  iss.addImage(issimg);
  iss.scale = 0.25;

  spacecraft = createSprite(285, 240);
  spacecraft.addImage(spacecraft1);  
  spacecraft.scale = 0.15;
}

function draw() {
  background(spaceBGimg);  

  spacecraft.addImage(spacecraft1);
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1, 1);
  
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraft3);
      spacecraft.x = spacecraft.x - 1;
    }

    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spacecraft4);
      spacecraft.x = spacecraft.x + 1;
    }

    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spacecraft2);
    }

    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y - 2;
    } 
   }
   
   if(spacecraft.y <= (iss.y + 70) && spacecraft.x <= (iss.x -10)){
    hasDocked = true;
    textSize(30);
    fill('white');
    text("Docking Successful", 200, 300);
  }

  drawSprites();
}