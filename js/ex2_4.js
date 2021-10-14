function calcularPreco(){
  //Referência aos elementos da página
  var inQuilo = document.getElementById("inQuilo")
  var inConsumo = document.getElementById("inConsumo")
  var outValor = document.getElementById("outValor")

  //Obter o conteúdo dos elementos
  var quilo = Number (inQuilo.value)
  var consumo = Number(inConsumo.value)

  //Calcula o valor a ser pago
  var valor = (quilo / 1000) * consumo

  //Altera o conteúdo da resposta
  outValor.textContent = "Valor a pagar R$: " + valor.toFixed(2)
}

  //Coleta o disparo do evento do botão
  btCalcular = document.getElementById("btCalcular")
  btCalcular.addEventListener("click", calcularPreco)