function calcularValor(){

  var inProduto = document.getElementById("inProduto")
  var inPreco = document.getElementById("inPreco")
  var outProduto = document.getElementById("outProduto")
  var outPreco = document.getElementById("outPreco")

  var produto = inProduto.value
  var preco = Number(inPreco.value)

  var terceiro = preco / 2
  var promocao = (preco * 2) + terceiro

  outProduto.textContent = produto + " Promoção Leve 3 por R$ " + promocao.toFixed(2)
  outPreco.textContent = "O 3º produto custa apnas R$ " + terceiro.toFixed(2)
}

var btPromocao = document.getElementById("btPromocao")
btPromocao.addEventListener("click", calcularValor)