function repetirFruta(){
  let inFruta = document.getElementById('inFruta')
  let inNumero = document.getElementById('inNumero')

  let fruta = inFruta.value
  let num = Number(inNumero.value)
  
  if(fruta == "" || num == 0 || isNaN(num)){
    alert('Digite valores válidos!')
    inFruta.focus()
    return
  } 
  
  let list = ""
  for(let i=1; i < num; i++){
    if(i != num){
      list = list + fruta + ' * '
    }else{
      list = list + fruta
    }
  }

  list = list + fruta

  outFruta.textContent = list
}

let btRepetir = document.getElementById('btRepetir')
btRepetir.addEventListener('click', repetirFruta)
