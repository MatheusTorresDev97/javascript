//PROTOTYPE
//A propriedade prototype é um objeto adicionado a uma função quando a mesma é criada.

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
}
const matheus = new Pessoa("Matheus", 25);

console.log(Pessoa.prototype); // retorna o objeto
console.log(andre.prototype); // undefined

//FUNCAO.PROTOTYPE
//É possível adicionar novas propriedades e métodos ao objeto prototype.

Pessoa.prototype.andar = function () {
    return this.nome + " andou";
};
Pessoa.prototype.nadar = function () {
    return this.nome + " nadou";
};
console.log(Pessoa.prototype); // retorna o objeto

//ACESSO AO PROTÓTIPO
//O objeto criado utilizando o construtor, possui acesso aos métodos e propriedades do protótipo deste construtor. Lembrando, prototype é uma propriedade de funções apenas.
matheus.nome;
matheus.idade;
matheus.andar()

//HERANÇA DE PROTÓTIPO
//O objeto possui acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto. 
//O objeto abaixo possui acesso a métodos que nunca definimos, mas são herdados do protótipo de Object.
Object.prototype;
matheus.toString();
matheus.isPrototypeOf();
matheus.valueOf();

//CONSTRUTORES NATIVOS
//Objetos, Funções, Números, Strings e outros tipos de dados são criados utilizando construtores.
// Esses construtores possuem um protótipo com propriedades e métodos, que poderão ser acessadas pelo tipo de dado.
const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;