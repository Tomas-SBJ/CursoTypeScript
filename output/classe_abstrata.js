"use strict";
class Notificacao {
}
class Email extends Notificacao {
    enviar(usuario) {
        console.log(`Enviando e-mail para o usuario ${usuario.email} ...`);
        return true;
    }
}
class Sms extends Notificacao {
    enviar(usuario) {
        console.log(`Enviando SMS para o usuario ${usuario.telefone} ...`);
        return true;
    }
}
new Email().enviar({
    nome: "Tomás",
    email: "tomassbj@gmail.com",
    telefone: "988038259"
});
new Sms().enviar({
    nome: "Tomás",
    email: "tomassbj@gmail.com",
    telefone: "988038259"
});
//# sourceMappingURL=classe_abstrata.js.map