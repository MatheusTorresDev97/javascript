//VARIAVEIS
//Guardam um valor na memória e permitem a reutilização do mesmo.
//Iniciam com a palavra var, let ou const

//Variáveis também podem conter dados complexos e até mesmo funções completas

//Exemplo
var idade = 25;
let possuiFaculdade = true;
const nome = "Matheus";

//Pode declarar ela e não atribuir valor inicialmente.
let app;

//É possível mudar os valores atribuídos a variáveis declaradas com var e let.
//Porém não é possível modificar valores das declaradas com const

//var (escopo global) - escopo fora do bloco.
//let (escopo local) - escopo restrito ao bloco.
//const (não permitindo reatribuição e nem redeclaração) - constante.

//ESCOPO DE FUNÇÃO
//Variáveis declaradas dentro de funções não são acessadas fora das mesmas.

function mostrarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostrarCarro(); // Fusca no console
//console.log(carro); // Erro, carro is not defined

//VARIÁVEL GLOBAL (ERRO)
//Declarar variáveis sem a palavra chave var, const ou let, cria uma variável que pode ser acessar em qualquer escopo (global). Isso é um erro.

//ESCOPO DE FUNÇÃO (PAI)
var carro = "Fusca";

function mostrarCarro() {
  var frase = `Meu carro é um ${carro}`;
  console.log(frase); //Meu carro é um undefined
}

mostrarCarro(); // Meu carro é um Fusca
console.log(carro); // Fusca

//ESCOPO DE BLOCO
//Variáveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declarmos uma variável é utilizando const e let, pois estas respeitam o escopo de bloco.
if (true) {
  var carro = "Fusca";
  console.log(carro);
}
console.log(carro); // Carro

//VAR VAZA O BLOCO
//Mesmo com a condição falsa, a variável ainda será declarada utilizando hoisting e o valor ficará como undefined.
if (false) {
  var carro = "Fusca";
  console.log(carro);
}
console.log(carro); // undefined

//utilizar apenas const e let para declarmos variáveis.

//CONST
//Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.

const mes = "Dezembro";
mes = "Janeiro"; // erro, tentou modificar o valor
// const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: "Dezembro",
  ano: 2018,
};

data.dia = 29; // Funciona
data = "Janeiro"; // erro

//LET
//Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.
// let ano;
ano = 2018;
ano++;
console.log(ano); // 2019

let ano = 2020; // erro, redeclarou a variável


//Exercicios

//Exercicios 1
const nome2 = 'Matheus';
const idade = 25;
let comida;
comida = 'Pizza';

//Exercicio 2
const altura = 1.80;
const peso = 100;

const imc = peso / (altura * altura)

console.log(`Meu nome é ${nome}, tenho ${idade} anos, ${altura} cm de altura, ${peso} kg e meu IMC é ${imc.toFixed(2)}`);

//Exercicio 3
// Por qual motivo o código abaixo retorna com erros?

var cor = 'preto';
const marca = 'Fiat';
let portas = 4;

console.log(cor, marca, portas);

//Exercicio 4
// Como corrigir o erro abaixo?
function somarDois(x) {
const dois = 2;
return x + dois;
}
function dividirDois(x) {
const dois = 2;
return x / dois;
}
somarDois(4);
dividirDois(6);