
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var string,tree,stone,boy;
var engine , world;
function preload()
{
	
	boy = loadImage("Plucking mangos/boy.png");
}
 
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	stone = new Stone(200,400,20,20);
	string = new String(stone.body,{x:200,y:400});
	tree = new Tree(500,520,300,400);
	Engine.run(engine);
  
}


function draw() {
  background(100,300);
  image(boy,200,400,100,100);
  stone.display();
  string.display();
  tree.display();
 
}



