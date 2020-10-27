let scenery;
let rect = [];
let buildings = [];

function preload() {
  scenery = loadImage('buildings/background.jpg');
  for (i = 0; i < 6; i++) {
    buildings[i] = loadImage('buildings/building' + i + '.png');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < 1000; i++) {
    let x = width;
    let y = height - 430;
    let w = random(50, 150);
    let h = random(200, 500);
    let building = random(buildings);
    let b = new AddBuilding(x, y, w, h, building);
    
    rect.push(b);
  }
}

function draw() {
  image(scenery, 0, 0, width, height)
  for(build of rect) {
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
    translate(-frameCount * 2, 0);
  }

  draw() {
    image(this.building, this.x, this.y, this.r);
  }
}