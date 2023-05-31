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
  ctx.fillStyle = "hsl(248, 100%, 70%)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (snake.x == food.x && snake.y == food.y) {
    updateFood();
    updateScore();
  }
  // desenhando o personagem num local fixo
  snake.x += snake.speedX * boxSize;
  snake.y += snake.speedY * boxSize;
  food.drawSprite(ctx);
  snake.draw(ctx);
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
