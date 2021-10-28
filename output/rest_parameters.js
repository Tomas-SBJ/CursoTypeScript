"use strict";
function somarRenda(...meses) {
    return meses.reduce((rendaTotal, rendaAtual) => rendaTotal + rendaAtual, 0);
}
console.log(somarRenda(250, 500, 620));
//# sourceMappingURL=rest_parameters.js.map