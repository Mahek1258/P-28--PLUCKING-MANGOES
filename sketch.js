
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var string,tree,stone;

function preload()
{
	image('Plucking mangoes/boy.png',200,200,50,50);
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	stone = new Stone(200,50,20,20);
	string = new String(stone,200,150);
	tree = new Tree(400,400,50,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.display();
  string.display();
  tree.display();
  drawSprites();
 
}



