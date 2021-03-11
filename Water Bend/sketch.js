var water = [];
var particNumber = 500;
var powerRadius;
var size;

var gravity;
var mouseForce;
var airResistence;

function setup() {
  createCanvas(800, 700);
  stroke(255);
  size=6;
  for(var i = 0 ; i < particNumber ; i++){
    water.push(new Particle(10,10,size))
  }
  gravity = createVector(0,0.04);
  airResistence = createVector(0,0)
  mouseForce = createVector(0,0);
  powerRadius=150;
  
  
}

function draw() {
  background(22);
  for(var i = 0 ; i < particNumber ; i++){
    display(water[i]);
    checkConflict(water[i], water);
  }
  
  function display(partic) {
    airResistence.add(-partic.vel.x/200,-partic.vel.y/200);
    if(mouseIsPressed){
      mouseForce.add((mouseX-partic.pos.x)/300,(mouseY-partic.pos.y)/300);
    }
    partic.applyForce(airResistence);
    partic.applyForce(gravity);
    if(abs(mouseX-partic.pos.x)<powerRadius && abs(mouseY-partic.pos.y)<powerRadius){
      partic.applyForce(mouseForce);
    }
    partic.update(size);
    partic.show();
    mouseForce.mult(0);
    airResistence.mult(0);
  }
  
  function checkConflict(partic, list){
    for(var i = 0 ; i < particNumber ; i++){
      if(partic != list[i]){
        if(abs(list[i].pos.x-partic.pos.x) <= partic.size && abs(list[i].pos.y-  partic.pos.y) < partic.size){
          partic.applyForce(createVector((-list[i].pos.x+partic.pos.x)/50,(-list[i].pos.y+partic.pos.y)/50));
           
        }
      }
    }
    
  }
  
  
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    size--;
  } else if (keyCode === RIGHT_ARROW) {
    size++;
  }
}