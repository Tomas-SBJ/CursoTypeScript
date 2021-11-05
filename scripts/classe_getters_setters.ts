class Permissao {

    constructor(private _nome: string, private _nivel: number) {
    }
    
    get nome() {
        
        return this._nome.toUpperCase();
    }

    set nome(nome: string) {
        
        if (nome.length < 5) {
            throw new Error("O nome da permissão deve ter no mínimo 5 letras.")
        }
        
        this._nome = nome;
    }
}

const permissao = new Permissao("Administrador", 1);

console.log(permissao.nome);

permissao.nome = "ADM";