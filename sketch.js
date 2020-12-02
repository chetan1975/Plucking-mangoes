
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(400,640,800,10)
	
	Boy = new Bob(300,200,125,200)

	tree = new BaseClass(500,500,450,650)

	slingshot = new SlingShot(Boy.body,{x:100, y:500});
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#FFF5EC");

  ground1.display();
  Boy.display();
  tree.display();

  slingshot.display();
  
  drawSprites();
 
}
function mouseDragged(){
     
    Matter.Body.setPosition(Boy.body, {x: mouseX , y: mouseY});
   
}


function mouseReleased(){
    slingshot.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(Boy.body);
    }
}



