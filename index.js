let objetivos = []
let nomeDoBanco = 'okr/';
let objetivo;

obterObjetivos();
function obterObjetivos() {
  firebase.database().ref(nomeDoBanco).once('value').then((snapshot) => {
    objetivos = (snapshot.val() && snapshot.val());
  }).then(() => {
    objetivo = objetivos[1].nome;
    new Vue({
      el: '#nomeDoObjetivo',
      data: { nomeDoObjetivo: objetivo },
    });

    new Vue({
      el: '#example-1',
      data: {
        keyResults: objetivos[1].keyResults
      }
    })
  })
}

function fazerCheckin() {
  var valorAtualDaKR1 = prompt("Qual é o valor do Checkin?", objetivos[1].keyResults[0].valorAtual)

  valorAtualDaKR1;
  firebase.database().ref('okr/' + '1/' + 'keyResults/' + 0).update({
    valorAtual: valorAtualDaKR1
  }).then(() => {
   location.reload( forceGet )
  })
}

