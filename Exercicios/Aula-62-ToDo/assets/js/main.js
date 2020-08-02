function listaDeTarefas() {
  const input = document.querySelector('input')
  const button = document.querySelector('button')
  const ul = document.querySelector('ul')

  button.addEventListener('click', () => {
    const li = document.createElement('li')
    const buttonApagar = document.createElement('button')

    li.innerHTML = input.value + '     '
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