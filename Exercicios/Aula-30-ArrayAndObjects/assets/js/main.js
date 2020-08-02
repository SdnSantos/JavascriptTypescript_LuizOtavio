// Minha resposta
function meuEscopo() {
  const form = document.querySelector('.form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.querySelector('.nome').value;
    const sobrenome = document.querySelector('.sobrenome').value;
    const peso = document.querySelector('.peso').value;
    const altura = document.querySelector('.altura').value;

    const pessoa = pegarDados(nome, sobrenome, peso, altura);
    const array = inserirArray(pessoa);
    mostrarResultado(array);
  });

  function pegarDados(nome, sobrenome, peso, altura) {
    const pessoa = { nome, sobrenome, peso, altura };

    return pessoa;
  }

  function inserirArray(pessoa) {
    const arrayPessoa = [];

    arrayPessoa.push(pessoa);

    return arrayPessoa;
  }

  function mostrarResultado(arrayPessoa) {
    const p = document.querySelector('.resultado');

    arrayPessoa.map(
      ({ nome, sobrenome, peso, altura }) =>
        (p.innerHTML += `${nome} ${sobrenome} ${peso} ${altura} </br>`),
    );

    return p;
  }
}

meuEscopo();
