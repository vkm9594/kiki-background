let movingClouds;
let buildings = [];

function preload() {
  movingClouds = loadImage('floating-clouds.gif');
  for(i = 0; i < 6; i++) {
    buildings[i] = loadImage('buildings/building'+ i + '.png');
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  var color1 = color(2, 144, 212);
  var color2 = color(222, 244, 255);
  setGradient(0, 0, windowWidth, windowHeight, color1, color2, "Y");

  cloudsInSky();
  build();

}
 

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") { // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      var inter = map(i, y, y + h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis == "X") { // Left to right gradient
    for (let j = x; j <= x + w; j++) {
      var inter2 = map(j, x, x + w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y + h);
    }
  }
}

function cloudsInSky() {
  push();
  imageMode(CORNER);
  // scale(0.3);
  image(movingClouds, 0, 0, width, movingClouds.height*width/movingClouds.width);
  pop();
}

class AddBuilding {
  constructor(x, y, r, img) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.building = random(buildings);
  }

  update() {
    //translate(-frameCount * 3, 0);
  }

  draw() {
   
  image(buildings[1], 0, 0);
  }
}
