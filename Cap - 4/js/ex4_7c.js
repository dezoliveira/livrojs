let list = ''

function verificaNumeroPerfeito(){
  let inNumero = document.getElementById("inNumero")
  let outDivisores = document.getElementById("outDivisores")
  let outPerfeito = document.getElementById("outPerfeito")

  let numero = Number(inNumero.value)

  if (numero == 0 || isNaN(numero)){
    alert("Digite um número válido")
    inNumero.focus()
    return
  }

  outDivisores.textContent = ''
  outPerfeito.textContent = ''
  
  let resposta = ''
  let soma = 0

  for(let i = 2; i <= numero; i++){
    if (numero % i == 0){
      if(i == numero){
        resposta = resposta + ' '
      }else{      
        resposta = resposta + i + ', '
        soma = soma + i
      }
    }
  }

  outDivisores.textContent = "divisores do " + numero + ": " + resposta + "(Soma: " + soma + ")"
  
  if(soma == numero){
    outPerfeito.textContent = numero + " é um Número Perfeito"
  }else{
    outPerfeito.textContent = numero + " Não é um Número Perfeito "
  }

}

let btVerificar = document.getElementById("btVerificar")

btVerificar.addEventListener('click', verificaNumeroPerfeito)
