function calculaParImpar(){
let inNumero = document.getElementById('inNumero')
let outResposta = document.getElementById('outResposta')

let numero = Number(inNumero.value)

  if (isNaN(numero)){
    alert('Digite um número válido')
    inNumero.focus()
    return
  }

  if (numero % 2 === 0){
    outResposta.textContent = "O Nº " + numero + " é par!"
  } else{
    outResposta.textContent = "O Nº " + numero + " é impar!"
  }
}

let btVerifica = document.getElementById('btVerifica')
btVerifica.addEventListener('click', calculaParImpar)