let objetivos = []
let nomeDoBanco = 'quarters/'
let dialogo = document.querySelector('dialog')

obterOkrs();

function obterOkrs() {
  firebase.database().ref('/').once('value').then((snapshot) => {
    okr = (snapshot.val() && snapshot.val());
  }).then(() => {
    criarListaDeOkrs();
    console.log(okr.quarters)
  })
}

function criarListaDeOkrs() {
  new Vue({
    el: '#itemObjetivo',
    data: {
      quartersDoUsuario: okr
    }
  })
}

// function fazerCheckin(elemento) {
//   obterOkrs();
//   console.log(elemento)
//   var valorAtualDaKR1 = prompt("Qual é o valor do Checkin?", quarters[0].objetivos[0].keyResults[elemento.id].valorAtual)

//   firebase.database().ref(nomeDoBanco + '0/' + 'objetivos/' + '0/' + 'keyResults/' + elemento.id).update({
//     valorAtual: valorAtualDaKR1
//   }).then(() => {
//     location.reload()
//   })
// }

function criarObjetivo() {
  let inputDoNomeDoObjetivo = document.getElementById('nomeDoObjetivo')
  let inputDoQuarter = document.getElementById('quarter')
  let inputDeDescricaoDoObjetivo = document.getElementById('descricaoDoObjetivo')
  let inputKr = document.getElementById('key1')
  let valorInicialDaKr1 = document.getElementById('valorInicial')
  let valorFinalDaKr1 = document.getElementById('valorFinal')
  let idObjetivo

  if (okr[inputDoQuarter.value]) {
    idObjetivo = okr[inputDoQuarter.value].objetivos.length;
  } else { idObjetivo = 1 }

  var newPostRef = firebase.database().ref(nomeDoBanco + inputDoQuarter.value + '/' + 'objetivos/' + idObjetivo);

  newPostRef.set({
    nome: inputDoNomeDoObjetivo.value,
    descricao: inputDeDescricaoDoObjetivo.value,
  }).then(() => {
    obterOkrs();
    dialogo.close();
    location.reload()
  });
}
