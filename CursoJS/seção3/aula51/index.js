//Objeto pessoa 
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Eduardo',
    idade: 30,
    endereco: {
        rua: 'Itagimirim', 
        numero: 15,
        quadra: 89,
        bairro: 'Cidade Nova'
    }
};
//atribuicao normal
//const nome = pessoa.nome;
//console.log(nome);

//atribuicao via desestruturacao
//podemos especificar a chave e mudar o nome da variavel 
//podemos extrair variaveis especificas
//const { nome } = pessoa;
//const { endereco: { rua, numero} } = pessoa;
//console.log(rua, numero);
//console.log(pessoa.endereco);