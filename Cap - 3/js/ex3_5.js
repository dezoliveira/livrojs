function calculaRaiz(){
  var inNumero = document.getElementById('inNumero')
  var outRaiz = document.getElementById('outRaiz')

  var numero = Number(inNumero.value)

  if (numero == "" || isNaN(numero)){
    alert("Digite um número válido!")
    inNumero.focus()
    return
  }

  var raiz = Math.sqrt(numero)

  if(raiz == Math.floor(raiz)){
    outRaiz.textContent = "Raiz: " + raiz
  }else{
    outRaiz.textContent = "Não há raiz exata para esse número!!"
  }
}

var btRaiz = document.getElementById('btRaiz')
btRaiz.addEventListener('click', calculaRaiz)