//Arrays armazenam uma coleção de elementos. Estes podem ser strings, arrays, boolean, number, functions, objects e mais.
const instrumentos = ["Guitarra", "Baixo", "Violão"];
const precos = [49, 99, 69, 89];
const dados = [
  new String("Tipo 1"),
  ["Carro", "Portas", { cor: "Azul", preco: 2000 }],
  function andar(nome) {
    console.log(nome);
  },
];

//Construção de Arrays
//Toda array herda os métodos e propriedades do protótipo do construtor Array.
const carros = new Array("Corola", "Mustang", "Honda");
//Os valores das array's não são estáticos

carros[1]; // Mustang
carros[2] = "Ferrari";
carros[10] = "Parati";

carros.length; //11

//Array.FROM()
//Array.from() é um método utilizado para transformar array-like objects, em uma array.
let li = document.querySelectorAll("li"); // NodeList
li = Array.from(li); // Array

const carross = {
  0: "Fiat",
  1: "Honda",
  2: "Ford",
  length: 4,
};

const carrosArray = Array.from(carross);

//ARRAY.ISARRAY()
//Verifica se o valor passado é uma array e retorna um valor booleano.
Array.isArray(li); // false

li = Array.from(li); // Array
Array.isArray(li); // true

//PROPRIEDADES E MÉTODOS DO PROTOTYPE
//[].length retorna o tamanho da array
const frutas = ["Banana", "Pêra", ["Uva Roxa", "Uva Verde"]];
frutas.length; // 3
frutas[0].length; // 6
frutas[1].length; // 4
frutas[2].length; // 2

// const nota1 = 10;
// const nota2 = 6.5;
// const nota3 = 8;
// const nota4 = 7.5;

// posições:
//             0    1   2   3
const notas = [10, 6.5, 8, 7.5];

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(media);

const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

console.log(
  `A aluna da posição 1 da lista de alunos é: ${listaDeAlunosEMedias[0][1]}.
    A nota dessa aluna é ${listaDeAlunosEMedias[1][1]}
    `
);
