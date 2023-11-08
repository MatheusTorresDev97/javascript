//OBJETOS
//Criar um objeto é simples, basta definirmos uma variável e iniciar a definição do seu valor com chaves {}.

const carros = {
    marca: "Marca",
    preco: 0,
};

//CONSTRUCTOR FUNCTIONS
// Funções Construtoras são responsáveis por construir novos objetos sempre que chamamos a mesma.

//A palavra chave new é responsável por criar um novo objeto baseado na função que passarmos a frente dela
function Carro() {
    this.marca = "Marca";
    this.preco = 0;
}

const honda = new Carro();
honda.marca = "Honda";
honda.preco = 4000;

const fiat = new Carro();
fiat.marca = "Fiat";
fiat.preco = 3000;

//PARÂMETROS E ARGUMENTOS
//Podemos passar argumentos que serão utilizados no momento da criação do objeto.
function CarroNovo(marca, preco) {
    this.marca = marca;
    this.preco = preco;
}

const hondaa = new Carro("Honda", 4000);
const fiatt = new Carro("Fiat", 3000);

//THIS KEYWORD
//O this faz referência ao próprio objeto construído com a Constructor Function.
function NovoCarro(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    this.marca = marca;
    this.preco = precoFinal;
}

//Variáveis dentro da Constructor estão "protegidas".
const honda2 = new NovoCarro("Honda", 2000);

//EXEMPLO REAL
const Dom = {
    seletor: "li",
    element() {
        return document.querySelector(this.seletor);
    },
    ativo() {
        this.element().classList.add("ativo");
    },
};

Dom.ativo(); // adiciona ativo ao li
Dom.seletor = "ul";
Dom.ativo(); // adiciona ativo ao ul

//Um objeto criado com uma Constructor, não irá influenciar em outro objeto criado com a mesma Constructor.

const lista = new Dom();
lista.seletor = "ul";
lista.ativo();

const lastLi = new Dom();
lastLi.seletor = "li:last-child";
lastLi.ativo();

// Transforme o objeto abaixo em uma Constructor Function
const pessoa = {
    nome: "Nome pessoa",
    idade: 0,
    andarr() {
        console.log(this.nome + " andou");
    },
};

function Pessoa(nome, idade) {
    (this.nome = nome),
        (this.idade = idade),
        function andar() {
            console.log(this.nome + " andou");
        };
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const Joao = new Pessoa("João", 20);
const Maria = new Pessoa("Maria", 25);
const Bruno = new Pessoa("Bruno", 15);

// Crie uma Constructor Function (Dom) para manipulação
// de listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos
const listas = {
    seletor: "ul",
    element() {
        return document.querySelector(this.seletor);
    },
    ativo() {
        this.element.classList.add("ativo");
    },
    remove() {
        this.element.classList.remove("ativo");
    },
};