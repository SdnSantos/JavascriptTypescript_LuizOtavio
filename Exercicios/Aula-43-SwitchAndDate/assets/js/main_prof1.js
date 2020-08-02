function meuEscopo() {
  const h1 = document.querySelector('.container h1');
  const data = new Date();

  function zeroEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`;
  }

  function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
      case 0:
        diaSemanaTexto = 'domingo';
        return diaSemanaTexto;
      case 1:
        diaSemanaTexto = 'segunda-feira';
        return diaSemanaTexto;
      case 2:
        diaSemanaTexto = 'terça-feira';
        return diaSemanaTexto;
      case 3:
        diaSemanaTexto = 'quarta-feira';
        return diaSemanaTexto;
      case 4:
        diaSemanaTexto = 'quinta-feira';
        return diaSemanaTexto;
      case 5:
        diaSemanaTexto = 'sexta-feira';
        return diaSemanaTexto;
      case 6:
        diaSemanaTexto = 'sábado';
        return diaSemanaTexto;
      default:
        diaSemanaTexto = '';
        return diaSemanaTexto;
    }
  }

  function getNomeMes(numeroMes) {
    let nomeMes;

    switch (numeroMes) {
      case 0:
        nomeMes = 'janeiro';
        return nomeMes;
      case 1:
        nomeMes = 'fevereiro';
        return nomeMes;
      case 2:
        nomeMes = 'março';
        return nomeMes;
      case 3:
        nomeMes = 'abril';
        return nomeMes;
      case 4:
        nomeMes = 'maio';
        return nomeMes;
      case 5:
        nomeMes = 'junho';
        return nomeMes;
      case 6:
        nomeMes = 'julho';
        return nomeMes;
      case 7:
        nomeMes = 'agosto';
        return nomeMes;
      case 8:
        nomeMes = 'setembro';
        return nomeMes;
      case 9:
        nomeMes = 'outubro';
        return nomeMes;
      case 10:
        nomeMes = 'novembro';
        return nomeMes;
      case 11:
        nomeMes = 'dezembro';
        return nomeMes;
      default:
        nomeMes = 'não é um mês válido';
        return nomeMes;
    }
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
