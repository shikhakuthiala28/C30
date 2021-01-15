const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Cons=Matter.Constraint;

var engine,world,mainGround,polygon;
var platform;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;
var slingShot;

function setup(){

    createCanvas(1200,600);

    engine=Engine.create();
    world=engine.world;

    mainGround= new Ground(600,580,1200,20);
    platform= new Ground(775,350,400,25);

    box1= new Box(660,306);
    box2= new Box(715,306);
    box3= new Box(770,306);
    box4= new Box(825,306);
    box5= new Box(880,306);

    box6= new Box(680,244);
    box7= new Box(735,244);
    box8= new Box(790,244);
    box9= new Box(845,244);

    box10= new Box(700,182);
    box11= new Box(755,182);
    box12= new Box(810,182);

    box13= new Box(720,120);
    box14= new Box(775,120);

    box15= new Box(745,58);

    polygon= new Polygon(100,100);

    slingShot= new SlingShot(polygon.body,{x:200,y:300});


    Engine.run(engine);
}

function draw(){

    background("grey");

    fill (48,22,8);
    mainGround.display();
    platform.display();
 
    fill ('red');
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    fill('blue');
    box6.display();
    box7.display();
    box8.display();
    box9.display();

    fill('green');
    box10.display();
    box11.display();
    box12.display();

    fill('yellow');
    box13.display();
    box14.display();

    fill('orange');
    box15.display();

    polygon.display();
    slingShot.display();

    detectcollision(polygon,box1);
	detectcollision(polygon,box2);
	detectcollision(polygon,box3);
	detectcollision(polygon,box4);
    detectcollision(polygon,box5);
	detectcollision(polygon,box6);
	detectcollision(polygon,box7);
	detectcollision(polygon,box8);
    detectcollision(polygon,box9);
	detectcollision(polygon,box10);
	detectcollision(polygon,box11);
	detectcollision(polygon,box12);
	detectcollision(polygon,box13);
	detectcollision(polygon,box14);
	detectcollision(polygon,box15);
	
}
function mouseDragged(){

    Matter.Body.setPosition(polygon.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}
function detectcollision(polygon1,boxes){
	polygon1Position=polygon1.body.position
    boxesPosition=boxes.body.position
  
  var distance=dist(boxesPosition.x, boxesPosition.y, polygon1Position.x, polygon1Position.y)
	  if(distance<=100)
    {
      Matter.Body.setStatic(boxes.body,false);
	}
}
function keyPressed(){
    if(keyCode === 32){
        slingShot.attach(polygon.body);
    }
}
