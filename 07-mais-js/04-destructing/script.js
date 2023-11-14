//DESTRUCTURING
//Permite a desestruturação de Arrays e Objetos. Atribuindo suas propriedades à novas variáveis.

const carro = {
    marca: 'Fiat',
    ano: 2018,
    portas: 4,
}

const { marca, ano } = carro;
console.log(marca);

//DESTRUCTURING OBJECTS
//A desestruturação irá facilitar a manipulação de dados. Principalmente quando temos uma grande profundidade de objetos.

//NESTING
//É possível aninhar uma desestruturação dentro de outra.

const cliente = {
    nome: 'Matheus',
    compras: {
        digitais: {
            livros: ['Livro 1', 'Livro 2'],
            videos: ['Video JS', 'Video HTML']
        },
        fisicas: {
            cadernos: ['Caderno 1']
        }
    }
}

const { livros, videos } = cliente.compras.digitais;

const atacantes = {
    nome: 'Gabigol',
    posicao: {
        ataque: ['Ponta Direita', 'Centroavante'],
        meioCampo: ['Camisa 10', 'Segundo-Atacante']
    },
    times: {
        brasil: ['Santos', 'Flamengo'],
        europa: ['Inter'],
    }
}

const { ataque } = atacantes.posicao;




const vendas = {
    nome: 'Matheus',
    compras: {
        digitais: {
            notebook: ['versao1', 'versao2'],
            tablet: ['lg', 'samsung']
        },
        fisicas: {
            smartphone: ['xiaomi', 'apple'],
            smartTv: ['tcl', 'prime']
        }
    }
}

const { digitais, digitais: { notebook }, fisicas: { smartTv } } = vendas.compras;

console.log(digitais);


//NOME DAS VARIÁVEIS
//É necessário indicar o nome da propriedade que você deseja desestruturar de um objeto. É possível mudar o nome da variável final com:

const clientee = {
    nome: 'Matheus',
    compras: 10,
}

const { nome, compras } = clientee;
//ou
const { nome: nomeCliente, compras: comprasCliente } = clientee;

console.log(nomeCliente);


//Valor Inical
//Caso a propriedade não exista o valor padrão dela será undefined. É possível modificar este valor no momento da desestruturação.

const cliente1 = {
    nomeee: 'Andre',
    comprass: 10,
}

const { nomeee, comprass, email = 'email@gmail.com', cpf } = cliente;
console.log(email) // email@gmail.com
console.log(cpf) // undefined

//DESTRUCTURING ARRAYS
//Para desestruturar array's você deve colocar as variáveis entre [] colchetes.

const frutas = ['Banana', 'Uva', 'Morango'];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];

// Com destructuring
const [primeira, segunda, terceira] = frutas;

//DECLARAÇÃO DE VARIÁVEIS
//A desestruturação pode servir para declararmos uma sequência de variáveis.
const primeiro = 'Item 1';
const segundo = 'Item 2';
const terceiro = 'Item 3';
// ou
const [primeiro1, segundo1, terceiro1] = ['Item 1', 'Item 2', 'Item 3'];

console.log(segundo1);


//function handleKeyboard(event){
//    console.log(event.key);
//}

//function handleKeybord({key}){
//    console.log(key);
//}

//document.addEventListener('keyup', handleKeybord);

// Extraia o backgroundColor, color e margin do btn
//const btn = document.querySelector('button');
//const btnStyles = getComputedStyle(btn);

//const {backgroundColor, margin, color} = btnStyles;





// Troque os valores das variáveis abaixo
let cursoAtivo = 'JavaScript';
let cursoInativo = 'HTML';

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];

// Corrija o erro abaixo
const cachorro = {
    nome: 'Bob',
    raca: 'Labrador',
    cor: 'Amarelo'
}

const { cor: cor } = cachorro;


const codigofontetv = {
    nome: 'Codigo Fonte TV',
    subs: '380mil',
    views: '18 milhões',
}

const { nome: canal } = codigofontetv;
console.log(canal);