// Resposta do professor
function meuEscopo() {
  const form = document.querySelector('.form');
  const resultado = document.querySelector('.resultado');

  const pessoas = [];

  function recebeForm(e) {
    e.preventDefault();

    const nome = document.querySelector('.nome');
    const sobrenome = document.querySelector('.sobrenome');
    const peso = document.querySelector('.peso');
    const altura = document.querySelector('.altura');

    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      peso: peso.value,
      altura: altura.value,
    });

    resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`;
  }

  form.addEventListener('submit', recebeForm);
}

meuEscopo();
