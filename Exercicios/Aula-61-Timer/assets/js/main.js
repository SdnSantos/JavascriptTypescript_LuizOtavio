function relogio() {

  function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000)

    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'GMT'
    })
  }

  const timer = document.querySelector('.timer')

  let segundos = 0
  let relogio

  function iniciaRelogio() {
    relogio = setInterval(() => {
      segundos++
      timer.innerHTML = criaHoraDosSegundos(segundos)
    }, 1000)
  }

  document.addEventListener('click', (e) => {
    const button = e.target

    if (button.classList.contains('iniciar')) {
      clearInterval(relogio)
      timer.classList.remove('pausado')
      iniciaRelogio()

      iniciar.innerHTML = 'Executando' ?
        pausar.innerHTML = 'Pausar' :
        pausar.innerHTML = 'Pausado'

      iniciar.innerHTML = 'Executando'
    } else if (button.classList.contains('pausar')) {
      clearInterval(relogio)
      timer.classList.add('pausado')
      iniciar.innerHTML = 'Continuar'
      pausar.innerHTML = 'Pausado'
    } else if (button.classList.contains('zerar')) {
      clearInterval(relogio)
      timer.classList.remove('pausado')
      timer.innerHTML = '00:00:00'
      segundos = 0
      iniciar.innerHTML = 'Iniciar'
    } else {
      alert('Clique em algum botão')
    }
  })


  // iniciar.addEventListener('click', () => {
  //   clearInterval(relogio)
  //   timer.classList.remove('pausado')
  //   iniciaRelogio()

  //   iniciar.innerHTML = 'Executando' ?
  //     pausar.innerHTML = 'Pausar' :
  //     pausar.innerHTML = 'Pausado'

  //   iniciar.innerHTML = 'Executando'
  // })

  // pausar.addEventListener('click', () => {
  //   clearInterval(relogio)
  //   timer.classList.add('pausado')
  //   iniciar.innerHTML = 'Continuar'
  //   pausar.innerHTML = 'Pausado'
  // })

  // zerar.addEventListener('click', () => {
  //   clearInterval(relogio)
  //   timer.innerHTML = '00:00:00'
  //   segundos = 0
  //   iniciar.innerHTML = 'Iniciar'
  // })
}

relogio()