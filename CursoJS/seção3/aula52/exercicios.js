//contagem de numeros de 1 a 100
/*
for (i = 1; i <= 100; i++) {
    console.log(i);
}
*/

//soma de dois numeros 
/*
let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(`A soma de 1 ate 100 é: ${sum}`);
*/

//tabuada 
/*
const n = 2;

for (let i = 1; i <= 10; i++ ){
    console.log(`${n} x ${i} = ${n * i}`);
}
*/

//reversor de array
/*
array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrayReverso = [];
for (let i = array.length - 1; i >= 0; i--) {
    arrayReverso.push(array[i]);
}

console.log(arrayReverso);
*/

//contador de vogal 

function contaVogal(str) {
    const vogal = 'aeiou';
    let contador = 0;
    for (let i = 0; i < str.length; i++ ){
        if (vogal.includes(str[i])){
            contador++;
        }
    }
    return contador;
}
console.log(contaVogal("Adalberto Vale da Silva"));