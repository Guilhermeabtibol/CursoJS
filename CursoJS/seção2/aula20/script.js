function meuEscopo () {
    const form = document.querySelector('.forms');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    /*form.onsubmit = function (evento) {
        evento.preventDefault();
    };*/

    function recebeEventoForm (evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');

        pessoas.push ({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value
        });
        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} `
        + `${peso.value}</p>`;
    }
    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

//para se obter o valor se usa o .value
