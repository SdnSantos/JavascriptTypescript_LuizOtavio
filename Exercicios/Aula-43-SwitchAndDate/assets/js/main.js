function meuEscopo() {
  const resultado = document.querySelector('.resultado');

  const data = new Date();
  console.log('Data: ', data.toString());

  const dia = data.getDay();
  const mes = data.getMonth();

  let diaSemana;
  let mesAno;

  function zeroEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`;
  }

  switch (dia) {
    case 0:
      diaSemana = 'Domingo';
      break;
    case 1:
      diaSemana = 'Segunda-feira';
      break;
    case 2:
      diaSemana = 'Terça-feira';
      break;
    case 3:
      diaSemana = 'Quarta-feira';
      break;
    case 4:
      diaSemana = 'Quinta-feira';
      break;
    case 5:
      diaSemana = 'Sexta-feira';
      break;
    case 6:
      diaSemana = 'Sábado';
      break;
    default:
      diaSemana = 'Não é um dia da semana válido';
      break;
  }

  switch (mes) {
    case 0:
      mesAno = 'janeiro';
      break;
    case 1:
      mesAno = 'fevereiro';
      break;
    case 2:
      mesAno = 'março';
      break;
    case 3:
      mesAno = 'abril';
      break;
    case 4:
      mesAno = 'maio';
      break;
    case 5:
      mesAno = 'junho';
      break;
    case 6:
      mesAno = 'julho';
      break;
    case 7:
      mesAno = 'agosto';
      break;
    case 8:
      mesAno = 'setembro';
      break;
    case 9:
      mesAno = 'outubro';
      break;
    case 10:
      mesAno = 'novembro';
      break;
    case 11:
      mesAno = 'dezembro';
      break;
    default:
      mesAno = 'não é um mês válido';
      break;
  }

  const dataFormatada = `${diaSemana}, ${zeroEsquerda(
    data.getDate(),
  )} de ${mesAno} de ${data.getFullYear()} ${zeroEsquerda(
    data.getHours(),
  )}:${zeroEsquerda(data.getMinutes())}`;

  resultado.innerHTML = dataFormatada;
}

meuEscopo();
