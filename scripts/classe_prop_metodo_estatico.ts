interface IBancoDados {
    ip: string;
    usuario: string;
    senha: string;
    tipoBanco: string;
}

class BancoDados {

    static LOCAL = "127.0.0.1";
    static TIPO_MYSQL = "MySQL"
    static TIPO_SQLSERVER = "SQL Server"

    constructor(private ip: string, private usuario: string, private senha:string, private tipoBanco: string) {
    }

    static factory(parametros: IBancoDados) {
        
        if (![BancoDados.TIPO_MYSQL, BancoDados.TIPO_SQLSERVER].includes(parametros.tipoBanco)) {

            throw new Error("Tipo de banco incorreto")
        }

        return new BancoDados(parametros.ip, parametros.usuario, parametros.senha, parametros.tipoBanco);
    }
}

const conexaoBanco = BancoDados.factory({
    tipoBanco: BancoDados.TIPO_MYSQL,
    senha: "root",
    usuario: "root",
    ip: BancoDados.LOCAL
});

console.log(conexaoBanco);