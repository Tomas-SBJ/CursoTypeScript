console.log("Hello World!");

const nome = "João";

console.log("Olá " + nome + ". Seja Bem-vindo");

console.log("===========================================================")

class Produto {
    nome: string;
    valor: number;

    constructor(produtoNome: string, produtoValor: number) {
        this.nome = produtoNome;
        this.valor = produtoValor;
    }
}

const playstation5 = new Produto("Playstation5", 5000)

console.log("===========================================================")

const elemento = document.querySelector('div');