function renderStars(){
  let inNumero = document.getElementById("inNumero")
  let outEstrelas = document.getElementById("outEstrelas")
  
  let numero = Number(inNumero.value)

  if (numero == 0 || isNaN(numero)){
    alert('Insira um número válido!')
    inNumero.focus()
    return
  }

  let estrelas = ''

  for(let i = 1; i <= numero; i++){
    for (let j = 1; j <= i; j++){
      estrelas = estrelas + '*'
    }

    estrelas = estrelas + '\n'
  }

  outEstrelas.textContent = estrelas
}

let btCriar = document.getElementById('btCriar')
btCriar.addEventListener('click', renderStars)
