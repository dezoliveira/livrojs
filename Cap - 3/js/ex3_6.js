function calculaNotas(){

  var inDinheiro = document.getElementById('inDinheiro')
  var outNotasCem = document.getElementById('outNotasCem')
  var outNotasCinquenta = document.getElementById('outNotasCinquenta')
  var outNotasDez = document.getElementById('outNotasDez')

  //Limpa os valores caso contenham algum tipo de texto
  outNotasCem.textContent = ""
  outNotasCinquenta.textContent = ""
  outNotasDez.textContent = ""

  var saque = Number(inDinheiro.value)

  if(saque == 0 || isNaN(saque)){
    alert('Digite um número válido!')
    inDinheiro.focus()
    return
  }

  //verifica se o saque não é multiplo de 10
  if(saque % 10 != 0){
    alert("Valor inválido para notas disponíveis (R$ 10, 50, 100)")
    inDinheiro.focus()
    return
  }

  //calcula notas de 100,50 e 10
  var notasCem = Math.floor(saque / 100)
  var resto = saque % 100
  var notasCinquenta = Math.floor(resto / 50)
  resto = resto % 50
  var notasDez = Math.floor(resto / 10)

  //exibe as notas apenas se houver
  if(notasCem > 0){
    outNotasCem.textContent = "Notas de R$ 100: " + notasCem
  }

  if(notasCinquenta > 0){
    outNotasCinquenta.textContent = "Notas de R$ 50: " + notasCinquenta
  }

  if(notasDez > 0){
    outNotasDez.textContent = "Notas de R$ 10: " + notasDez
  }

}

var btSaque = document.getElementById('btSaque')
btSaque.addEventListener('click', calculaNotas)