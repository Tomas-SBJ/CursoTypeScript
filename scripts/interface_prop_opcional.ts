interface IProduto {
    nome: string;
    preco: number;
    descricao?: string;
    dataValidade: Date;
}

const produtoDados: IProduto = {
    nome: "Notebook",
    preco: 5000,
    descricao: "Notebook muito bom",
    dataValidade: new Date(2022, 11, 1)
};