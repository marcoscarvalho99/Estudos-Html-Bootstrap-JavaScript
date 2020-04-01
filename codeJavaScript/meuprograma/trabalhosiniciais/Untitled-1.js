// function calcular() {
//     let peso = document.getElementById("peso").value;
//     let altura = document.getElementById("altura").value;

//     console.log(peso, altura);

//     let imc = peso / (altura * altura);

//     let resultado = document.getElementById("resultado");

//     resultado.innerText = imc;
// }

let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
//context.fillStyle = "yellow";
//context.fillRect(5, 5, 190, 190);

context.beginPath();
context.strokeStyle = "rbga(200,0,0,0.5";
context.moveTo(0, 0);
context.lineTo(200, 100);
context.closePath();
context.stroke();

context.beginPath();
context.strokeStyle = "rbg(100,0,0)";
context.moveTo(100, 200);
context.lineTo(40, 700);
context.closePath();
context.stroke();

context.beginPath();
context.strokeStyle = "green";
context.moveTo(130, 190);
context.lineTo(200, 100);
context.closePath();
context.stroke();

