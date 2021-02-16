var tom ,tom_Img1,tom_img2,tom_Img3,jerry,jerry_Img1,jerry_Img2,jerry_Img3;
var garden_img,garden;

function preload() {
    tom_Img2 = loadAnimation("images/cat2.png","images/cat3.png");
    tom_img1 = loadImage("images/cat1.png");
    tom_Img3 = loadImage("images/cat4.png");
    
    jerry_Img2 = loadAnimation("images/mouse2.png","images/mouse3.png");
    jerry_Img1 = loadImage("images/mouse1.png");
    jerry_Img3 = loadAnimation("images/mouse4.png");

    garden_img = loadImage("images/garden.png");

}

function setup(){
    createCanvas(1000,700);
    
     garden = createSprite(500,350,20,20);
     garden.addImage(garden_img);


     tom = createSprite(750,550,20,20);
     tom.addImage(   tom_img1);
     tom.addAnimation("tom",tom_Img2);
     tom.scale = 0.1;
    

     jerry = createSprite(250,550,20,20);
     jerry.addImage(jerry_Img1);
     jerry.addAnimation("jerry",jerry_Img2);
     jerry.scale = 0.1; 

}

function draw() {
  background(0);

    keyPressed();

    if(tom.x - jerry.x < (jerry.width+tom.width)/2
    &&jerry.x - tom.x < (jerry.width+tom.width)/2){
        jerry.changeImage("Img3",jerry_Img3);
        tom.changeImage("tom_",tom_Img3);
    }

  drawSprites();
}


function keyPressed(){
      
    if(keyWentUp("space")){
      tom.velocityX = 0;
      tom.changeImage("1",tom_img1);
      jerry.changeImage("_",jerry_Img1)
    }
    if(keyWentDown("space")){
      tom.velocityX = -2;
      tom.changeAnimation("tom",tom_Img2);
      jerry.changeAnimation("jerry",jerry_Img2);
    }

    


}
