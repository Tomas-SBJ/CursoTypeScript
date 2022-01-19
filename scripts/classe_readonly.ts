class Usuario {
    readonly id: string = "1234sdf342";
    nome: string = "Joao";
    private senha: string = "123"
    readonly dataCadastro: Date = new Date("2002-01-01");
}

const usuario = new Usuario();

console.log(usuario.id);