//Números
var idade = 28;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000

//OPERADORES ARITMÉTICOS
var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

//Lembrando que soma + em Strings serve para concatenar

//OPERADORES ARITMÉTICOS (STRINGS)
var soma = "100" + 50; // 10050
var subtracao = "100" - 50; // 50
var multiplicacao = "100" * "2"; // 200
var divisao = "Comprei 10" / 2; // NaN (Not a Number)

//NAN = NOT A NUMBER
var numero = 80;
var unidade = "kg";
var peso = numero + unidade; // '80kg'
var pesoPorDois = peso / 2; // NaN (Not a Number)

//OPERADORES ARITMÉTICOS UNÁRIOS
var incremento = 5;
console.log(incremento++); // 5
console.log(incremento); // 6

var incremento2 = 5;
console.log(++incremento2); // 6
console.log(incremento2); // 6

//O + e - tenta transformar o valor seguinte em número
var frase = "Isso é um teste";
+frase; // NaN
-frase; // NaN

var idade = "28";
+idade; // 28 (número)
-idade; // -28 (número)
console.log(+idade + 5); // 33

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1

// Operadores de atribuição (Assignment)
let x;

// assignment normal:
x = 1;

// addition assignment (adição):
x += 2;

// subtraction assignment (subtração):
x -= 1;

// multiplication assignment (multiplacação):
x *= 2;

// division assignment (divisão):
x /= 2;

// exponetiation assignment (exponenciação):
x **= 2;

// remainder assignment (resto de divisão):
x %= 2;
