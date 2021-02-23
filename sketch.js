const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1;
var p;
var c;


function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(800,height,600,20);
    box1 = new Box(700,20,70,70);
    p = new P(200,30);
    c = new Chain(p.body,{x:200, y:30});
}

function draw(){
    background(80);
    Engine.update(engine);
    box1.display();
    ground.display();
    p.display();
    c.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(p.body, {x: mouseX , y: mouseY}); 
}

function mouseReleased(){
    c.FVH()
}

