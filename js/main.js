// declarando variaveis
const boxSize = 25;
const squareSize = 24;
const canvas = document.querySelector("#canvas");
// negocio que desenha na tela
const ctx = canvas.getContext("2d");

let randomPosition = Math.floor(Math.random() * squareSize) * boxSize;

// posicao inical da cobra
let snake = new Snake(boxSize * 5, boxSize * 5);
// a comida vai aparecer em lugares aleatorios
let food = new Food(randomPosition, randomPosition);

function updateFood() {
  let newRandomPosition = Math.floor(Math.random() * squareSize) * boxSize;
  food.x = newRandomPosition;
  food.y = newRandomPosition;
}

function loop() {
  // pintando o canvas
  ctx.fillStyle = "#192a53";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // ação que ocorre quando a cobra fica na mesma posição que a comida
  if (snake.x == food.x && snake.y == food.y) {
    updateFood();
    updateScore();
    snake.body.push([snake.x, snake.y]);
  }

  for (let i = snake.body.length - 1; i > 0; i--) {
    snake.body[i] = snake.body[i - 1];
  }

  if (snake.body.length) {
    snake.body[0] = [snake.x, snake.y];
  }

  // desenhando o personagem num local fixo
  snake.x += snake.speedX * boxSize;
  snake.y += snake.speedY * boxSize;
  food.drawSprite(ctx);
  snake.draw(ctx);

  for (let i = 0; i < snake.body.length; i++) {
    ctx.fillRect(snake.body[i][0], snake.body[i][1], boxSize, boxSize);
  }
}

document.addEventListener("keyup", (e) => {
  snake.move(e);
});

let score = document.querySelector("#score");
let scoreCount = 0;

function updateScore() {
  scoreCount++;
  score.innerText = scoreCount;
}

// A função fica rodando em loop a cada 100 milisegundos
setInterval(loop, 90);
