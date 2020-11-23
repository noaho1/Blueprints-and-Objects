const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

function setup() {
    createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;

    //creating object of Ground class 
    // new keyword, className,  () -> invoking/calling constructor of Ground class

    // create two box object of Box class
    box1 = new Box(200, 300, 50, 50);
    box2 = new Box(240, 100, 50, 100);
    ground = new Ground(600, height, 1200, 20);

    console.log(ground);
}

function draw() {
    background(0);
    Engine.update(engine);

    box1.display();
    box2.display();
    ground.display();

}