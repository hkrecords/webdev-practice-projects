let mouseDist = 24;

let rows, columns;
let size = 16; let offset = 6;
let blocks = [];

function setup() {
  createCanvas(windowWidth, 500);
  rectMode(CENTER);
  angleMode(DEGREES);
  rows = height / size;
  columns =  width / size;

  for (let i = 0; i < rows; i++) {
    blocks[i] = [];
    for (let j = 0; j < columns; j++) {
      blocks[i][j] = new Block((size / 2) + j * size, (size / 2) + i * size); 
    }
  }
}

function draw() {
  background(0);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      blocks[i][j].display(); 
      blocks[i][j].move(); 
    }
  }

  

  /* 
  // Logic to create single rotating rectangle when hovers

  let distance = dist(mouseX, mouseY, width / 2, height / 2);

  if (distance < mouseDist) {
    angle++;
  }

  translate(width / 2, height / 2);
  rotate(angle);
  rect(0, 0, 100, 50); 
  */
}




/* 
NOTES:

AnyPixel.js - https://googlecreativelab.github.io/anypixel

rotate() - rotates around origin points.

translate() - changes/translate  origin points.

dist() - calculates distance b/w 2 points. four or six parameters.

pmouseX, pmouseY - built-in variables to check previous location of mouse.
*/