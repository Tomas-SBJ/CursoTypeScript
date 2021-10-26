interface ISoma {
    (num1: number, num2: number): number;
}

let primeiraSoma: ISoma;

primeiraSoma = (numero1: number, numero2: number): number => {
    return numero1 + numero2;
}

interface ICalculos {
    somar(a: number, b: number): number;
    subtrair(a: number, b: number): number;
    multiplicar(a: number, b: number): number;
    dividir(a: number, b: number): number;
}

let calculadora: ICalculos;

calculadora = {
    somar: (numero1: number, numero2: number) => {
        return numero1 + numero2;
    },
    subtrair: function (numero1: number, numero2: number) {
        return numero1 - numero2;
    },
    multiplicar: (numero1: number, numero2: number) => {
        return numero1 * numero2;
    },
    dividir: function (numero1: number, numero2: number) {
        return numero1 / numero2;
    }
}