function meuEscopo() {
  const h1 = document.querySelector('.container h1');
  const data = new Date();

  function zeroEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`;
  }

  function getDiaSemanaTexto(diaSemana) {
    const diasSemana = [
      'domingo',
      'segunda-feira',
      'terça-feira',
      'quarta-feira',
      'quinta-feira',
      'sexta-feira',
      'sábado',
    ];

    return diasSemana[diaSemana];
  }

  function getNomeMes(numeroMes) {
    const meses = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];

    return meses[numeroMes];
  }

  function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getDiaSemanaTexto(diaSemana);
    const nomeMes = getNomeMes(numeroMes);

    return `${nomeDia}, ${zeroEsquerda(
      data.getDay(),
    )} de ${nomeMes} de ${data.getFullYear()} ${zeroEsquerda(
      data.getHours(),
    )}:${zeroEsquerda(data.getMinutes())} `;
  }

  h1.innerHTML = criaData(data);
}

meuEscopo();
