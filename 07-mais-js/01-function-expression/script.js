//FUNCTION DECLARATION
//São duas as formas mais comuns de declararmos uma função. A que utilizamos até o momento é chamado de Function Declaration.
function somar(a,b) {
    return a + b;
  }
  
  somar(4,2); // 6

  
//FUNCTION EXPRESSION
//É criada a partir da declaração de uma variável, na qual assinalamos uma função. Esta função pode ser anônima ou nomeada. A mesma poderá ser ativada através da variável assinalada.
const somar = function(a,b) {
    return a + b;
  }
  
  somar(4,2); // 6
  
//HOISTING
//Function Declarations são completamente definidas no momento do hoisting, já function expressions apenas serão definidas no momento da execução. Por isso a ordem da declaração de uma FE possui importância.


//ARROW FUNCTION
//Podemos criar utilizando arrow functions.

const quadrado = a => a * a;
quadrado(4) // 16

//Geralmente o uso entre expression / declaration é uma questão de preferência. Function Expression força a criação da mesma antes de sua ativação, o que pode contribuir para um código mais estruturado.


// Remova o erro

const priceNumber = n => +n.replace('R$', '').replace(',', '.');
priceNumber('R$ 99,99');

// Crie uma IIFE e isole o escopo
// de qualquer código JS.

// Como podemos utilizar
// a função abaixo.
const active = callback => callback();