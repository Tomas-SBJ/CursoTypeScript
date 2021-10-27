interface IModelo {
    id: number;
    created_at: number;
    updated_at: number;
}

interface IPessoa extends IModelo {
    nome: string;
    idade?: number;
}

interface IUsuario extends IPessoa {
    email: string;
    senha: string;
}

const tomas: IUsuario = {
    id: 1,
    nome: "tomas",
    idade: 19,
    email: "tomassbj@gmail.com",
    senha: "123",
    created_at: new Date().getDate(),
    updated_at: new Date().getDate(),
}