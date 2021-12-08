let screen = 0;
let x;
let y;
let speed;
let score = 0;
let rectSpeed;
let rectWidth = 100;
let rectY = 100;
let rectX = -250;

var rectWidth1 = 100;
var rectY1 = 150;

var randomXSpace= 50;

let song;

function preload() {

  song = loadSound('assets/song.wav');
}

function setup() {
  cnv = createCanvas(300, 300);
  cnv.position(windowWidth/2-150,windowHeight/2-100);
  y = height - 20;
  x = width / 2;
}


function draw() {

  if (screen == 0) {
    startScreen();
  } else if (screen == 1) {
    gameOn();

  } else if (screen == 2) {
    gameOver();
  }
}

function keyPressed(){
  if(key == " "){
    song.play();
  }else if(key == "s"){
    song.stop();
  }
}

function mousePressed() {
  if (screen == 0) {
    screen = 1
  } else if (screen == 2) {
    screen = 0
  }
}

function startScreen() {
  reset();
  background(255, 87, 51);
  fill(255)
  textAlign(CENTER);
  text('HELP PAXI CROSS WITHOUT BEING HIT', width / 2, height / 2)
  text('click to start', width / 2, height / 2 + 40);
}

function gameOn() {
  background(0)
  drawPaxi(x, y);
  textAlign(CENTER);
  text('HOLD DOWN THE ARROW KEYS TO MOVE PAXI', 150, 10);
  textAlign(CENTER);
  text('GET PAXI TO THE TOP WITHOUT BEING HIT', 150, 30);
  if (keyIsPressed) {
    if (keyCode === RIGHT_ARROW) {
      x += speed
    } else if (keyCode === LEFT_ARROW) {
      x -= speed
    } else if (keyCode === UP_ARROW) {
      y -= speed
    } else if (keyCode === DOWN_ARROW) {
      y += speed
    }
  }

  rect(rectX, rectY, rectWidth, 20);
  rect(rectX+ randomXSpace, rectY1, rectWidth1, 20);



  rectX += rectSpeed;

  if (rectX > width) {
    randomWidth();
    rectX = -250;
  }
  //if you got to the other side, speed up and go back to the beginning
  if (y < 0) {
    y = height - 20;
    rectSpeed += 3;
    score+=1
  }

  if (y > rectY && y < rectY + 20 && x > rectX && x < rectX + rectWidth) {
    screen = 2
  }
  if (y > rectY1 && y < rectY1 + 20 && x > rectX && x < rectX + rectWidth1) {
    screen = 2
  }
}

function gameOver() {
  background(150)
  textAlign(CENTER);
  text('GAME OVER', width / 2, height / 2)
  text('click anywhere on the screen to play again', width / 2, height / 2 + 20);

}

function randomWidth() {
  rectWidth = random(50, 250)
  rectWidth1 = random(50, 250)
}

function randomSpace() {
  randomXSpace = random(50, 100)
}

function reset() {
  speed = 1;
  score = 0;
  rectSpeed = 5;
  rectY = 100;
  rectX = -100;
	rectY1 = 150;
  y = height - 20;
  x = width / 2;
}


function drawPaxi(x, y) {
  push();
  translate(x, y);
  scale(0.15);
  fill(255);

  ellipse(-50, 0, 130, 75);
  ellipse(10, 10, 40, 90);

  triangle(4, -30, -4, -16, -17, -40);
  triangle(15, -30, 22, -16, 35, -40);

  strokeWeight(10);
  stroke(255);
  //legs
  push();
  scale(-1, 1);
  line(90, 12, 100, 50);
  line(100, 50, 80, 67);
  line(80, 12, 60, 65);
  ellipse(80, 67, 5);
  ellipse(60, 65, 5);
  //front legs
  line(40, 12, 50, 50);
  line(50, 50, 30, 67);
  line(30, 12, 10, 65);
  ellipse(30, 67, 5);
  ellipse(10, 65, 5);
  pop();
  //eyes
  fill(0);
  noStroke();
  ellipse(3, 0, 5, 20);
  ellipse(17, 0, 5, 20);
  ellipse(10, 50, 10);
  stroke(255);
  strokeWeight(10);
  line(-150, 0, -50, 0);
  pop();
}
