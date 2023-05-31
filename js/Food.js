class Food {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = new Image();
    this.sprite.src = "sprites/apple.png";
  }

  drawSprite(ctx) {
    this.width = 30;
    this.height = 30;
    ctx.drawImage(this.sprite, this.x, this.y, this.width, this.height);
  }
}
