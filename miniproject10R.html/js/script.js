
let r = 100;
let g = 100;
let b = 100;

let angle = 0

function setup() {
  let cnv = createCanvas(1000, 1000);
  cnv.position(400,400);
}
function colorChange(){
  r = random(255);
  g = random(255);
  b = random(255);
}
function draw() {
  //background(220);

  push();

  translate(width/2, height/2);
  //fill ('aquamarine');
  fill(r,g,b);
  rotate(radians(angle));
  angle = angle + 1;
  rectMode(CENTER);
  rect(100, 0, 100, 100);

  pop();

  push();

  translate (100, 100);
  rotate(radians(frameCount * 5));
  //fill(255, 255, 0);
  fill(r,g,b);
  rect(0, 0, 50 , 50);

  pop();

  push();

  translate ( 100, 100);
  rotate(radians(frameCount * 5));
  //fill( 51, 243, 255);
  fill(r,g,b);
  rect(100, -100, 50, 50);

  pop();

  push();

  translate( 200, 200);
  rotate(radians(frameCount * 8));
  //fill (153, 51, 255);
  fill(r,g,b);
  rect(200, 200, 80, 80);

  pop();



}
