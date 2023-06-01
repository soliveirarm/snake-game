class Snake {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.body = [];
  }

  draw(ctx) {
    ctx.fillStyle = "#6ff2f2";
    ctx.fillRect(this.x, this.y, boxSize, boxSize);
  }

  move(e) {
    let pressedKey = e.key;

    if (pressedKey === "w" && this.speedY != 1 && this.speedY != 1) {
      this.speedX = 0;
      this.speedY = -1;
    } else if (pressedKey === "s" && this.speedY != -1) {
      this.speedX = 0;
      this.speedY = 1;
    } else if (pressedKey === "a" && this.speedX != 1) {
      this.speedX = -1;
      this.speedY = 0;
    } else if (pressedKey === "d" && this.speedX != -1) {
      this.speedX = 1;
      this.speedY = 0;
    }
  }
}
