function listaDeTarefas() {
  const input = document.querySelector('input')
  const button = document.querySelector('button')
  const ul = document.querySelector('ul')

  function criaTarefa(textoInput) {
    const li = document.createElement('li')
    li.innerHTML = textoInput + '     '
  }

  button.addEventListener('click', () => {
    if (!input.value) return

    criaTarefa(input.value)


    const buttonApagar = document.createElement('button')

    buttonApagar.innerHTML = 'Apagar'
    li.appendChild(buttonApagar)
    ul.appendChild(li)
    input.value = ''

    buttonApagar.addEventListener('click', () => {
      li.removeChild(buttonApagar)
      ul.removeChild(li)
    })
  })
}

listaDeTarefas()