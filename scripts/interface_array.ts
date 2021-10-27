interface ICategoria {
    nome: string;
    id: number;
    categiaPai?: ICategoria;
}

const frontEnd: ICategoria = {
    nome: "Front-End",
    id: 1
}

const backEnd : ICategoria = {
    nome: "Back-End",
    id: 2
}

interface IMenu {
    categorias: ICategoria[];
}

let menu: IMenu = {
    categorias: [frontEnd, backEnd]
};

interface ITodo {
    [indice: number]: string;
}

let minhasTarefas: ITodo;

minhasTarefas = ["Estudar TypeScript", "Estudar JavaScript", "Estudar PHP 8"];

console.log(minhasTarefas[0]);