"use strict";
class Professor {
    constructor(nome, idade, materia) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    seApresentar() {
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos e vou lecionar ${this.materia}.`;
    }
    dizerNotas(...notas) {
        const notasTotal = notas.reduce((total, notaAtual) => total + notaAtual, 0);
        return notasTotal / notas.length;
    }
}
const glaucio = new Professor("Glaucio", 45, "DBA");
console.log(glaucio.seApresentar());
console.log("===================");
const joao = new Professor("Joao", 25, "TypeScript");
console.log(joao.seApresentar());
console.log(joao.dizerNotas(6, 10, 10, 5, 7));
//# sourceMappingURL=classe_metodo.js.map