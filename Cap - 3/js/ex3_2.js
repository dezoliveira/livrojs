function calculaPeso(){
  var inNome = document.getElementById("inNome")
  var rbMasculino = document.getElementById("rbMasculino")
  var rbFeminino = document.getElementById("rbFeminino")
  var inAltura = document.getElementById("inAltura")
  var outResposta = document.getElementById("outResposta")

  var nome = inNome.value
  var masculino = rbMasculino.checked
  var feminino = rbFeminino.checked
  var altura = Number(inAltura.value)

  //Verifica se o nome foi preenchido e o sexo foi escolhido
  if (nome == "" || (masculino == false && feminino == false)){
    alert("Por favirm informe o nome e selecione o sexo...")
    inNome.focus()
    return
  }

  //Verifica se a altura foi vazia ou se não foi informado um número (Nan)
  if(altura == 0 || isNaN(altura)){
    alert("Por favor, informe a altura correta")
    inAltura.focus()
    return
  }

  //Se masculino, (é true)
  if(masculino){
    var peso = 22 * Math.pow(altura, 2) //Math.pow eleva ao quadrado
  }else{
    var peso = 21 * Math.pow(altura, 2)
  }

  outResposta.textContent = nome + ": Seu peso ideal é " + peso.toFixed(3) + " kg"
}

var btCalcular = document.getElementById("btCalcular")
btCalcular.addEventListener("click", calculaPeso) 

function limparCampos(){
  document.getElementById("inNome").value = ""
  document.getElementById("rbMasculino").checked = false
  document.getElementById("rbFeminino").checked = false
  document.getElementById("inAltura").value = ""
  document.getElementById("outResposta").textContent = ""
  document.getElementById("inNome").focus()
}

/*
Outro jeito
function limparCampos(){
  location.reload()
  document.getElementById("inNome").focus()
}
*/

var btLimpar = document.getElementById("btLimpar")
btLimpar.addEventListener("click", limparCampos)
