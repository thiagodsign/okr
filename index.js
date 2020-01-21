let okr = {}

obterDados();

function obterDados() {
	firebase.database().ref('okr/').once('value').then((snapshot) => {
		okr = (snapshot.val() && snapshot.val())
		iniciarComDados()
	})
}

function abrirDialogoDeKr(kr) {
	abrirDialogoDeCriacaoDeObjetivo('dialogoKr')
	let objetivoDaKr = okr.objetivos.filter(objetivo => objetivo.id === kr.idDoObjetivo)[0]
	document.querySelector('[name=tituloDoObjetivo]').innerText = objetivoDaKr.nome
	document.querySelector('#inputKr').value = kr.nome
	document.querySelector('#valorInicial').value = kr.valorInicial
	document.querySelector('#valorFinal').value = kr.valorFinal
	document.querySelector('#valorAtual').value = kr.valorAtual
}

function restaurarInput() {
	document.querySelector('#inputKr').value = ''
	document.querySelector('#valorInicial').value = null
	document.querySelector('#valorFinal').value = null
	document.querySelector('#valorAtual').value = null
}

function dialogoNovaKr(idDoObjetivo) {
	abrirDialogoDeCriacaoDeObjetivo('dialogoKr')
	let objetivoDaKr = okr.objetivos.filter(objetivo => objetivo.id === idDoObjetivo)[0]
	document.querySelector('[name=tituloDoObjetivo]').innerText = objetivoDaKr.nome
	restaurarInput()
}

function abrirDialogoDeCriacaoDeObjetivo(idDoDialogo) {
	let modal = document.getElementById(idDoDialogo)

	modal.classList.add('dialogo_aberto')
	fecharDialogoComEsc(idDoDialogo)
}

function fecharDialogo(idDoDialogo) {
	let modal = document.getElementById(idDoDialogo)
	modal.classList.remove('dialogo_aberto')
}

function fecharDialogoComEsc(idDoDialogo) {
	document.onkeydown = function (e) {
		if (e.which == 27) {
			fecharDialogo(idDoDialogo)
		}
	}
}

feather.replace()

function iniciarComDados() {
	new Vue({
		el: '#itemObjetivo',
		data: {
			okr,
			objetivosDoQuarter: (idDoQuarter) => okr.objetivos.filter(objetivo => objetivo.idDoQuarter === idDoQuarter),
			krsDoObjetivo: (idDoObjetivo) => okr.krs.filter(kr => kr.idDoObjetivo === idDoObjetivo),
			abrirDialogoDeKr: (kr) => abrirDialogoDeKr(kr),
			novaKr: (idDoObjetivo) => dialogoNovaKr(idDoObjetivo),
		}
	})
}
