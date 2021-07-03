let snake;
let food;
let isGameOver = false;
const canvasSize = 600;
const cell = 20;

// Runs on start
function setup() {
  createCanvas(canvasSize, canvasSize);
  frameRate(10);
  snake = new Snake();
  food = new Food();
}

// Runs every frame
function draw () {
  if (!isGameOver) {
    background(0);
    if (snake.eat(food.pos)) {
      food.reset();
      snake.grow();
    }
    snake.draw();
    food.draw();
  } else {
    showGameOver();
  }
}

// Automatically gets called when key is pressed
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.changeDirection(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.changeDirection(1, 0);
  } else if (keyCode === UP_ARROW) {
    snake.changeDirection(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.changeDirection(0, 1);
  } else if (isGameOver && (keyCode === RETURN || keyCode === ENTER)) {
    reset();
  }
}

function showGameOver () {
  fill('red');
  textSize(24);
  text('Game Over', canvasSize/2, canvasSize/2);
  textAlign('center');
}

// Reset game state
function reset () {
  isGameOver = false;
  snake.reset();
}

