//Number e Math
//É a construtora de números, todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos.
const ano = 2018;
const precoNew = new Number(99);

//NUMBER.PARSEFLOAT() E NUMBER.PARSEINT()
//parseFloat() serve para retornarmos um número a partir de uma string. 
//A String deve começar com um número. parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal
parseFloat("99.50"); // Mesma função sem o Number
Number.parseFloat("99.50"); // 99.5
Number.parseFloat("100 Reais"); // 100
Number.parseFloat("R$ 100"); // NaN

//N.TOFIXED(DECIMAIS)
//Arredonda o número com base no total de casas decimais do argumento.

const preco = 2.99;
preco.toFixed(); // 3

//N.TOLOCALESTRING(LANG, OPTIONS);
preco.toLocaleString("en-US", { style: "currency", currency: "USD" }); // $2.99
preco.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); // R$ 2,99

//MATH
//É um Objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.
Math.PI; // 3.14159
Math.E; // 2.718
Math.LN10; // 2.303

//MATH.ABS(), MATH.CEIL(), MATH.FLOOR() E MATH.ROUND()
//abs() retorna o valor absoluto, ou seja, transforma negativo em positivo. ceil() arredonda para cima, retornando sempre uma integral e floor para baixo.
// round() arredonda para o número integral mais próximo.
Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4

//MATH.MAX(), MATH.MIN() E MATH.RANDOM();
//max() retorna o maior número de uma lista de argumentos, min() o menor número e random() um número aleatório entre 0 e 1.

Math.max(5, 3, 10, 42, 2); //42
Math.min(5, 3, 10, 42, 2); //2

Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500); // entre 0 e 500
// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32;
//Math.floor(Math.random() * (max - min + 1)) + min;