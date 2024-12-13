const h1 = document.querySelector('.container h1');
const data = new Date();

function getdiaSemana(diaSemana) {
    let diaSemanaT;

    switch (diaSemana) {
        case 0:
            diaSemanaT = 'domingo';
            return diaSemanaT;
        case 1:
            diaSemanaT = 'segunda-feira';
             return diaSemanaT;
        case 2:
            diaSemanaT = 'terça-feira';
             return diaSemanaT;
        case 3:
             diaSemanaT = 'quarta-feira';
             return diaSemanaT;
        case 4:
            diaSemanaT = 'quinta-feira';
            return diaSemanaT;
        case 5:
            diaSemanaT = 'sexta-feita';
            return diaSemanaT;
        case 6:
            diaSemanaT = 'sábado';
            return diaSemanaT; 
    }
}

function getnomeMes(numeroMes) {
    let nomeMes;

    switch (numeroMes) {
        case 0:
            nomeMes = 'Janeiro';
            return nomeMes;
        case 1:
            nomeMes = 'Fevereiro';
             return nomeMes;
        case 2:
            nomeMes = 'Março';
             return nomeMes;
        case 3:
             nomeMes = 'Abril';
             return nomeMes;
        case 4:
            nomeMes = 'Maio';
            return nomeMes;
        case 5:
            nomeMes = 'Junho';
            return nomeMes;
        case 6:
            nomeMes = 'Julho';
            return nomeMes; 
        }
}

function criaData(data) {
    const diaSemana = data.getDay();
    const numeroMes = data.getMonth();

    const nomeDia = getdiaSemana(diaSemana);
    const nomeMes = getnomeMes(numeroMes);
    console.log(nomeDia, nomeMes);
    return (`${nomeDia}, ${data.getDate()} de ${nomeMes} ` +
    `de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`
    );
}

h1.innerHTML = criaData(data);