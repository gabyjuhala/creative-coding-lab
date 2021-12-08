let cam;
let paxi;
let cnv;
let bark;

function preload() {
  paxi = loadImage("assets/paxi.PNG");
  bark = loadSound('assets/bark.wav');
}

function setup() {
  cnv = createCanvas(640, 480);
  cnv.position(windowWidth/2-320, windowHeight/2-180);
  cam = createCapture(VIDEO);
  cam.hide();
  paxi.loadPixels();
}

function draw() {
  background(0);
  image(cam, 0, 0, 640, 480);
  image(paxi, 450, 0, 200, 400);
}

function mousePressed(){
  save('paxiSelfie.png');
  bark.play();
  return false;
}

// function mousePressed(){
//   if (bark.isPlaying){
//     bark.stop();
//   } else{
//     song.play();
//   }
// }
