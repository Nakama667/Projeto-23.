var imagemHel, helicopter, pacote,pacoteImg;
var pacoteBody,chao
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	imagemHel=loadImage("helicopter.png")
	pacoteImg=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	pacote=createSprite(width/2, 80, 10,10);
	pacote.addImage(pacoteImg)
	pacote.scale=0.2

	helicopter=createSprite(width/2, 200, 10,10);
	helicopter.addImage(imagemHel)
	helicopter.scale=0.6

	chao=createSprite(width/2, height-35, width,10);
	chao.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	pacoteBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, pacoteBody);
	

	//Create a Ground
	chao = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, chao);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  pacote.x= pacoteBody.position.x 
  pacote.y= pacoteBody.position.y 


  
  drawSprites();
  
  
 
}


function keyPressed() {
	if (keyCode === LEFT_ARROW) {
  
	  helicopter.x=helicopter.x-20;    
	  translation={x:-20,y:0}
	  Matter.Body.translate(pacoteBody, translation)
  
  
	} else if (keyCode === RIGHT_ARROW) {
	  helicopter.x=helicopter.x+20;
	  translation={x:20,y:0}
	  Matter.Body.translate(pacoteBody, translation)
	}
	else if (keyCode === DOWN_ARROW) {
	  Matter.Body.setStatic(pacoteBody,false);
	  
	}
  }
  
  
