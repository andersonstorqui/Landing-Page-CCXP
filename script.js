let dia = document.getElementById('dia')
let minuto = document.getElementById('minuto')
let hora = document.getElementById('hora')
let segundo = document.getElementById('segundo')

let lancamento = '30 jun 2024'

function countDown() {
  let dataLanc = new Date(lancamento)
  let hoje = new Date()
  let segTotal = (dataLanc - hoje) / 1000;

  let finalDias = Math.floor(segTotal / 60 / 60 / 24);
  let finalHoras = Math.floor(segTotal / 60 / 60) % 24;
  let finalMinutos = Math.floor(segTotal / 60) % 60;
  let finalSegundos = Math.floor(segTotal) % 60;


  dia.innerHTML = `${finalDias}D`
  hora.innerHTML = `${formatoTempo(finalHoras)}H`
  minuto.innerHTML = `${formatoTempo(finalMinutos)}M`
  segundo.innerHTML = `${formatoTempo(finalSegundos)}S`
}

function formatoTempo(tempo) {
  return tempo < 10 ? `0${tempo}` : tempo
}

countDown()
setInterval(countDown, 1000)