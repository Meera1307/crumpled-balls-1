
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball1;
var dustbin1,dustbin2,dustbin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new ball(200,200)
	
	dustbin1 = new dustbin(630,605,10,110);
	dustbin2 = new dustbin (700,605,10,110);
	dustbin3 = new dustbin(680,650,100,10);
                               


    

    //fill("brown");
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	
	 World.add(world,ground);
	 
	/// ground.shapeColor = color("brown");


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

fill("brown");
rect(ground.position.x,ground.position.y,800,10)

 
  ball1.display();
  dustbin1.display();
  dustbin2.display();


  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:20,y:-20});
}	
}



