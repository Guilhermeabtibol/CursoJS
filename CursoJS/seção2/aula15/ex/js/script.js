//numero = Number(numero);
//let numero = prompt('Digite um numero: ');
const numero = Number(prompt('Digite um numero: '));
const titulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

titulo.innerHTML = numero;
texto.innerHTML += `<p>Seu número + 2 é: ${numero + 2}.</p>`;
texto.innerHTML += `<p> A raiz quadrada do seu numero é: ${numero ** 0.5}.</p>`
texto.innerHTML += `<p> ${numero} é inteiro ${Number.isInteger(numero)}.</p>`
texto.innerHTML += `<p> é NaN: ${Number.isNaN(numero)}.</p>`
texto.innerHTML += `<p> o seu numero arrendondado pra baixo é: ${Math.floor(numero)}.</p>`
texto.innerHTML += `<p> o seu numero arrendado pra cima é: ${Math.ceil(numero)}.</p>`
texto.innerHTML += `<p> Com duas casas decimais: ${numero.toFixed(2)}.</p>`