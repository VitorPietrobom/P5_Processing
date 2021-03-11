function Particle(x,y, firework, color) {
  this.color = color;
  this.pos = createVector(x,y);
  this.firework = firework;
  this.lifespan = 255;
  if(this.firework){
    this.vel = createVector(0,random(-6,-2));
  }
  else{
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(0,6));
  }
  this.acc = createVector(0,0);
  
  
  this.applyForce = function(force) {
    this.acc.add(force);
  }
  
  
  
  
  this.update = function() {
    if(!this.firework){
      this.vel.mult(0.95);
      this.lifespan -= 2;
    }
    
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);  
  }
  
  
  this.done = function() {
    if (this.lifespan < 20){
      return true;
    } else {
      return false;
    }
  }
  
  
  
  this.show = function(){
    colorMode(HSB);
    
    if(!this.firework){
      strokeWeight(2);
      stroke(this.color, 255, this.lifespan,255);
    }
    else{
      strokeWeight(6);
      stroke(this.color, 255, 255);
    }
    point(this.pos.x,this.pos.y);
    
    
  }
}