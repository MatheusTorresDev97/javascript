//API
//Application
//Um servidor, aplicativo, objeto JavaScript ou qualquer outra coisa que você interaja através de comandos.
//Ao digitar uma URL, estamos utilizando a API do browser para se comunicar com a API do servidor.

//Programming
//Programação, isso significa que um comando irá encadear uma cadeia de eventos pré-definidos. O resultado esperado é geralmente o mesmo.

//Interface
//A interface são os comandos criados para permitir a interação com a aplicação. Ex: 'VIOLAO'.toLowerCase() é um método que faz parte da interface do objeto String.
//A interação com a interface retorna um efeito / resposta.

//HTTP
//Hypertext Transfer Protocol é o protocolo utilizando para enviarmos/recebermos arquivos e dados na Web.

fetch("https://pokeapi.co/api/v2/pokemon/")
  .then((r) => r.json())
  .then((pokemon) => {
    console.log(pokemon);
  });

//URL E METHOD
//Uma requisição HTTP é feita através de uma URL. O método padrão é o GET, mas existem outros como POST, UPDATE, DELETE, HEADER.

const url = "https://jsonplaceholder.typicode.com/posts/";
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  body: '"aula": "JavaScript"',
};

fetch(url, options)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });

//METHOD
//GET
//Puxa informação, utilizado para pegar posts, usuários e etc.

//POST
//Utilizado para criar posts, usuários e etc.

//PUT
//Geralmente utilizado para atualizar informações.

//DELETE
//Deleta uma informação.

//HEAD
//Puxa apenas os headers.