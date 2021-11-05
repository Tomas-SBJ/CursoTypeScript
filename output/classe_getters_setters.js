"use strict";
class Permissao {
    constructor(_nome, _nivel) {
        this._nome = _nome;
        this._nivel = _nivel;
    }
    get nome() {
        return this._nome.toUpperCase();
    }
    set nome(nome) {
        if (nome.length < 5) {
            throw new Error("O nome da permissão deve ter no mínimo 5 letras.");
        }
        this._nome = nome;
    }
}
const permissao = new Permissao("Administrador", 1);
console.log(permissao.nome);
permissao.nome = "ADM";
//# sourceMappingURL=classe_getters_setters.js.map