class Food {
  constructor() {
    this.pos = this.getPosition();
  }

  draw () {
    fill('green');
    square(this.pos.x, this.pos.y, cell); // Draw square to canvas
  }

  reset () {
    this.pos = this.getPosition();
  }

  getPosition () {
    return createVector(floor(random(canvasSize/2)), floor(random(canvasSize/2)));
  }
}