class Snake {
  constructor() {
    this.x = this.getRandCoord();
    this.y = this.getRandCoord();
    this.velocity = 5;
  }

  draw () {
    fill(255);
    square(this.x, this.y, cell); // Draw square to canvas
    this.moveSnake(); // Move snake according to last key pressed
    this.isOutOfBounds(); // Check if out of bounds
  }

  moveSnake() {
    if (lastKeyPressed === LEFT_ARROW) {
      this.x = this.x - this.velocity;
    } else if (lastKeyPressed === RIGHT_ARROW) {
      this.x = this.x + this.velocity;
    } else if (lastKeyPressed === UP_ARROW) {
      this.y = this.y - this.velocity;
    } else if (lastKeyPressed === DOWN_ARROW) {
      this.y = this.y + this.velocity;
    }
  }

  // Check if snake has hit edge of canvas
  isOutOfBounds () {
    if (
      this.x >= canvasSize - cell/2 - this.velocity ||
      this.x < 0 ||
      this.y >= canvasSize - cell/2 - this.velocity ||
      this.y < 0
    ) {
      isGameOver = true;
    }
  }

  reset () {
    this.x = getRandCoord();
    this.y = getRandCoord();
  }

  getRandCoord () {
    return floor(random(5, (canvasSize - cell)/5)) * 5;
  }
}