"use strict";
class Veiculo {
    constructor(cor) {
        this.cor = cor;
    }
    tentarAbrirPorta() {
        return false;
    }
}
const carro = new Veiculo("Vermelho");
carro.cor = "Preto";
console.log(carro.cor);
console.log(carro.tentarAbrirPorta());
//# sourceMappingURL=classe_public.js.map