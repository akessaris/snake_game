class Scoreboard {
  constructor() {
    this.score = 0;
    this.highScore = 0;
  }

  draw () {
    fill('white');
    textSize(18);
    textAlign('left');
    text(`Score: ${this.score}`, canvasSize*0.83, canvasSize*0.05);
  }

  addPoint () {
    this.score++;
  }

  setHighScore () {
    if (this.score > this.highScore) this.highScore = this.score;
  }

  reset () {
    this.score = 0;
  }
}