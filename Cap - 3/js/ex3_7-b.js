function velocidadePermitida(){
  let inVelocidadePermitida = document.getElementById('inVelocidadePermitida')
  let inVelocidadeCondutor = document.getElementById('inVelocidadeCondutor')
  let outResposta = document.getElementById('outResposta')

  let velocidadePermitida = Number(inVelocidadePermitida.value)
  let velocidadeCondutor = Number(inVelocidadeCondutor.value)

  if(velocidadePermitida == '' || isNaN(velocidadePermitida) ||
  velocidadeCondutor == '' || isNaN(velocidadeCondutor)){
    alert('Informe as velocidades corretamente')
    inVelocidadePermitida.focus()
    return
  }

  if(velocidadeCondutor <= velocidadePermitida){
    outResposta.textContent = "Situação: Sem Multa!"
  }else{
    let maisVinte = velocidadePermitida * 1.20
    if (velocidadeCondutor <= maisVinte){
      outResposta.textContent = "Situação: Multa Leve"
    }else{
      outResposta.textContent = "Situação: Multa Grave"
    }
  }
}

let btVerifica = document.getElementById('btVerifica')
btVerifica.addEventListener('click', velocidadePermitida)