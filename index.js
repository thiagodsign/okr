let objetivos = []
let nomeDoBanco = 'okr/';
let dialogo = document.querySelector('dialog')
let inputDoNomeDoObjetivo = document.getElementById('nomeDoObjetivo')
let inputDeDescricaoDoObjetivo = document.getElementById('descricaoDoObjetivo')
let kr = document.getElementById('key1')
let valorInicialDaKr1 = document.getElementById('valorInicial')
let valorFinalDaKr1 = document.getElementById('valorFinal')

obterObjetivos();
function obterObjetivos() {
  firebase.database().ref(nomeDoBanco).once('value').then((snapshot) => {
    objetivos = (snapshot.val() && snapshot.val());
  }).then(() => {
    console.log(objetivos[0].keyResults)
    new Vue({
      el: '#itemObjetivo',
      data: {
        objetivosDoUsuario: objetivos
      }
    })
  })
}

function fazerCheckin(elemento) {
  obterObjetivos();
  console.log(elemento)
  var valorAtualDaKR1 = prompt("Qual é o valor do Checkin?", objetivos[0].keyResults[elemento.id].valorAtual)

  firebase.database().ref(nomeDoBanco + '0/' + 'keyResults/' + elemento.id).update({
    valorAtual: valorAtualDaKR1
  }).then(() => {
    location.reload()
  })
}

//

function criarObjetivo() {
  let idDoItem;

  if (!objetivos) {
    idDoItem = 1;
  } else idDoItem = objetivos.length;

  firebase.database().ref(nomeDoBanco).set(
    [{
      nome: inputDoNomeDoObjetivo.value,
      descricao: inputDeDescricaoDoObjetivo.value,
      keyResults: [
        { nome: kr.value, valorAtual: valorInicialDaKr1.value, valorInicial: valorInicialDaKr1.value, valorFinal: valorFinalDaKr1.value },]
    }]).then(() => {
      obterObjetivos();
      dialogo.close();
    })
}

