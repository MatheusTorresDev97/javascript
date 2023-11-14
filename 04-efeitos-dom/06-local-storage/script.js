//sessionStorage mantém as informações armazenadas por origem e permanece disponível enquanto há uma sessão aberta no navegador (mesmo a página sendo recarregada).
// Caso o browser seja fechado a sessão será limpa e as informações serão perdidas.

//localStorage mesmo que o navegador seja fechado, os dados permanecem armazenados.
//Para salvar uma informação no navegador do usuário com o localStorage devemos utilizar o método setItem().
localStorage.setItem("idade", 17);
//Esse método contém dois parâmetros: chave (nome da variável) e valor (conteúdo da variável).
//Para recuperar, bem como verificar a existência de um dado armazenado no navegador do usuário, devemos utilizar o método getItem() com o nome da chave utilizada.
const idade = localStorage.getItem("idade");

//Storage.length Retorna um número inteiro que representa o número de itens de dados armazenados no objeto Storage.
//[Métodos](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage#m%C3%A9todos)**

//`[Storage.key()](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage/key)`

//Quando passado um número n, este método retornará o nome da n-ésima chave no armazenamento..

//`[Storage.getItem()](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage/getItem)`

//Quando passado um nome de chave, retornará o valor dessa chave.

//`[Storage.setItem()](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage/setItem)`

//Quando passado um nome de chave e valor, irá adicionar essa chave para o armazenamento, ou atualizar o valor dessa chave, se já existir.

//`[Storage.removeItem()](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage/removeItem)`

//Quando passado um nome de chave, irá remover essa chave do armazenamento.

//`[Storage.clear()](https://developer.mozilla.org/pt-BR/docs/Web/API/Storage/clear)`

//Quando chamado, irá esvaziar todas as chaves fora do armazenamento.