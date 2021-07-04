let snake;
let food;
let scoreboard;

let isGameOver = false;
const canvasSize = 600;
const cell = 20;

// Runs on start
function setup() {
  createCanvas(canvasSize, canvasSize);
  frameRate(10);
  snake = new Snake();
  food = new Food();
  scoreboard = new Scoreboard();
}

// Runs every frame
function draw () {
  if (!isGameOver) {
    background(0);
    if (snake.eat(food.pos)) {
      food.reset(snake.body);
      snake.grow();
      scoreboard.addPoint();
    }
    snake.draw();
    food.draw();
    scoreboard.draw();

    isGameOver = snake.isGameOver();
  } else {
    showGameOver(scoreboard.score);
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

function showGameOver (score) {
  textSize(24);
  textAlign('center');
  text('Game Over', canvasSize/2, canvasSize/2);
  text(`You scored: ${score}`, canvasSize/2, canvasSize/2 + 24);
}

// Reset game state
function reset () {
  isGameOver = false;
  snake.reset();
  scoreboard.reset();
}

