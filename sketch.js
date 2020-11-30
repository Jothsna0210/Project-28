
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bg,boyImg;
var gameState = "onsling"

function preload()
{
	bg = loadImage("Plucking mangoes/bg.png");
	boyImg = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(400,600,800,20)

	rock = new Stone(130,500,35,35)

	tree = new Tree(600,400,50,460)

	string = new Rope(rock.body,{x:120,y:460})

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);

  if(background)
  background(bg);
  
  image(boyImg,80,380,200,300)

  ground1.display();	
  rock.display();
  tree.display();
  string.display();

  drawSprites();
 
}

function mouseDragged(){
        Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    string.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
        rock.trajectory=[];
        Matter.Body.setPosition(rock.body, {x: 120 , y: 460});
    	string.attach(rock.body);
    }
}