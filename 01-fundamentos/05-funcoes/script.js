//FUNÇÕES
//Bloco de código que pode ser executado e reutilizado. Valores podem ser passados por uma função e a mesma retorna outro valor

function areaQuadrada(lado) {
  return lado * lado;
}

areaQuadrada(4); // 16

//Chamada de function declaration
//Sintaxe da função
function pi() {
  return 3.14;
}

const total = pi() * 5;
//Parenteses () executam uma função

console.log(total);

//PARÂMETROS E ARGUMENTOS
//Ao criar uma função, você pode definir parâmetros.
//Ao executar uma função, você pode passar argumentos.

// peso e altura são os parâmetros
function imc(peso, altura) {
  const imc = peso / altura ** 2;
  return imc;
}

imc(80, 1.8); // 80 e 1.80 são os argumentos
imc(60, 1.7); // 60 e 1.70 são os argumentos

function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e minha idade é ${idade}`;
}

nomeIdade("Matheus", 25);

function corFavorita(cor) {
  if (cor === "azul") {
    return "Você gosta do céu";
  } else if (cor === "verde") {
    return "Você gosta de mato";
  } else {
    return "Você não gosta de nada";
  }
}

corFavorita(); // retorna 'Você não gosta de nada'
//Se apenas definirmos a função com o function e não executarmos a mesma, nada que estiver dentro dela irá acontecer

//ARGUMENTOS PODEM SER FUNÇÕES
//Chamadas de Callback, geralmente são funções que ocorrem após algum evento.

addEventListener("click", () => {
  console.log("Clicou");
});

// A função possui dois argumentos
// Primeiro é a string 'click'
// Segundo é uma função anônima

//VALORES RETORNADOS
//Uma função pode retornar qualquer tipo de dado e até outras funções.

function terceiraIdade(idade) {
  if (typeof idade !== "number") {
    return "Informe a sua idade!";
  } else if (idade >= 60) {
    return true;
  } else {
    return false;
  }
}

//Variáveis e funções definidas dentro de um bloco {}, não são visíveis fora dele.

//Arrow Functions
//Sintaxe curta em relação a function expression. Basta remover a palavra chave function e adicionar a fat arrow => após os argumentos.

const soma = (v1, v2) => {
  return v1 + v2;
};

console.log(soma(10, 2));

const nome = (n) => n;

const soma2 = (num1, num2) => num1 + num2;

const somaNumerosPequenos = (num1, num2) => {
  if (num1 || num2 > 10) {
    return "somente números de 1 a 9";
  } else {
    return num1 + num2;
  }
};

// Hoisting: arrow function se comporta como expressão
