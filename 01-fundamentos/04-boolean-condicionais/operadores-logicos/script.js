//Operadores lógicos

//2 Valores booleanos, quando verificados
//resultará em V ou F

let pao = true;
let queijo = false;

//&& Compara se uma expressão e a outra é verdadeira

console.log(pao && queijo); //retorna true

//|| Compara se uma expressão ou outra é verdadeira
console.log(pao || queijo); //retorna true

// NOT !
console.log(!queijo); //Negação !

//Operadores condicionais ternário

//Os operadores ternários, conhecidos como operadores de condição, como o nome sugere,
//são dependentes de condições e podem entregar valores diferentes com base nelas.

//condição ? valor1 : valor2

//Café da manhã bom !
const niceBreakfast = pao || queijo ? "Café bom" : "Café ruim";
console.log(niceBreakfast); // Café bom

let age = 18;

const maioridade = age >= 18 ? "Maior de idade" : "Menor de idade";
console.log(maioridade);

const idadeMinima = 18;

//condição                   //true                      //false
idadeMinima >= 18 ? console.log("Pode beber!") : console.log("Não pode beber");

let num = 1;

let res = !(num % 2) ? "Par" : "Impar";

// 0 = False
// 1 = True

console.log(res);

// OPERADORES LÓGICOS &&

//&& Compara se uma expressão e a outra é verdadeira
true && true; // true
true && false; // false
false && true; // false
"Gato" && "Cão"; // 'Cão'
5 - 5 && 5 + 5; // 0
"Gato" && false; // false
5 >= 5 && 3 < 6; // true

//Se ambos os valores forem true ele irá retornar o último valor verificado Se algum valor for false ele irá retornar o mesmo e não irá continuar a verificar os próximos

//OPERADORES LÓGICOS ||

//|| Compara se uma expressão ou outra é verdadeira
true || true; // true
true || false; // true
false || true; // true
"Gato" || "Cão"; // 'Gato'
5 - 5 || 5 + 5; // 10
"Gato" || false; // Gato
5 >= 5 || 3 < 6; // true

//Retorna o primeiro valor true que encontrar
