var setaDireita = window.document.getElementById("setaDireita")
var Bruna = window.document.getElementById("Bruna")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var setaEsquerda = window.document.getElementById("setaEsquerda")

function RolarParaDireita() {
    Bruna.style = "display:none"
    Leonardo.style = "display:flex"
    Samantha.style = "display:flex"
    setaDireita.style ="display:none;" 
    setaEsquerda.style ="display:flex;"

}

function RolarParaEsquerda() {
    Bruna.style = "display:flex"
    Leonardo.style = "display:flex"
    Samantha.style = "display:none"
    setaDireita.style ="display:flex"
    setaEsquerda.style ="display:none"

}

