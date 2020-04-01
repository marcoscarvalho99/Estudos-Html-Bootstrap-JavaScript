//let titulo = document.getElementById("titulo");



function testetamanho() {
    let formulario = document.getElementById("nome");
    let textoformulario = formulario.value;

    if (textoformulario.length < 5) {
        //console.log("texto pequeno");
        formulario.className += " erro";
    } else {
        // console.log("texto grande");
        formulario.className = "";
    }
}