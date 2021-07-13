var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var particle;
var gameState = 0


var count = 0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  textSize(36);
  text("Score : "+score,20,30);
  fill("white")

  textSize(36);
  text(" 500 ",5,550)
  text(" 500 ",80,550)
  text(" 400 ",160,550)
  text(" 400 ",240,550)
  text(" 300 ",320,550)
  text(" 300 ",400,550)
  text(" 200 ",480,550)
  text(" 200 ",560,550)
  text(" 100 ",640,550)
  text(" 100 ",720,550)

  strokeWeight(3)
  stroke("yellow")
  line(0,450, 800, 450)

  if(gameState === 1){
    textSize(80)
    text("Game Over", 200,400)
    fill("white")
  }

  Engine.update(engine);
 
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }

   if(particle!=null){
     particle.display();

     if(particle.body.position.y>760){
       
      if(particle.body.position.x < 160){

        score = score+500;
        particle = null;
        if(count>= 5){
          gameState = 1;
        }
      }

     else if(particle.body.position.x < 320 && particle.body.position.x > 161){
      score = score+400;
      particle = null;
      if(count>= 5){
        gameState = 1;
      }
     }
     else if(particle.body.position.x < 480 && particle.body.position.x > 321){
      score = score+300;
      particle = null;
      if(count>= 5){
        gameState = 1;
      }
     }

     else if(particle.body.position.x < 640 && particle.body.position.x > 481){
      score = score+200;
      particle = null;
      if(count>= 5){
        gameState = 1;
      }
     }

     else if(particle.body.position.x < 800 && particle.body.position.x > 641){
      score = score+100;
      particle = null;
      if(count>= 5){
        gameState = 1;
      }
     }

     }
   }






   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
  if(gameState!== 1){
    count = count+1;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}