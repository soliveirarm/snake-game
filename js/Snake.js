class Snake {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.body = [];
  }

  draw(ctx) {
    ctx.fillStyle = "#fada06";
    ctx.fillRect(this.x, this.y, boxSize, boxSize);
  }

  move(e) {
    let pressedKey = e.key;

    if (
      (pressedKey === "ArrowUp" && this.speedY != 1) ||
      (pressedKey === "w" && this.speedY != 1)
    ) {
      this.speedX = 0;
      this.speedY = -1;
    } else if (pressedKey === "ArrowDown" && this.speedY != -1) {
      this.speedX = 0;
      this.speedY = 1;
    } else if (pressedKey === "ArrowLeft" && this.speedX != 1) {
      this.speedX = -1;
      this.speedY = 0;
    } else if (pressedKey === "ArrowRight" && this.speedX != -1) {
      this.speedX = 1;
      this.speedY = 0;
    }
  }
}
