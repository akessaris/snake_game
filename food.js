class Food {
  constructor() {
    this.pos = this.getPosition();
  }

  draw () {
    fill('green');
    square(this.pos.x, this.pos.y, cell, cell); // Draw square to canvas
  }

  reset () {
    this.pos = this.getPosition();
  }

  getPosition () {
    const x = floor(random(cell, (canvasSize - cell)/cell)) * cell;
    const y = floor(random(cell, (canvasSize - cell)/cell)) * cell;
    return createVector(x, y);
  }
}