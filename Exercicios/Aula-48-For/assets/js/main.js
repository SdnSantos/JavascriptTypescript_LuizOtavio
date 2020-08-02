function meuEscopo() {
  const elementos = [
    { tag: 'p', texto: 'Frase 1' },
    { tag: 'div', texto: 'Frase 2' },
    { tag: 'footer', texto: 'Frase 3' },
    { tag: 'section', texto: 'Frase 4' },
  ];

  const container = document.querySelector('.container');

  const div = document.createElement('div');
  container.appendChild(div);

  for (let index = 0; index < elementos.length; index++) {
    const elem = document.createElement(elementos[index].tag);

    div.appendChild(elem);

    elem.innerText = elementos[index].texto;
  }
}

meuEscopo();
