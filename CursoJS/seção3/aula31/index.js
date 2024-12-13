/*
Diferença entre let e var
let é um escopo de bloco {bloco}
var so tem escopo de função 

let tem escopo de bloco 
var so tem escopo de função 
*/ 

const verdadeira = true;

let nome = 'Luiz';
var nome2 = 'Luiz';

if (verdadeira) {
    let nome = 'Otávio';
    console.log(nome, nome2);

    if (verdadeira) {
        console.log('OK');
    }
}
