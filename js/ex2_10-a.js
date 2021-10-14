function calcularPromocao(){
  //Referencia aos elementos da página
  var inMedicamento = document.getElementById("inMedicamento")
  var inPreco = document.getElementById("inPreco")
  var outMedicamento = document.getElementById("outMedicamento")
  var outPromocao = document.getElementById("outPromocao")

  //Atribuição dos valores de entrada
  var medicamento = inMedicamento.value
  var preco = Number(inPreco.value)

  //Calcula o valor de entrada
  var promocao = Math.floor(preco) * 2

  //Atrubição dos valores de saída
  outMedicamento.textContent = "Promoção de " + medicamento 
  outPromocao.textContent = "Leve 2 por apenas R$: " + promocao.toFixed(2)
}

//Adicionando evento aos botões
var btPromocao = document.getElementById("btPromocao")
btPromocao.addEventListener("click", calcularPromocao)