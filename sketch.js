let x;
let y;
let size = 20;
let velocity = 5;

let isGameOver = false;
let lastKeyPressed;

const canvasSize = 500;

// Runs on start
function setup() {
  createCanvas(canvasSize, canvasSize);
  reset();
}

// Runs every frame
function draw () {
  if (!isGameOver) {
    background(0);
    drawDot();
    drawSnake();
  } else {
    showGameOver();
  }
  if (isGameOver && (lastKeyPressed === ENTER || lastKeyPressed === RETURN)) {
    reset();
  }
}

// Automatically gets called when key is pressed
function keyPressed() {
  if (
    (
      keyCode === LEFT_ARROW ||
      keyCode === RIGHT_ARROW ||
      keyCode === UP_ARROW ||
      keyCode === DOWN_ARROW
    ) ||
    (
      isGameOver && (keyCode === RETURN || keyCode === ENTER)
    )
  ) {
    lastKeyPressed = keyCode;
  }
}

function showGameOver () {
  textSize(24);
  text('Game Over', canvasSize/2, canvasSize/2);
  textAlign('center')
  fill('white');
}

function drawDot () {

}

function drawSnake() {
  // Draw square to canvas
  square(x, y, size);

  // Move snake according to last key pressed
  if (lastKeyPressed === LEFT_ARROW) {
    x = x - velocity;
  } else if (lastKeyPressed === RIGHT_ARROW) {
    x = x + velocity;
  } else if (lastKeyPressed === UP_ARROW) {
    y = y - velocity;
  } else if (lastKeyPressed === DOWN_ARROW) {
    y = y + velocity;
  }

  // Check if out of bounds
  isOutOfBounds();
}

// Reset game state
function reset () {
  x = 0;
  y = 0;
  lastKeyPressed = RIGHT_ARROW;
  isGameOver = false;
}

// Check if snake has hit edge of canvas
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