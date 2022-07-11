const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Body = Matter.Body
//Crear espacio de nombre para Engine
//Crear espacio de nombre para World
//Crear espacio de nombre para Bodies
//Crear espacio de nombre para Body


function setup() {
  createCanvas(400,400);
  engine = Engine.create()
//crear engine
world = engine.world
  //Agregar world a engine
  
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
  
//crear un fondo
background("green")
//agregarlo a world

suelo=Bodies.rectangle(100,400,400,20,ground_options)
World.add(world,suelo)

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  
  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  

  ellipse(ball.position.x,ball.position.y,20);
  //escribir una función rectangle para mostrar el suelo.
  rect(suelo.position.x,suelo.position.y,600,10)
 


  
  
}

