let scorpion;
let rhino;
let tinkerer;
let shocker;
let venom;
let myFont;

let shapeArray = [];
var boxTranslationX = -100;
var boxTranslationY = -100;

function preload() {
  venom = loadImage('assets/Venom.jpg');
  rhino = loadImage('assets/Rhino.jpg');
  shocker = loadImage('assets/Shocker.jpg')
  tinkerer = loadImage('assets/Tinkerer.jpg')
  scorpion = loadImage('assets/Scorpion.jpg')
  myFont = loadFont("fonts/ProtestRiot-Regular.ttf");
}

function setup() {
  createCanvas(800, 600, WEBGL);

  shapeArray.push(new shapeclass("box", 150, 150, 150, boxTranslationX, boxTranslationY, 0.02, 0.03, 0, venom));
  shapeArray.push(new shapeclass("cylinder", 80, 90, 0, 200, 20, 0.01, 0.01, 0, shocker));
}

function draw() {

  background(200);
  normalMaterial();
  // this is required to make sure the custom shape will be textured
  image(shocker);

  // display the simple shapes
  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].draw(frameCount);
  }

  //cone
  push();
  translate(-300, -200);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(rhino);
  cone(100, 70);
  pop();

  //ellipsoid
  push();
  translate(-250, 150);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(tinkerer);
  ellipsoid(30, 40, 140);
  pop();

  //torus
  push();
  translate(150, -150);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(scorpion);
  torus(30, 15);
  pop();

  // change the location of the box
  if (mouseIsPressed) {
    boxTranslationX = 0;
    boxTranslationY = 0;
    boxTranslationX = floor(random(600));
    boxTranslationY = floor(random(400));
  }
  fill(255, 0, 0);
  textSize(36);
  textFont(myFont);
  text("Title: Solid Villains", 0, 250);

  fill(255, 0, 0);
  textSize(24);
  textFont(myFont);
  text("Name: Garrett Boehm", 50, 150);
}