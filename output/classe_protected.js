"use strict";
class Domicilio {
    constructor(cor, endereco) {
        this.cor = cor;
        this.endereco = endereco;
    }
    tocarInterfone() {
        return "Interfone tocando!";
    }
    atenderInterfone(mensagem) {
        return mensagem;
    }
}
class Casa extends Domicilio {
    entrarNaCasa() {
        return this.atenderInterfone("Quem é ?");
    }
}
const casaDoHomer = new Casa("Vermelho", { cidade: "SpringField" });
console.log(casaDoHomer.tocarInterfone());
console.log(casaDoHomer.entrarNaCasa());
//# sourceMappingURL=classe_protected.js.map