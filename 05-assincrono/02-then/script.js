//THEN() ENTAO
//O poder das Promises está no método then() do seu protótipo. O Callback deste método só será ativado quando a promise for resolvida. O argumento do callback será o valor passado na função resolve.

const promessa = new Promise((resolve, reject) => {
    let condicao = true;
    if (condicao) {
      resolve("Estou pronto!!");
    } else {
      reject(Error("Um erro ocorreu"));
    }
  });
  
  promessa.then((resolucao) => {
    console.log(resolucao);
  });
  
  //ASSINCRONO
  //As promises não fazem sentido quando o código executado dentro da mesma é apenas código síncrono.
  // O poder está na execução de código assíncrono que executará o resolve() ao final dele.
  
  const promessaAssincrona = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Resolvida");
    }, 1000);
  });
  
  promessaAssincrona.then((resolucao) => [console.log(resolucao)]);
  
  //THEN().THEN()
  //O método then() retorna outra Promise. Podemos colocar then() após then() e fazer um encadeamento de promessas.
  //O valor do primeiro argumento de cada then, será o valor do retorno anterior.
  
  const novaPromessa = new Promise((resolve, reject) => {
    resolve("Etapa 1");
  });
  
  novaPromessa
    .then((resolucao) => {
      console.log(resolucao); //Etapa 1
      return "Etapa 2";
    })
    .then((resolucao) => {
      console.log(resolucao);
      return "Etapa 3";
    })
    .then((r) => r + 4)
    .then((r) => {
      console.log(r);
    });
  
  //CATCH()
  //O método catch(), do protótipo de Promises, adiciona um callback a promise que será ativado caso a mesma seja rejeitada.
  
  const promessaTrue = new Promise((resolve, reject) => {
    let condicao = true;
    if (condicao) {
      resolve("Estou pronto!");
    } else {
      reject(Error("Um erro ocorreu."));
    }
  });
  
  promessaTrue
    .then((resolucao) => {
      console.log(resolucao);
    })
    .catch((reject) => {
      console.log(reject);
    });
  
  //  THEN(RESOLVE, REJECT)
  //  Podemos passar a função que será ativada caso a promise seja rejeitada, direto no //método then, como segundo argumento.
  
  const promessaFalse = new Promise((resolve, reject) => {
    let condicao = true;
    if (condicao) {
      resolve("Estou pronto!");
    } else {
      reject(Error("Um erro ocorreu."));
    }
  });
  
  promessaFalse.then(
    (resolucao) => {
      console.log(resolucao);
    },
    (reject) => {
      console.log(reject);
    }
  );
  
  //FINALLY()
  //finally() executará a função anônima assim que a promessa acabar.
  // A diferença do finally é que ele será executado independente do resultado, se for resolvida ou rejeitada.
  
  const promessaFinally = new Promise((resolve, reject) => {
    let condicao = true;
    if (condicao) {
      resolve("Estou pronto!");
    } else {
      reject(Error("Um erro ocorreu."));
    }
  });
  
  promessaFinally
    .then(
      (resolucao) => {
        console.log(resolucao);
      },
      (reject) => {
        console.log(reject);
      }
    )
    .finally(() => {
      console.log("Acabou"); // 'Acabou'
    });
  
  //PROMISE.ALL()
  //Retornará uma nova promise assim que todas as promises dentro dela forem resolvidas //ou pelo menos uma rejeitada.
  // A reposta é uma array com as respostas de cada promise.
  const login = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Login efetuado");
    }, 1000);
  });
  const dados = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Dados Carregados");
    }, 1500);
  });
  
  const tudoCarregado = Promise.all([login, dados]);
  
  tudoCarregado.then((resposta) => {
    console.log(resposta); //Array com ambas respostas
  });
  
  //PROMISE.RACE()
  //Retornará uma nova promise assim que a primeira promise for resolvida ou rejeitada. Essa nova promise terá a resposta da primeira resolvida.
  const login2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Login Efetuado");
    }, 800);
  });
  const dados2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Dados Carregados");
    }, 1500);
  });
  
  const carregouPrimeiro = Promise.race([login2, dados2]);
  
  carregouPrimeiro.then((resposta) => {
    console.log(resposta); // Login Efetuado
  });