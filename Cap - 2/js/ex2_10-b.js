function calcularValor(){
  var inValor = document.getElementById("inValor")
  var inTempo = document.getElementById("inTempo")
  var outValor = document.getElementById("outValor")

  valor = Number(inValor.value)
  tempo = Number(inTempo.value)

  var pagar = Math.ceil(tempo / 15) * valor;

  outValor.textContent = "Valor a Pagar R$: " + pagar.toFixed(2)
}

var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calcularValor)