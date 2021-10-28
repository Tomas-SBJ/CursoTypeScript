"use strict";
class Pessoa {
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    toString() {
        return `A pessoa ${this.nome} tem ${this.idade} anos e mede ${this.altura} de altura.`;
    }
}
const ronaldo = new Pessoa("Ronaldo", 30, 1.75);
const marcos = new Pessoa("Marcos", 20, 2);
console.log("Pessoa: " + ronaldo);
console.log("Pessoa: " + marcos);
//# sourceMappingURL=primeira_classe.js.map