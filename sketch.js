let x;
let y;
let size = 20;
let velocity = 5;

let isGameOver = false;
let lastKeyPressed;

const canvasSize = 500;

function setup() {
  createCanvas(canvasSize, canvasSize);
  reset();
}

function draw () {
  if (!isGameOver) {
    background(0);
    square(x, y, size);
    move();
    isOutOfBounds();
  } else {
    showGameOver();
  }
  if (lastKeyPressed === ENTER || lastKeyPressed === RETURN) {
    reset();
  }
}

function showGameOver () {
  textSize(24);
  text('Game Over', canvasSize/2, canvasSize/2);
  textAlign('center')
  fill('white');
}

function move() {
  if (lastKeyPressed === LEFT_ARROW) {
    x = x - velocity;
  } else if (lastKeyPressed === RIGHT_ARROW) {
    x = x + velocity;
  } else if (lastKeyPressed === UP_ARROW) {
    y = y - velocity;
  } else if (lastKeyPressed === DOWN_ARROW) {
    y = y + velocity;
  }
}

function reset () {
  x = 0;
  y = 0;
  lastKeyPressed = RIGHT_ARROW;
  isGameOver = false;
}

function isOutOfBounds () {
  if (
    x >= canvasSize - size/2 - velocity ||
    x < 0 ||
    y >= canvasSize - size/2 - velocity||
    y < 0
  ) {
    isGameOver = true;
  }
}

function keyPressed() {
  lastKeyPressed = keyCode;
}