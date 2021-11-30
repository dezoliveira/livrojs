function preencherEstrelas(){
  var inNumero = document.getElementById('inNumero') 
  var outResultado = document.getElementById('outResultado')

  var numero = Number(inNumero.value)

  if(numero == 0 || isNaN(numero)){
    alert('DIgite um número válido')
    inNumero.focus()
    return
  }

  var estrelas = ""

  for(var i = 1; i <= numero; i++){
    if(i % 2 == 1){
      estrelas = estrelas + "*"
    }else{
      estrelas = estrelas + "-"
    }
  }

  outResultado.textContent = estrelas

}

  var btPreencher = document.getElementById('btPreencher')
  btPreencher.addEventListener('click', preencherEstrelas)
