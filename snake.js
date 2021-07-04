class Snake {
  constructor() {
    this.body = [this.getPosition()];
    this.xVelocity = 0;
    this.yVelocity = 0;
  }

  draw () {
    fill(255);
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
    const head = this.body[this.body.length - 1].copy();

    this.body.shift();

    head.x += this.xVelocity*cell;
    head.y += this.yVelocity*cell;

    this.body.push(head);

    this.show();
  }

  show () {
    for (let i = this.body.length - 1; i >= 0; i--) {
      square(this.body[i].x, this.body[i].y, cell); // Draw square to canvas
    }
  }

  eat ({ x: foodX, y: foodY }) {
    const { x: headX, y: headY } = this.body[this.body.length - 1].copy();
    return dist(headX, headY, foodX, foodY) <= 1;
  }

  grow () {
    const head = this.body[this.body.length - 1].copy();
    this.body.push(head);
  }

  // Check if snake has hit edge of canvas
  isOutOfBounds () {
    const head = this.body[this.body.length - 1];
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