// Some todos os números (reduce)
// Retorne um array com os pares
// Retorne um array com o dobro dos valores
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosSomados = numeros.reduce((acumulador, atual) => {
  return (acumulador += atual);
});
console.log('Soma dos números:', numerosSomados);

const numerosPares = numeros.reduce((acumulador, atual) => {
  if (atual % 2 === 0) acumulador.push(atual);
  return acumulador;
}, []);
console.log('Número pares:', numerosPares);

const numerosDobrados = numeros.reduce((acumulador, atual) => {
  acumulador.push((atual *= 2));
  return acumulador;
}, []);
console.log('Números dobrados:', numerosDobrados);

// Retorne a pessoa mais velha
const pessoas = [
  {
    nome: 'Luiz',
    idade: 62,
  },
  {
    nome: 'Maria',
    idade: 23,
  },
  {
    nome: 'Eduardo',
    idade: 55,
  },
  {
    nome: 'Letícia',
    idade: 10,
  },
  {
    nome: 'Rosana',
    idade: 64,
  },
  {
    nome: 'Wallace',
    idade: 63,
  },
];

const maisVelha = pessoas.reduce((acumulador, valor) =>
  acumulador.idade > valor.idade ? acumulador : valor,
);

console.log('Mais velha:', maisVelha);
