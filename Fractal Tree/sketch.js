var angle;
var slider;

function setup() {
  createCanvas(900, 700);
  slider = createSlider(0, TWO_PI, PI / 4, 0);
}

function draw() {
  background(20);

  stroke(175);
  translate(width / 2, height);
  angle = slider.value();
  branch(200);

}

function branch(len) {
  if (len < 2) {
    return 0;
  }
  strokeWeight(len / 10);
  line(0, 0, 0, -len);
  translate(0, -len);

  push();
  rotate(angle);
  branch(len * (2 / 3));
  pop();
  push();
  rotate(-angle);
  branch(len * (2 / 3));
  pop();

}