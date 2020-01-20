function criarQuarter() {
  criarObjetivo();
  criarKR();
  firebase.database().ref('okr/quarters/').set([
    {
      id: 1,
      ano: 2019,
      nome: 'Q1 / 2019',
      periodoDoAno: 1
    },
    {
      id: 2,
      ano: 2019,
      nome: 'Q1 / 2018',
      periodoDoAno: 2
    }
  ])
}

function criarObjetivo() {
  let idDoObjetivo;

  if (okr.objetivos && okr.objetivos.length) {
    idDoObjetivo = okr.objetivos.length
  } else {
    idDoObjetivo = 0
  }

  let nome = document.getElementById('nomeDoObjetivo').value
  let idQuarter = document.getElementById('selecaoQuarter').value
  let descricao = document.getElementById('descricaoDoObjetivo').value

  firebase.database().ref('okr/objetivos/' + idDoObjetivo + '/').update({
    id: idDoObjetivo + 1,
    nome: nome,
    descricao: descricao,
    idDoQuarter: Number(idQuarter)
  }).then(() => {
    window.location.reload()
  })
}

function criarKR() {
  firebase.database().ref('okr/krs/').set([
    {
      id: 1,
      nome: 'Nome da KR',
      descricao: 'KR Descrição',
      idDoObjetivo: 2,
      valorInicial: 1,
      valorFinal: 100,
      valorAtual: 25
    },
    {
      id: 2,
      nome: 'Nome da KR',
      descricao: 'KR Descrição',
      idDoObjetivo: 2,
      valorInicial: 1,
      valorFinal: 100,
      valorAtual: 30
    },
    {
      id: 3,
      nome: 'Nome da KR',
      descricao: 'KR Descrição',
      idDoObjetivo: 1,
      valorInicial: 1,
      valorFinal: 100,
      valorAtual: 30
    }
  ])
}
