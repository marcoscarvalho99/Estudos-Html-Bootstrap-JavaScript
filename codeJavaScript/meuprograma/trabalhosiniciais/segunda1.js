let canvas = document.getElementById("screen");
let ctx = canvas.getContext("2d");

const TILE = 16;
let i = 0;
let direcao = "RIGHT";

let fruta = {
    x: Math.floor((Math.random() * 320) / TILE),
    y: Math.floor((Math.random() * 320) / TILE)
};

let snake = [];
snake[0] =
    {
        x=0,
        y=0
    };
function draw() {

    ctx.clearRect(0, 0, 320, 320);
    ctx.fillStyle = "red";
    ctx.fillRect(fruta.x * TILE, fruta.y * TILE, TILE, TILE);
    ctx.fillStyle = "green";
    for (let i = 0; i < snake.length; i++) {
        ctx.fillRect(snakehead.x * TILE, snakehead.y * TILE, TILE, TILE);
    }
    let snakehead = {
        snake[0].x,
        snake[0].y
    };

    if (direcao == "LEFT") snakehead.x--;
    if (direcao == "RIGHT") snakehead.x++;
    if (direcao == "UP") snakehead.y--;
    if (direcao == "DOWN") snakehead.y++;

    if (snakehead.x * TILE > 320 - TILE) {
        snakehead.x = 0;
    }
    if (snakehead.y * TILE > 320 - TILE) {
        snakehead.y = 0;
    }
    if (snakehead.x < 0) {
        snakehead.x = 320 / TILE - 1;
    }
    if (snakehead.y < 0) {
        snakehead.y = 320 / TILE - 1;
    }
    snake.unshift(snakehead);
    snake.pop();
    if (snakehead.x == fruta.x && snakehead.y == fruta.y) {
        fruta = {
            x: Math.floor((Math.random() * 320) / TILE),
            y: Math.floor((Math.random() * 320) / TILE)
        }
        else {
            snake.pop();
        }

    };
}




setInterval(draw, 150);

document.addEventListener("keydown", movimento);

function movimento(event) {
    if (event.keyCode == 37 && direcao !== "RIGTH") {
        direcao = "LEFT";
    }
    else if (event.keyCode == 38 && direcao !== "DOWN") {
        direcao = "UP";
    }
    else if (event.keyCode == 39 && direcao !== "LEFT") {
        direcao = "RIGHT";
    }
    else if (event.keyCode == 40 && direcao !== "UP") {
        direcao = "DOWN";
    }

}