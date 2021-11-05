"use strict";
class BancoDados {
    constructor(ip, usuario, senha, tipoBanco) {
        this.ip = ip;
        this.usuario = usuario;
        this.senha = senha;
        this.tipoBanco = tipoBanco;
    }
    static factory(parametros) {
        if (![BancoDados.TIPO_MYSQL, BancoDados.TIPO_SQLSERVER].includes(parametros.tipoBanco)) {
            throw new Error("Tipo de banco incorreto");
        }
        return new BancoDados(parametros.ip, parametros.usuario, parametros.senha, parametros.tipoBanco);
    }
}
BancoDados.LOCAL = "127.0.0.1";
BancoDados.TIPO_MYSQL = "MySQL";
BancoDados.TIPO_SQLSERVER = "SQL Server";
const conexaoBanco = BancoDados.factory({
    tipoBanco: BancoDados.TIPO_MYSQL,
    senha: "root",
    usuario: "root",
    ip: BancoDados.LOCAL
});
console.log(conexaoBanco);
//# sourceMappingURL=classe_prop_metodo_estatico.js.map