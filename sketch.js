
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var string,tree,stone,boy;
var mango1 ,mango2 , mango3 ,mango4 ,mango5 ;

var engine , world;
function preload()
{
	//loading images
	boy = loadImage("Plucking mangoes/boy.png");
	tree = loadImage("Plucking mangoes/tree.png");
}
 
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	stone = new Stone(200,400,20,20);
	string = new String(stone.body,{x:125,y:650});

	mango1 = new Mango(500,500)
	Engine.run(engine);
  
}


function draw() {
  background(0,200,255);

  //drawing images
  image(boy,100,625,100,100);
  image(tree,500,300,250,400);

  //display
  stone.display();
  string.display();
 mango1.display();
}



