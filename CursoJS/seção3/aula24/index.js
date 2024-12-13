/*
IF - ELSE
se e senao
else if senao se 
if pode ser usado sozinho 
condicao
so posso ter um else 
*/const hora = 70;

if (hora >= 0 && hora <= 11) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa tarde');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite');
} else {
    console.log('Opa! Parece que as suas horas estao erradas, considere consertar!');
}