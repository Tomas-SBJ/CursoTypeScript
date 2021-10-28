class Domicilio {

    public cor: string;
    public endereco: object;

    constructor(cor: string, endereco: object) {

        this.cor = cor;
        this.endereco = endereco;
    }

    public tocarInterfone(): string {

        return "Interfone tocando!"
    }

    protected atenderInterfone(mensagem: string): string {
        return mensagem;
    }
}

class Casa extends Domicilio {

    public entrarNaCasa() {

        return this.atenderInterfone("Quem é ?");
    }
}

const casaDoHomer = new Casa("Vermelho", {cidade: "SpringField"});

console.log(casaDoHomer.tocarInterfone());
console.log(casaDoHomer.entrarNaCasa());