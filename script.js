let dialogo = document.querySelector('dialog')
let inputDoNomeDoObjetivo = document.getElementById('nomeDoObjetivo')
let inputDeDescricaoDoObjetivo = document.getElementById('descricaoDoObjetivo')
let valorInicialDaKr1 = document.getElementById('valorInicial')
let valorFinalDaKr1 = document.getElementById('valorFinal')

document.addEventListener("DOMContentLoaded", () => {
  obterObjetivos();
});

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
