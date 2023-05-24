var btnEncriptar = document.querySelector(".btn-encriptar ");
var btnDesencriptar = document.querySelector(".btn-desencriptar");
var diamante = document.querySelector(".contenedorDiamante ");
var contenedor = document.querySelector(".contenedorParrafo ");
var resultado = document.querySelector(".textoResueltado");

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptartexto(cajatexto);

}

function desencriptar () {
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto() {
    var cajatexto = document.querySelector(".cajaTexto")
    return cajatexto.value
}

function ocultarAdelante () {
    diamante.classList.add("ocultar");
    contenedor.classList.add("ocultar");
}

function encriptartexto(mensaje) {
    var texto = mensaje;
    var textofinal ="";

    for (var i = 0; i < texto.length; i++){
        if(texto[i] == "a") {
            textofinal =textofinal + "ai"
        }
        else if (texto[i] == "e"){
            textofinal = textofinal + "enter"
        }
        else if (texto[i] == "i"){
            textofinal = textofinal + "imes"
        }
        else if (texto[i] == "o") {
            textofinal = textofinal + "ober"
        }
        else if (texto[i] == "u"){
            textofinal= textofinal + "ufat"
        }
        else {
            textofinal=textofinal + texto[i];
        }

    }
    return textofinal;

}

function desencriptarTexto (mensaje) {
    var texto = mensaje;
    var textofinal ="";

    for (var i = 0; i < texto.length; i++){
        if(texto[i] == "a") {
            textofinal =textofinal + "a"
            i = i+1;
        }
        else if (texto[i] == "e"){
            textofinal = textofinal + "e"
            i = i+4;
        }
        else if (texto[i] == "i"){
            textofinal = textofinal + "i"
            i = i+3;
        }
        else if (texto[i] == "o") {
            textofinal = textofinal + "o"
            i = i+3;
        }
        else if (texto[i] == "u"){
            textofinal= textofinal + "u"
            i = i+3;
        }
        else {
            textofinal=textofinal + texto[i];
        }
    
    }
    return textofinal;

}

const btncopiar = document.querySelector(".btn-copiar");
    btncopiar.addEventListener("click", copiar = () =>{
        var contenido = document.querySelector(".textoResueltado").textContent;
        navigator.clipboard.writeText(contenido);
        console.log("hola");
    })
