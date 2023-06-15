// declarando variáveis
const boxSize = 20;
const squareSize = 25;

const canvas = document.querySelector("#canvas");
canvas.width = boxSize * squareSize;
canvas.height = boxSize * squareSize;
// negócio que desenha na tela
const ctx = canvas.getContext("2d");

let randomPosition = Math.floor(Math.random() * squareSize) * boxSize;

// INSTANCIANDO CLASSES

// posicao inical da cobra
let snake = new Snake(boxSize * 5, boxSize * 5);
// a comida vai aparecer em lugares aleatorios
let food = new Food(randomPosition, randomPosition);

// VARIÁVEIS RELACIONADAS AO JOGO
let score = document.querySelector("#score");
let scoreCount = 0;
let isGameOver = false;
const restartMessage = document.querySelector("#restart");

// FUNÇÕES RELACIONADAS AO JOGO

// muda a comida de posição
function updateFood() {
  let newRandomPosition = Math.floor(Math.random() * squareSize) * boxSize;
  food.x = newRandomPosition;
  food.y = newRandomPosition;
}

// adiciona mais um ao scoreCount e mostra no HTML
function updateScore() {
  scoreCount++;
  score.innerText = scoreCount;
}

// função que mostra a mensagem para recomeçar, para o loop e muda o valor do booleano
function gameOver() {
  restartMessage.classList.toggle("show");
  clearInterval(interval);
  isGameOver = true;
}

// função que dá reload na página
function restart() {
  window.location.reload();
}

// addEventListener que roda a função restart quando o usuário pressiona a tecla r
document.addEventListener("keypress", (e) => {
  if (e.key === "r" && isGameOver == true) {
    restart();
  }
});

function loop() {
  // pintando o canvas
  ctx.fillStyle = "#192a53";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  /* ação que ocorre quando a cobra fica na mesma posição que a comida
    1. a comida muda de lugar
    2. o valor do score muda
    3. a cobra aumenta de tamanho
  */
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

    // se a cabeça da cobra e alguma parte do corpo estiverem na mesma posição, o jogo acaba
    if (snake.x == snake.body[i][0] && snake.y == snake.body[i][1]) {
      gameOver();
    }
  }

  if (
    snake.x < 0 ||
    snake.y < 0 ||
    snake.x > squareSize * boxSize ||
    snake.y > squareSize * boxSize
  ) {
    gameOver();
  }
}

// addEventListener que roda o método move da classe Snake

document.addEventListener("keyup", (e) => {
  snake.move(e);
});

document.addEventListener("keydown", (e) => {
  snake.move(e);
});

// A função fica rodando em loop a cada 90 milissegundos
let interval = setInterval(loop, 90);
