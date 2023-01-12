var entrada = document.getElementById("entrada");
var botaoEnviar = document.getElementById("enviar");
var saida = document.getElementById("saida");

function copiarEntrada(){
    saida.textContent = entrada.value;
}

botaoEnviar.addEventListener("click", copiarEntrada);     