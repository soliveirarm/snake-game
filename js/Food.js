class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = new Image();
    this.sprite.src = "apple.png";
  }

  drawSprite(ctx) {
    this.width = 25;
    this.height = 25;
    ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
  }
}
