let keyColors = {
  'R': [255, 0, 0],
  'O': [255, 204, 0],
  'Y': [255, 255, 0],
  'G': [0, 255, 0],
  'B': [0, 0, 255],
  'P': [200, 0, 200],
  'T': [173, 216, 230],
  'W': [255, 255, 255],
  'L': [255, 182, 193]
};

let circleColor;

function setup() {
  createCanvas(800, 800);
  background(255);
  circleColor = color(0); // start black
}

function draw() {
  fill('black');
  textSize(15);
  textAlign(CENTER, CENTER);
  text("Press R, O, Y, G, B, P, T, W, L to change colors and draw with all the colors of the rainbow (and the trans flag.)", width/2, 20);

  fill(circleColor);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);
}

function keyPressed() {
  let k = key.toUpperCase();
  if (keyColors[k]) {
    circleColor = color(...keyColors[k]);
  }
}

