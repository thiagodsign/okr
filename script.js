let objetivos = []
let dialogo = document.querySelector('dialog')
let nomeDoBanco = 'okr/';
let inputDoNomeDoObjetivo = document.getElementById('nomeDoObjetivo')
let inputDeDescricaoDoObjetivo = document.getElementById('descricaoDoObjetivo')
let valorInicialDaKr1 = document.getElementById('valorInicial')
let valorFinalDaKr1 = document.getElementById('valorFinal')

document.addEventListener("DOMContentLoaded", () => {
  obterObjetivos();
});

function obterObjetivos() {
  firebase.database().ref(nomeDoBanco).once('value').then((snapshot) => {
    objetivos = (snapshot.val() && snapshot.val());
  }).then(() => {
    console.log(objetivos[1].keyResults[0].valorAtual + 'px')
    document.querySelector('[name=nomeDoObjetivo]').innerText = objetivos[1].nome
    document.querySelector('[name=kr1Nome]').innerText = objetivos[1].keyResults[0].nome

    let valorEmPorcent = (objetivos[1].keyResults[0].valorAtual - objetivos[1].keyResults[0].valorInicial) / (objetivos[1].keyResults[0].valorFinal - objetivos[1].keyResults[0].valorInicial) * 100;

    document.querySelector('[name=reguakr1]').style.width = valorEmPorcent + '%';
    document.querySelector('[name=valorkr1]').style.left = valorEmPorcent + '%';
    document.querySelector('[name=valorkr1]').innerText = parseFloat(valorEmPorcent.toFixed(2)) + '%';
    document.querySelector('[name=valorInicialkr1]').innerText = objetivos[1].keyResults[0].valorInicial;
    document.querySelector('[name=valorFinalkr1]').innerText = objetivos[1].keyResults[0].valorFinal;
  });
}

function criarObjetivo() {
  let idDoItem;

  if (!objetivos) {
    idDoItem = 1;
  } else idDoItem = objetivos.length;

  firebase.database().ref(nomeDoBanco + idDoItem).set({
    id: idDoItem,
    nome: inputDoNomeDoObjetivo.value,
    descricao: inputDeDescricaoDoObjetivo.value,
    keyResults: [
      { nome: 'Titulo', descricao: 'Descrição', valorAtual: valorInicialDaKr1.value, valorInicial: valorInicialDaKr1.value, valorFinal: valorFinalDaKr1.value },
      { nome: 'Titulo', descricao: 'Descrição', valorAtual: 15, valorInicial: 15, valorFinal: 50 }
    ]
  }).then(() => {
    obterObjetivos();
    dialogo.close();
  })

}

function fazerCheckin() {
  var valorAtualDaKR1 = prompt("Qual é o valor do Checkin?", objetivos[1].keyResults[0].valorAtual)

  valorAtualDaKR1;
  firebase.database().ref('okr/' + '1/' + 'keyResults/' + 0).update({
    valorAtual: valorAtualDaKR1
  }).then(() => {
    obterObjetivos();
  })
}
