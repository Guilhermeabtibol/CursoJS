//objetos 
//{criando objetos}
//[criando arrays]


const pessoa1 ={
    nome: 'Antonio',
    sobrenome: 'Marcos',
    idade: 78,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} esta falando que a idade dele é ${this.idade}`)
    },

    incrementaIdade() {
        ++this.idade;
    }
}

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

//++ usado para incrementar
//this = chamar algo da funcao 


/*const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Adalberto',
    idade: 56,

   fala() {
        console.log('OIIII');
    }
};

pessoa1.fala();
*/
/*function criarPessoas (nome, sobrenome, idade) {
    return {
        nome: nome, 
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criarPessoas('Maria', 'Adalberta', 34);
console.log(pessoa.nome, pessoa1.idade);
*/
//criamos uma funcao para criar pessoas sem ter que criar varias constantes 