function converterDuracao(){
  //Cria referência para os elementos da página
  var inTitulo = document.getElementById("inTitulo")
  var inDuracao = document.getElementById("inDuracao")
  var outTitulo = document.getElementById("outTitulo")
  var outResposta = document.getElementById("outResposta")

  //Obtem conteúdos dos campos de entrada
  var titulo = inTitulo.value
  var duracao = Number(inDuracao.value)

  //Arredonda para baixo o resto da divisão
  var horas = Math.floor(duracao / 60)
  //Obtem o resto da divisão entre números
  var minutos = duracao % 60
  //Altera o conteúdo dos parágrafos de resposta
  outTitulo.textContent = titulo
  outResposta.textContent = horas + " hora(s) e " + minutos + " minutos(s)"
}

//Cria uma referência ao elemento btConverter (botao)
var btConverter = document.getElementById("btConverter")
//Registra um evento associado ao botão, para carregar a function
btConverter.addEventListener("click", converterDuracao)



