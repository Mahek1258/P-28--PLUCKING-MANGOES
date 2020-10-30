
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var string,tree,stone,boy,ground;
var mango1 ,mango2 , mango3 ,mango4 ,mango5 ,mango6;

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
	
	stone = new Stone(200,400,40);
	string = new String(stone.body,{x:125,y:650});

	mango1 = new Mango(560,470);
	mango2 = new Mango(590,350);
	mango3 = new Mango(590,430);
	mango4 = new Mango(700,420);
	mango5 = new Mango(650,410);
	mango6 = new Mango(680,450);

	Engine.run(engine);
  
}


function draw() {
  background(0,200,255);

  ground = createSprite(400,697.5,800,5);
  //drawing images
  image(boy,100,625,100,100);
  image(tree,500,300,250,400);

  //detecting collision
  detectCollision(stone , mango1);
  detectCollision(stone , mango2);
  detectCollision(stone , mango3);
  detectCollision(stone , mango4);
  detectCollision(stone , mango5);

  //display
  stone.display();
  string.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();

 drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
	string.fly();
}

function detectCollision(stone,mango){
var mangoBodyPos = mango.body.position;
var stoneBodyPos = stone.body.position;

var distance = dist(stoneBodyPos.x , stoneBodyPos.y , mangoBodyPos.x , mangoBodyPos.y);
if(distance<=mango.radius + stone.radius){
	Matter.Body.setStatic(mango.body,false);
}

}
function keyPressed(){
	if(keyCode === 32){
	string.attach(stone.body);
	}
}