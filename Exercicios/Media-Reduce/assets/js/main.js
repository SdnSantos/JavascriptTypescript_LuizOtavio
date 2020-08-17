const alunos = [
  { nome: 'Gertrude', n1: 10, n2: 8.5, n3: 9, n4: 7.5 },
  { nome: 'Rey', n1: 5, n2: 8.5, n3: 6.5, n4: 7.5 },
  { nome: 'Jessilda', n1: 8, n2: 8.5, n3: 7, n4: 7.5 },
  { nome: 'Lindóia', n1: 6.5, n2: 8.5, n3: 10, n4: 7.5 },
  { nome: 'Creysson', n1: 10, n2: 9.5, n3: 10, n4: 8.5 },
];

const media = alunos.reduce((acumulador, valor, indice) => {
  const newObj = {
    ...valor,
    media: (valor.n1 + valor.n2 + valor.n3 + valor.n4) / 4,
  };
  acumulador[indice] = newObj;
  return acumulador;
}, []);

console.log(media);
