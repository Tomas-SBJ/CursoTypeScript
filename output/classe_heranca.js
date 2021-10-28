"use strict";
class Cadastro {
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}
class Cliente extends Cadastro {
    constructor(nome, nascimento, email, empresa) {
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }
}
const clienteTomas = new Cliente("Tomás", new Date("2002-01-01"), "tomassbj@gmail.com", "AmbevTech");
console.log(clienteTomas);
//# sourceMappingURL=classe_heranca.js.map