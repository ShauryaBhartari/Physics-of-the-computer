//namespacing
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ground;
var ball;
var engine, world;
function setup (){
var canvas=createCanvas(400,400);


engine=Engine.create();
world=engine.world;

var ground_option = {
  isStatic: true 
}
var ball_option = {
restitution : 1.0
}
ground=Bodies.rectangle(200,390,400,0,ground_option);
World.add(world,ground);

ball = Bodies.circle(200,100,20,ball_option);
World.add(world,ball);

console.log(ground);
}
function draw (){
background("black");

Engine.update(engine);
rectMode(CENTER);
rect(200,200,50,50);
rect(ground.position.x,ground.position.y,400,20);

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,20,20);
}