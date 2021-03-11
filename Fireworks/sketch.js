var fireworks = [];
var gravity;

function setup() {
  createCanvas(800, 700);
  stroke(255);
  colorMode(HSB);
  gravity = createVector(0, 0.02);
  strokeWeight(4);
}



function draw() {
  colorMode(RGB);
  background(20,20,20,50);
  
  
  if (random(1)<0.03){
    fireworks.push(new Firework());
  }
  
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();

    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
  
  

}