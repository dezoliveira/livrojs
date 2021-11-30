let total = 0

function criaChinchilas(){
  let inNumero = document.getElementById('inNumero')
  let inAnos = document.getElementById('inAnos')
  let outPrevisao = document.getElementById('outPrevisao')
  
  let numero = Number(inNumero.value)
  let anos = Number(inAnos.value)

  if(numero < 2 || anos == 0 || isNaN(numero) || isNaN(anos)){
    alert('Digite um número válido!')
    inNumero.focus()
    return
  }  
  
  let resposta = ""
  let total = numero

  for(let i=1; i <= anos; i++){

    resposta = resposta + i + "º Ano " + total + " Chinchilas \n"
    total = total * 3
  }
  
  outPrevisao.textContent = resposta
}

let btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', criaChinchilas)
