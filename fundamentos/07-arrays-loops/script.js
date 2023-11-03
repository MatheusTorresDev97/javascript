//ARRAY
//É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.
//Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.
//ENFILERAR E DESENFILEIRAR
//EMPILHAR E DESEMPILHAR
//ACHAR O INDICE DE UM VALOR
//CORTAR E CONCATENAR

const videoGames = ["PC", "PS5", "Xbox"];

//Acesse um elemento da array utilizando [n]
videoGames[0]; //PC
videoGames[2]; // Xbox

//MÉTODOS E PROPRIEDADES DE UMA ARRAY
const ultimoItem = videoGames.pop(); //Remove o último item e retorna o mesmo
console.log(ultimoItem);

videoGames.push("3DS"); //Adiciona ao final da array
videoGames.length; // 3

//FOR LOOP
//Fazem algo repetidamente até que uma condição seja atingida.
//Os loops podem executar um bloco de código várias vezes.

//INICIALIZAÇÃO
//A expressão 1 é executada (uma vez) antes da execução do bloco de código.

//CONDIÇÃO
//A expressão 2 define a condição para executar o bloco de código.

//INCRIMENTO OU DECREMENTO
//A expressão 3 é executada (todas as vezes) após a execução do bloco de código.

//Inicio             Condição     Incremento
for (let numero = 0; numero < 10; numero++) {
  console.log(numero);
} //Retorna de 0 a 9 no console

//Percorrendo
for (var i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

//WHILE LOOP
let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

//Exemplo

let velocidade = 80;

while (velocidade > 0) {
  console.log(`O carro está a ${velocidade} km/h`);
  velocidade -= 10;
  console.log(`Diminuindo 10km/h`);

  if (velocidade === 40) {
    break;
  }
}

console.log("O carro parou");
// Retorna de 0 a 9 no console

//ARRAYS E LOOPS
for (let i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
}

//BREAK
//O loop irá parar caso encontro e palavra break
for (let i = 0; i < videoGames.length; i++) {
  console.log(videoGames[i]);
  if (videoGames[i] === "PS4") {
    break;
  }
}

//PERCORRENDO ARRAYS, STRINGS
let nome = ["Matheus", "Roberto"];
for (i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}

//INTERAÇÕES E CONDICOES
for (let i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    console.log(i + " e par");
  } else {
    console.log(i + " e impar");
  }
}

//INVERTENDO PALAVRAS
for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

if (palavra === palavraInvertida) {
  console.log("É um palidromo");
  console.log(palavraInvertida);
} else {
  console.log("Nao é um palidromo :<");
}

//FOREACH
//  forEach é um método que executa uma função para cada item da Array.
// É uma forma mais simples de utilizarmos um loop com arrays (ou array-like)

//Podemos passar os seguintes parâmetros
//item, index e array
videoGames.forEach(function (item) {
  console.log(item);
});
// O argumento item será atribuído dinamicamente

//EXERCICIOS
// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002

brCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (let i = 0; i < brCampeao.length; i++) {
  console.log(`O Brasil foi campeão em ${brCampeao[i]}`);
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] == "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

const ultimaFruta = frutas[frutas.length - 1];
console.log(ultimaFruta);
