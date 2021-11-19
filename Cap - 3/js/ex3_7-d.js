function calculaLado(){
  var inLadoA = document.getElementById('inLadoA') 
  var inLadoB = document.getElementById('inLadoB')
  var inLadoC = document.getElementById('inLadoC')
  var outLados = document.getElementById('outLados')
  var outTipo = document.getElementById('outTipo')

  var A = Number(inLadoA.value)
  var B = Number(inLadoB.value)
  var C = Number(inLadoC.value)

  outTipo.textContent = ""
  outLados.textContent = ""

  if(A == 0 || B == 0 || C == 0 || isNaN(A) || isNaN(B) || isNaN(C)){
    alert('Digite um número válido!')
    inLadoA.focus()
    return
  }
  
  if(A >  B + C || B > A + C || C > A + B){
    outLados.textContent = "Lados não podem formar um triangulo"
  }else{
    outLados.textContent = "Lados podem formar um triangulo"

    if (A == B && A == C){
      outTipo.textContent = "Tipo: Equilátero"
    }else if (A == B || A == C || B == C){
      outTipo.textContent = "Tipo: Isósceles"
    }else{
      outTipo.textContent = "Tipo: Escaleno"
    }
  
  }
}

var btVerifica = document.getElementById('btVerifica')
btVerifica.addEventListener("click", calculaLado)
