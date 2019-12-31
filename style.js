let lista = []
let nomeDoBanco = 'okr';
let inputDeInsercaoDoNomeDoObjetivo = document.getElementById('nomeDoObjetivo')

function criarObjetivo() {
  let idDoItem;

  if (!lista) {
    idDoItem = 1;
  } else idDoItem = lista.length;

  firebase.database().ref(nomeDoBanco + idDoItem).set({
    nomeDoObjetivo: inputDeInsercaoDoNomeDoObjetivo.value,
    id: idDoItem
  })
}
