function mostrarPromocao(){
  //Cria referência pra os elementos da página
  var inVeiculo = document.getElementById("inVeiculo")
  var inPreco = document.getElementById("inPreco")
  var outVeiculo = document.getElementById("outVeiculo")
  var outEntrada = document.getElementById("outEntrada")
  var outParcela = document.getElementById("outParcela")

  //Obtem o conteúdo dos valor de entrada
  var veiculo = inVeiculo.value
  var preco = Number(inPreco.value)

  //Calcula o valor de entrada e das parcelas
  var entrada = preco * 0.50
  var parcela = (preco * 0.50) / 12

  //Altera o conteúdo dos parágrafos
  outVeiculo.textContent = "Promoção: " + veiculo
  outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2)
  outParcela.textContent = "+ 12x de R$: " + parcela.toFixed(2);
}

  //Cria o evento do botão
  var btVerPromocao = document.getElementById("btVerPromocao")
  btVerPromocao.addEventListener("click", mostrarPromocao)