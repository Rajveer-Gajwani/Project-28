const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(1300,550);

	engine = Engine.create();
	world = engine.world;

throwe = new Ball(100,50);
grounda = new ground(400,525,2000,50);
groundb = new ground(1300,255,50,2000)
chain = new SlingShot(throwe.body,{x:200, y:200});
box1 = new Obstacle(400,200);
box2 = new Obstacle(425,200);
box3 = new Obstacle(450,200);
box4 = new Obstacle(475,200);
box5 = new Obstacle(500,200);
box6 = new Obstacle(525,200);

box7 = new Obstacle(550,200);
box8 = new Obstacle(575,200);
box9 = new Obstacle(670,200);
box10 = new Obstacle(435,250);
box11 = new Obstacle(465,250);
box12 = new Obstacle(490,250);
box13 = new Obstacle(515,250);
box14 = new Obstacle(530,250);
box15 = new Obstacle(555,250);
box16 = new Obstacle(580,250)
box17 = new Obstacle(425,250);


Engine.run(engine);
}

function draw() {
  background(0);
  
  Engine.update(engine);

  throwe.display();

  chain.display();
  box1.display();
  box2.display();
  box3.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();

  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();


  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(throwe.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  chain.fly();
}

function keyPressed(){
if(keyCode === 32){
  Matter.Body.setPosition(throwe.body,{x:200,y:200});
  chain.attach(throwe.body);
}
}