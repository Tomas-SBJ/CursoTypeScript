class Professor {
    nome: string;
    idade: number;
    materia: string;

    constructor(nome: string, idade: number, materia: string) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }

    seApresentar(): string {
        return `Meu nome é ${this.nome}, tenho ${this.idade} anos e vou lecionar ${this.materia}.`
    }

    dizerNotas(...notas: number[]): number {
        const notasTotal = notas.reduce((total, notaAtual) => total + notaAtual, 0);

        return notasTotal / notas.length;
    }
}

const glaucio = new Professor("Glaucio", 45, "DBA");

console.log(glaucio.seApresentar());

console.log("===================")

const joao = new Professor("Joao", 25, "TypeScript");

console.log(joao.seApresentar());

console.log(joao.dizerNotas(6, 10, 10, 5, 7));