let okr = {}

firebase.database().ref('okr/').once('value').then((snapshot) => {
  okr = (snapshot.val() && snapshot.val())
  iniciarComDados()
});

function iniciarComDados() {
  new Vue({
    el: '#itemObjetivo',
    data: {
      okr,
      objetivosDoQuarter: (idDoQuarter) => okr.objetivos.filter(objetivo => objetivo.idDoQuarter === idDoQuarter),
      krsDoObjetivo: (idDoObjetivo) => okr.krs.filter(kr => kr.idDoObjetivo === idDoObjetivo)
    }
  })
}
