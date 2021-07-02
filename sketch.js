let snake;
let isGameOver = false;
let lastKeyPressed = 39; // RIGHT_ARROW
const canvasSize = 500;
const cell = 20;


// Runs on start
function setup() {
  createCanvas(canvasSize, canvasSize);
  snake = new Snake();
}

// Runs every frame
function draw () {
  if (!isGameOver) {
    background(0);
    snake.draw();
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

function getRandCoord () {
  return floor(random(5, (canvasSize - cell)/5)) * 5;
}

// Reset game state
function reset () {
  lastKeyPressed = RIGHT_ARROW;
  isGameOver = false;
  snake.reset();
}

