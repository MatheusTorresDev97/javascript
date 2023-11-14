//ASYNC / AWAIT

//A palavra chave async indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar.
//O await irá indicar a promise que devemos esperar. Faz parte do ES8.

const consomeDados = async () => {
  const respostaDados = await fetch("./dados.json");
  const jsonDados = await respostaDados.json();

  document.body.innerText = jsonDados.titulo;
};

consomeDados();

//THEN x ASYNC
//A diferença é uma sintaxe mais limpa.

function iniciarFetch() {
  fetch("./dados.json")
    .then((dadosResponse) => dadosResponse.json())
    .then((dadosJSON) => {
      document.body.innerText += dadosJSON.titulo;
    });
}
iniciarFetch();

async function iniciarAsync() {
  const dadosResponse = await fetch("./dados.json");
  const dadosJSON = await dadosResponse.json();
  document.body.innerText = dadosJSON.titulo;
}
iniciarAsync();

//TRY / CATCH
//Para lidarmos com erros nas promises, podemos utilizar o try e o catch na função
async function puxarDaados() {
  try {
    const dadosResponse = await fetch("./dados.json");
    const dadosJSON = await dadosResponse.json();
    document.body.innerText = dadosJSON.titulo;
  } catch (erro) {
    console.log(erro);
  }
}
puxarDaados();

//INICIAR FETCH AO MESMO TEMPO
//Não precisamos esperar um fetch para começarmos outro. Porém precisamos esperar a resposta resolvida do //fetch para transformarmos a response em json.

async function iniciarAsync() {
  const dadosResponse = fetch("./dados.json");
  const clientesResponse = fetch("./clientes.json");

  // ele espera o que está dentro da expressão () ocorrer primeiro
  const dadosJSON = await (await dadosResponse).json();
  const clientesJSON = await (await clientesResponse).json();
}
iniciarAsync();