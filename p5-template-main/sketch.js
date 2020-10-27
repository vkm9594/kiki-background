let scenery;
let rect = [];
let buildings = [];
let seagull;

function preload() {
  scenery = loadImage('buildings/background.jpg');
  seagull = loadImage('buildings/seagull.gif');
  for (i = 0; i < 6; i++) {
    buildings[i] = loadImage('buildings/building' + i + '.png');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 6; i++) {
    let x = width;
    let y = height - 400;
    let w = random(600);
    let h = random(400, 700);
    let b = new AddBuilding(x, y, w, h);
    rect.push(b);
  }
}

function draw() {
  image(scenery, 0, 0, width, height);
  push();
  scale(0.5);
  translate(-frameCount, 0);
  image(seagull, width * 2, 0);
  pop();
  for (build of rect) {
    build.update();
    build.draw();
  }
}

class AddBuilding {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.building = random(buildings);
  }

  update() {
    translate(-frameCount, 0);
  }

  draw() {
    image(this.building, this.x, this.y, this.w, this.h);
  }
}