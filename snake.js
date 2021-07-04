class Snake {
  constructor() {
    this.body = [this.getPosition()];
    this.xVelocity = 0;
    this.yVelocity = 0;
  }

  draw () {
    const head = this.body[this.body.length - 1].copy();

    this.body.shift();

    head.x += this.xVelocity*cell;
    head.y += this.yVelocity*cell;

    this.body.push(head);

    this.show();
  }

  changeDirection (xVel, yVel) {
    const goingOppositeDirection = (xVel && this.xVelocity) || (yVel && this.yVelocity);
    if (!goingOppositeDirection) {
      this.xVelocity = xVel;
      this.yVelocity = yVel;
    }
  }

  show () {
    fill(255);
    noStroke();
    for (let i = this.body.length - 1; i >= 0; i--) {
      square(this.body[i].x, this.body[i].y, cell); // Draw square to canvas
    }
  }

  eat ({ x: foodX, y: foodY }) {
    const { x: headX, y: headY } = this.body[this.body.length - 1];
    return dist(headX, headY, foodX, foodY) <= 1;
  }

  grow () {
    const head = this.body[this.body.length - 1].copy();
    this.body.push(head);
  }

  isGameOver () {
    return this.hasEatenSelf() || this.isOutOfBounds();
  }

  hasEatenSelf () {
    return this.body.slice(0, this.body.length - 2).some((part) => {
      return this.eat(part);
    });
  }

  // Check if snake has hit edge of canvas
  isOutOfBounds () {
    const head = this.body[this.body.length - 1];
    return (
      head.x > canvasSize - cell ||
      head.x < 0 ||
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