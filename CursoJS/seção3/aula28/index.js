//date 
/*const tresHoras = 60 * 60 * 3 * 1000;
const data = new Date(tresHoras);
console.log(data.toString());

//const data = new Date('2024-04-21 01:37');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth()); // mes comeca do zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('MS', data.getMilliseconds());
console.log('Dia Semana', data.getDay()); // 0 = domingo e 6 = sabado
console.log(data.toString());
*/

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date ();
const dataBrasil = formataData(data)
console.log(dataBrasil);