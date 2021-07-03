class Snake {
  constructor() {
    this.body = [this.getPosition()];
    this.xVelocity = 0;
    this.yVelocity = 0;
  }

  draw () {
    fill(255);
    square(this.body[0].x, this.body[0].y, cell); // Draw square to canvas
    this.moveSnake();
    if (this.isOutOfBounds()) {
      isGameOver = true;
    }
  }

  changeDirection (xVel, yVel) {
    this.xVelocity = xVel;
    this.yVelocity = yVel;
  }

  moveSnake() {
    const [head] = this.body;
    head.x += this.xVelocity*cell;
    head.y += this.yVelocity*cell;
  }

  eat (food) {
    return dist(this.body[0].x, this.body[0].y, food.x, food.y) <= 1;
  }

  grow () {
    console.log('grow');
  }

  // Check if snake has hit edge of canvas
  isOutOfBounds () {
    const [head] = this.body;
    return (
      head.x > canvasSize - cell ||
      head.x <= cell/2 ||
      head.y > canvasSize - cell ||
      head.y < 0
    );
  }

  reset () {
    this.body = [this.getPosition()];
    this.changeDirection(0, 0);
  }

  getPosition () {
    return createVector(floor(canvasSize/2), floor(canvasSize/2));
  }
}