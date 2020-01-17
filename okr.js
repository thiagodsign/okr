export const quarters = [
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
]

export const objetivos = [
  {
    id: 1,
    nome: 'Objetivo Nome',
    descricao: 'Objetivo Descrição',
    idDoQuarter: 2
  },
  {
    id: 2,
    nome: 'Objetivo Nome',
    descricao: 'Objetivo Descrição',
    idDoQuarter: 1
  },
  {
    id: 3,
    nome: 'Objetivo três',
    descricao: 'Objetivo Descrição',
    idDoQuarter: 1
  }
]

export const krs = [
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
]

export const objetivosDoQuarter = (idDoQuarter) => objetivos.filter(objetivo => objetivo.idDoQuarter === idDoQuarter)

export const krsDoObjetivo = (idDoObjetivo) => krs.filter(kr => kr.idDoObjetivo === idDoObjetivo)
