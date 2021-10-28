class Veiculo {
    public cor: string;

    constructor(cor: string) {
        this.cor = cor;
    }

    public tentarAbrirPorta(): boolean {
        return false;
    }
}

const carro = new Veiculo("Vermelho");

carro.cor = "Preto";

console.log(carro.cor);
console.log(carro.tentarAbrirPorta());