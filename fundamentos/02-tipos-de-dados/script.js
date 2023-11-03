//Tipos de dados
//Todos são primitivos exceto os objetos.
//Primitivos são dados imutáveis.

const nome = "Matheus"; //STRING
const idade = 25; //NUMBER
const possuiFaculdade = true; //Boolean
let time; //Undefined
let comida = null; //Null
var simbolo = Symbol(); // Symbol
var novoObjeto = {}; // Object

//VERIFICAR TIPO DE DADO
console.log(typeof nome);

//STRING
//são sequências de texto. Quando você dá a uma variável um valor em texto (string), você precisa envolver o texto em aspas simples ou duplas; caso contrário, o JavaScript vai tentar interpretá-lo como sendo outro nome de variável.
//Pode somar uma string e assim concatenar as palavras.
const nomee = "Matheus";
const sobrenome = "Torres";

const nomeCompleto = nomee + " " + sobrenome;
console.log(nomeCompleto);

const texto1 = "Olá, mundo!";
const texto2 = "Olá, mundo!";
const senha = "senhaSuperSegura456!";
const StringDeNumeros = "34567";

//Pode somar números com strings, o resultado final é sempre uma string.
var gols = 1000;
var frase = "Romário fez " + gols + " gols";

const citacao = "Meu nome é ";
const meuNome = "Matheus";

console.log(citacao + meuNome);

//TEMPLATE STRING
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String
