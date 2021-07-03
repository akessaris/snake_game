class Scoreboard {
  constructor() {
    this.score = 0;
  }

  draw () {
    fill('white');
    textSize(18);
    text(`Score: ${this.score}`, canvasSize*0.83, canvasSize*0.05);
  }

  addPoint () {
    this.score++;
  }

  reset () {
    this.score = 0;
  }
}