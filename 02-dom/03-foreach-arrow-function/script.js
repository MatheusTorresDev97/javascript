//FOREACH
//Constantemente vamos selecionar uma lista de itens do dom. A melhor forma para interagirmos com os mesmos é utilizando o método forEach.
const imgs = document.querySelectorAll("img");

imgs.forEach(function (item) {
  console.log(item);
});

//PARÂMETROS DO FOREACH
//O primeiro parâmetro é o callback, ou seja, a função que será ativada a cada item. Esse função pode receber três parâmetros: valorAtual, index e array;
imgs.forEach(function (item, index, array) {
  console.log(item); // o item atual no loop
  console.log(index); // o número do index
  console.log(array); // a Array completa
});

//ARROW FUNCTION
//Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.
imgs.forEach((item) => {
  console.log(item);
});

//PARÂMETROS E PARÊNTESES
// parâmetro único não precisa de parênteses
imgs.forEach((item) => {
  console.log(item);
});

// multiplos parâmetros precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

//RETURN
//É possível omitir as chaves {} para uma função que retorna uma linha.
imgs.forEach((item) => console.log(item));

imgs.forEach((item) => console.log(item));
