class Food {
  constructor() {
    this.pos = createVector(this.getPosition(), this.getPosition());
  }

  draw () {
    fill('green');
    square(this.pos.x, this.pos.y, cell, cell); // Draw square to canvas
  }

  reset (filledPositions) {
    let newPos = createVector(this.getPosition(), this.getPosition());

    // If early in game, just try getting a random position
    if (filledPositions.length < 50) {
      let xExists = filledPositions.some(({ x }) => x === newPos.x);
      let yExists = filledPositions.some(({ y }) => y === newPos.y);

      while (xExists && yExists) {
        if (xExists) newPos.x = this.getPosition();
        if (yExists) newPos.y = this.getPosition();

        xExists = filledPositions.some(({ x }) => x === newPos.x);
        yExists = filledPositions.some(({ y }) => y === newPos.y);
      }
    } else { // If in late game, check unfilled positions
      // TODO
    }

    this.pos = newPos;
  }

  getPosition () {
    return floor(random(1, (canvasSize - cell)/cell)) * cell;
  }
}