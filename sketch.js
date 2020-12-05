
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;




var dustpanSideL
var dustpanSideR
var dustpanSideBottom

var paperObject

var floor

var car

var imageBin


function preload(){
	imageBin = loadImage("sprites/dustbingreen.png")
}

function setup() {
	createCanvas(1440, 700);



	engine = Engine.create();
	world = engine.world;

paperObject=new Paper(200,650,20)
groundObject=new ground(width/2,690,width,20)
dustpanSideL = new Bin(1130,490,20,90)
dustpanSideR = new Bin(1270,490,20,90)
dustpanSideBottom = new Bin(1200,670,150,20)


  
 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");

  


 
  paperObject.display();
  groundObject.display();
  dustpanSideBottom.display();
  dustpanSideL.display();
  dustpanSideR.display();
imageMode(CENTER)
image(imageBin,1200,570,200,250)
  

}

function keyPressed() {
	if (keyCode === UP_ARROW) {
    // Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
    // Matter.Body.applyForce(paperObject,{x:85,y:-85})
  //  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-130})
  // paperObject.velocityY = -7


	}
}




