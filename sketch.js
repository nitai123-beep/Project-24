
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbin1,dustbin2,dustbin3,ground,ball;



function preload()
{
	
}

function setup() {
	createCanvas(800, 400);



	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

ball=new Ball(100,200,20);
ground= new Ground(400,390,800,20);
dustbin1= new Dustbin(575,315,10,100);
dustbin2= new Dustbin(645,373,150,10);
dustbin3= new Dustbin(715,315,10,100);
}


function draw() {
  background(0);
  Engine.update(engine);
 ball.display();
 ground.display();
 dustbin1.display();
 dustbin2.display();
 dustbin3.display();
}



function keyPressed(){
	if (keyCode === UP_ARROW){
	
	ball.bounce();
	}
	}

