//NEW PROMISE()
//Promise é uma função construtora de promessas.
//Existem dois resultados possíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativado.

const promessa = new Promise((resolve, reject) => {
    let condicao = true;
    if (condicao) {
        resolve();
    } else {
        reject();
    }
});

//RESOLVE()
//Podemos passar um argumento na função resolve(), este será enviado junto com a resolução da Promise.

const promessaResolve = new Promise((resolve, reject) => {
    let condicao = true;
    if (condicao) {
        resolve("Estou pronto!");
    } else {
        reject();
    }
});
//console.log(promessaResolve); // Promise {<resolved>: "Estou pronto!"}

//REJECT
//Quando a condição de resolução da promise não é atingida, ativamos a função reject para rejeitar a mesma. Podemos indicar no console um erro, informando que a promise foi rejeitada.

const promessaReject = new Promise((resolve, reject) => {
    let condicao = false;
    if (condicao) {
        resolve("Estou pronto!");
    } else {
        reject(Error("Um erro ocorreu."));
    }
});
//console.log(promessaReject); // Promise {<rejected>: Error:...}