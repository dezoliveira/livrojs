var pacientes = []

function adicionarPaciente(){
  let inPaciente = document.getElementById('inPaciente')
  let outLista = document.getElementById('outLista')

  var nome = inPaciente.value

  if (nome == ''){
    alert('Digite um nome!')
    inPaciente.focus()
    return
  }

  pacientes.push(nome)

  let lista = ''

  for(i = 0; i < pacientes.length; i++){
    lista = lista + (i + 1) + ". " + pacientes[i] + '\n'
  }

  outLista.textContent = lista
  inPaciente.value = ''
  inPaciente.focus()
}

function adicionarPacienteUrgencia(){
  let inPaciente = document.getElementById('inPaciente')
  let outLista = document.getElementById('outLista')

  var nome = inPaciente.value

  if (nome == ''){
    alert('Digite um nome!')
    inPaciente.focus()
    return
  }

  pacientes.unshift(nome)

  let lista = ''

  for(i = 0; i < pacientes.length; i++){
    lista = lista + (i + 1) + ". " + pacientes[i] + '\n'
  }

  outLista.textContent = lista
  inPaciente.value = ''
  inPaciente.focus()
}

function atenderPaciente(){
  if(pacientes.length == 0){
    alert('Não há pacientes na lista de espera!')
    inPaciente.focus()
    return
  }

let outAtendimento = document.getElementById('outAtendimento')
let outLista = document.getElementById('outLista')

let atender = pacientes.shift()
outAtendimento.textContent = atender

let lista = ''

  for (i = 0; i < pacientes.length; i++){
    lista += (i + 1) + '. ' + pacientes[i] + '\n'
  }

  outLista.textContent = lista
}


let btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarPaciente)

let btUrgencia = document.getElementById('btUrgencia')
btUrgencia.addEventListener('click', adicionarPacienteUrgencia)

let btAtender = document.getElementById('btAtender')
btAtender.addEventListener('click', atenderPaciente)

