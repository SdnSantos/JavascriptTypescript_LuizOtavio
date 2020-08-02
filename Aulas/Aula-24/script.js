let num = Number(prompt('Digite um número:'));

document.querySelector('#numero-titulo').innerHTML = num;

document.querySelector('#texto').innerHTML = `Raiz quadrada: ${
  num ** 0.5
} </br>`;

document.querySelector('#texto').innerHTML += `${num} é inteiro: ${
  Number.isInteger(num) === true ? 'Sim' : 'Não'
} </br>`;

document.querySelector('#texto').innerHTML += `É NaN: ${
  isNaN(num) === true ? 'Sim' : 'Não'
} </br>`;

document.querySelector(
  '#texto',
).innerHTML += `Arredondamento para baixo: ${Math.floor(num)} </br>`;

document.querySelector(
  '#texto',
).innerHTML += `Arredondamento para cima: ${Math.ceil(num)} </br>`;

document.querySelector(
  '#texto',
).innerHTML += `Com duas casas decimais: ${num.toFixed(2)} </br>`;
