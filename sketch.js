
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var display;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 1200);
	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0
	}

	

	
	//Create the Bodies Here.
	ground =new Ground(width/2,670,width,20)
	rightside =new Ground(1100,600,20,120)
	leftside =new Ground(900,600,20,120)
	ball = Bodies.circle(600,200,30,ball_options)
	World.add(world,ball)
	Engine.run(engine);
}


function draw() {
	Engine.update(engine);

  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,30)
  ground.display()
  leftside.display()
  rightside.display()
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:0.2})

	}
}

