const carros = ["Ford", "Fiat", "VW", "Honda"];
// [].POP()  remove o último elemento da array e retorna o mesmo.
const ultimoCarro = carros.pop(); // 'Honda'
carros; // ['Ford', 'Fiat', 'VW'];

//[].SHIFT() remove o primeiro elemento da array e retorna o mesmo.
const primeiroCarro = carros.shift(); // 'Ford'
carros; // ['Fiat', 'VW'];

const carros2 = ["Ford", "Fiat", "VW"];
//[].PUSH() adiciona elementos ao final da array e retorna o length da mesma.
carros.push("Ferrari"); // 4

//[].UNSHIFT() adiciona elementos ao início da array e retorna o length da mesma.
carros.unshift("Honda", "Kia");

console.log(carros2); //'Honda', 'Kia','Ford', 'Fiat', 'VW', 'Ferrari

//[].SLICE()
//[].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.

const alunos = [
  "João",
  "Juliana",
  "Ana",
  "Caio",
  "Lara",
  "Marjorie",
  "Guilherme",
  "Aline",
  "Fabiana",
  "Andre",
  "Carlos",
  "Paulo",
  "Bia",
  "Vivian",
  "Isabela",
  "Vinícius",
  "Renan",
  "Renata",
  "Daisy",
  "Camilo",
];

const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);

console.log(sala1);
console.log(sala2);

const linguagens = ["html", "css", "js", "php", "python", "js"];
const cloneLinguagens = linguagens.slice(3);

//[].SPLICE(index, remover, item1, item2, ...) adiciona valores na array a partir do index.
//Remove a quantidade de itens que for passada no segundo parâmetro (retorna esses itens).
const carros3 = ["Ford", "Fiat", "VW", "Honda"];
carros3.splice(1, 0, "Kia", "Mustang"); // []
carros3; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

carros3.splice(3, 2, "Ferrari"); // ['Fiat', 'VW']
carros3; // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']
//Index onda vai ser inserido, quantidade de remoções, item que será adicionado

const alunosNovos = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

alunosNovos.splice(1, 2, "Rodrigo");
//Primeiro Parametro = Aonde começara a ser removido.
//Segundo Parametro = Até onde ele será removido.
//Terceiro Parametro = O que vai ser colocado no lugar.

console.log(alunosNovos);

//[].SORT() Além de retornarem um valor, eles modificam a array original.
const instrumentos = ["Guitarra", "Baixo", "Violão"];
instrumentos.sort();
instrumentos; // ['Baixo', 'Guitarra', 'Violão']

const idades = [32, 21, 33, 43, 1, 12, 8];
idades.sort();
idades; // [1, 12, 21, 32, 33, 43, 8]

//[].REVERSE() inverte os itens da array e retorna a nova array.
const carros4 = ["Ford", "Fiat", "VW", "Honda"];
carros4.reverse(); // ['Honda', 'VW', 'Fiat', 'Ford'];

//FILL()
//fill(valor, inicio, final) preenche a array com o valor, do início até o fim.
["Item1", "Item2", "Item3", "Item4"].fill("Banana");
// ['Banana', 'Banana', 'Banana', 'Banana']

["Item1", "Item2", "Item3", "Item4"].fill("Banana", 2);
// ['Item1', 'Item2', 'Banana', 'Banana']

["Item1", "Item2", "Item3", "Item4"].fill("Banana", 1, 3);
// ['Item1', 'Banana', 'Banana', 'Item4']

//[].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array começando do inicio até o final e vai preencher a mesma com essa cópia.
//Caso omita os valores de início e final, ele irá utilizar como inicio o 0 e final o valor total da array.
["Item1", "Item2", "Item3", "Item4"].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2']

["Item1", "Item2", "Item3", "Item4"].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']

const copiarArray = ["Item1", "Item2", "Item3", "Item4", "item5"].copyWithin(
  2,
  0,
  2
);
//console.log(copiarArray); //Eu quero que a copia comece do item 3, comece do 0 e vá até o 2