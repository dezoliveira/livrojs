/*************************************************************************************
 * FUNCTION QUE PEGA O NOME DIGITADO NO INPUT E O MOSTRA CONCATENANDO-O EM UMA FRASE *
 *************************************************************************************/
function mostrarOla(){
  var nome = document.getElementById("nome").value;
  document.getElementById("resposta").textContent = "Olá " + nome + "," + " esse é um exemplo de DOM";
}

/*****************************
 * EVENTO DE CLIQUE NO BOTÃO *
 *****************************/
var mostrar = document.getElementById("mostrar");
mostrar.addEventListener("click", mostrarOla);



