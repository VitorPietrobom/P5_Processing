function Particle(x,y,size){
  this.pos = createVector(random(width),random(height/2,height));
  this.vel = createVector(0,0);
  this.acc = createVector(0,0);
  this.size = size;
  
  
  this.applyForce = function(force){
    this.acc.add(force);
  }
  
  this.update = function(size){
    
    
    if(this.pos.y >= height-this.size){
      this.pos.y = height-this.size-0.1;
      this.vel.y = 0;
    }
    else if(this.pos.y <= 0){
      this.pos.y = 0+0.1;
      this.vel.y = 0;
    }
    else if(this.pos.x >= width-this.size){
      this.pos.x = width-this.size-0.1;
      this.vel.x = 0;
    }
     else if(this.pos.x <= 0){
      this.pos.x = 0.1 ;
      this.vel.x = 0;
    }
    else{
      this.vel.add(this.acc);  
    }
    
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.size = size;
  }
  
  
  this.show = function(){
    stroke('black');
    strokeWeight(0.2);
    fill('blue');
    rect(this.pos.x, this.pos.y,this.size,this.size);
  }
}