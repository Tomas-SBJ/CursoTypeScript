let resultado: unknown;

resultado = {
    sucesso: true
};
resultado = "Deu tudo certo, OK!";
resultado = 400;

console.log("=======================")

const informacao: any = 150;
const informacaoDesconhecida: unknown = 250;

const primeiroNumero: number = informacao;

//valor desconhecido não casa com numero.
//const segundoNumero: number = informacaoDesconhecida;