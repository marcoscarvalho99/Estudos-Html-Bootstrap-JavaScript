let canvas = document.getElementById("tela");
let ctx = canvas.getContext("2d");

const imagem = new Image();
const altura = 32;
const largura = 16;
imagem.src = "character.png";
let estado = 0;
let walkx = 150;
let walky = 0;
let direcao;

//jogo do boneco;
function draw() {
    ctx.clearRect(0, 0, 300, 300);

    ctx.drawImage(imagem,
        estado * largura,
        0,
        largura,
        altura,
        walkx,
        walky,
        largura,
        altura);

    estado++;
    if (estado == 4) {
        estado = 0;
    }

    if (direcao == "RIGHT") walkx += 5;
    if (direcao == "LEFT") walkx -= 5;
    if (direcao == "UP") walky -= 5;

    // if (direcao == walk + 150) {
    //     kalky -= 25;
    //}
    if (direcao == "DOWN") walky += 5;
}
let rungame = setInterval(draw, 140);


document.addEventListener("keydown", movimento);

function movimento(event) {
    if (event.keyCode == 37) {
        direcao = "LEFT";
    }
    else if (event.keyCode == 38) {
        direcao = "UP";
    }
    else if (event.keyCode == 39) {
        direcao = "RIGHT";
    }
    else if (event.keyCode == 40) {
        direcao = "DOWN";
    }

}