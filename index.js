let objetivos = []
let nomeDoBanco = 'okr/';
let dialogo = document.querySelector('dialog')
let inputDoNomeDoObjetivo = document.getElementById('nomeDoObjetivo')
let inputDoQuarter = document.getElementById('quarter')
let inputDeDescricaoDoObjetivo = document.getElementById('descricaoDoObjetivo')
let kr = document.getElementById('key1')
let valorInicialDaKr1 = document.getElementById('valorInicial')
let valorFinalDaKr1 = document.getElementById('valorFinal')

obterOkrs();

function obterOkrs() {
  firebase.database().ref(nomeDoBanco).once('value').then((snapshot) => {
    quarters = (snapshot.val() && snapshot.val());
  }).then(() => {
    criarListaDeOkrs();
    console.log
  })
}

function criarListaDeOkrs() {
  new Vue({
    el: '#itemObjetivo',
    data: {
      quartersDoUsuario: quarters
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

// //

function criarObjetivo() {
  let idObjetivo;
  if (quarters) { idObjetivo = quarters[inputDoQuarter.value].objetivos.length } else { idObjetivo = 0 }

  firebase.database().ref(nomeDoBanco + inputDoQuarter.value + '/' + 'objetivos/' + idObjetivo).set({
    nome: inputDoNomeDoObjetivo.value,
    descricao: inputDeDescricaoDoObjetivo.value,
    keyResults: [
      { nome: kr.value, valorAtual: valorInicialDaKr1.value, valorInicial: valorInicialDaKr1.value, valorFinal: valorFinalDaKr1.value },]
  }
  ).then(() => {
    obterOkrs();
    dialogo.close();
    location.reload()
  })
}

