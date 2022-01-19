class Documento {

    private valor: string = "12345"; //TS

    #numero: number = 35; //EcmaScript

    mostrarDocumento() {
        this.#numero;
    }
}

class CNPJ extends Documento {

    //private valor: string = "4124523543";

    #numero: number = 1234;

    mostrarCnpj() {
        return this.#numero;
    }
}

const rg = new Documento();

console.log(rg.mostrarDocumento());