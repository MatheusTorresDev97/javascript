//REST
//Nos permite representar um número indefinido de argumentos como um array.

function soma(...valores) {
    let resultado = 0;
  
    for (const number of valores) {
      resultado += number;
    }
    return resultado;
  }
  
  console.log(soma(10, 5, 6, 8));
  
  const produtos = [
      { descricao: 'Papel Ofício', quantidade: 10, valor: 10.50 },
      { descricao: 'Lapis preto', quantidade: 20, valor: 0.50 }
    ]
  
    function total (...produtos) {
      return produtos
        .map(produto => produto.quantidade * produto.valor)
        .reduce((a, b) => a + b, 0)
    }
  
    console.log(total(...produtos)) 


//SPREAD
//Permite expandir uma expressão em um local que receba múltiplos argumentos ou elementos.
//o operador Spread também utiliza os ... para ser ativado. O spread irá distribuir um item iterável, um por um.

//Exemplo 1: Spread em chamadas de função
const soma = (a, b) => a + b;
const valores = [10, 50];
console.log(soma(...valores)); //saida : 60 

//Exemplo 2: Podemos utilizar o spread para concatenar dois Arrays 
let n1 = [10,20,30];
let n2 = [11,20,22,33,44,55];
let n3 = [];

console.log('n1: ' + n1);
console.log('n2: ' + n2);
console.log('n3: ' + n3);

n3 = [...n1, ...n2]
console.log('n3: ' + n3);

//Exemplo 3: Spread em uma função

const jogador1 = {
    nome: "Matheus",
    energia: 100,
    vidas:3,
    magia: 150
}

const jogador2 = {
    nome: "Matheus Torres",
    energia: 100,
    vidas:5,
    velocidade: 80
}

const novoJogador={
    ...jogador1, ...jogador2
}

console.log(novoJogador);

//Exemplo 4: spread para recuperar um número de argumentos indefinidos e defini-los

const logger = (valorA, ...valorB) => {
    console.log(valorA, valorB);
}

logger('Matheus', 'Torres', 'O Melhor');


//SPREAD ARGUMENT
//O Spread pode ser muito útil para funções que recebem uma lista de argumentos ao invés de uma array.
const numeroMaximo = Math.max(4,5,20,10,30,2,33,5); // 33

const listaNumeros = [1,13,21,12,55,2,3,43];
const numeroMaximoSpread = Math.max(...listaNumeros);


//TRANSFORMAR EM ARRAY
//É possível transformar itens iteráveis em uma array real com o spread.


const objs1 = document.getElementsByTagName('div');
const objs2 = [...document.getElementsByTagName('div')];

console.log(objs1);
console.log(objs2);

const frutas = ['Banana', 'Uva', 'Morango'];

const comidas = ['Pizza', 'Batata'];

comidas.push(...frutas)

console.log(comidas);