//TRUTHY E FALSY

//Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.

// Falsy
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``

//Todo o resto é truthy

//OPERADOR LÓGICO DE NEGAÇÃO !
//O operador !, nega uma operação booleana. Ou seja, !true é igual a false

// Truthy
if(!true) // false
if(!1) // false
if(!'') // true
if(!undefined) // true
if(!!' '); // true
if(!!''); // false

//OPERADORES DE COMPARAÇÃO
//Vão sempre retornar um valor booleano
10 > 5; // true
5 > 10; // false
20 < 10; // false
10 <= 10 // true
10 >= 11 // false

//OPERADORES DE COMPARAÇÃO
//O == faz uma comparação não tão estrita e o === faz uma comparação estrita, ou seja, o tipo de dado //deve ser o mesmo quando usamos ===

10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10 // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true

//===e !==— testar se um valor é idêntico ou não idêntico a outro.

