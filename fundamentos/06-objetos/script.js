//OBJETOS
//CONJUNTO DE VARIAVEIS E FUNÇOES, QUE SÃO CHAMADAS DE PROPRIEDADES E MÉTODOS.
//Acesse propriedades de um objeto utilizando o ponto .

const pessoa = {
  nome: "Matheus",
  profissao: "Policial Militar",
  possuiFaculdade: true,
};

//MÉTODOS
//É UMA PROPRIEDADE QUE POSSUI UMA FUNÇÃO NO LOCAL DO SEU VALOR.

const quadrado = {
  lados: 4,
  area(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  },
};

quadrado.lados; // 4
quadrado.area(5); // 25
quadrado.perimetro(5); // 20

//CRIAR UM OBJETO
//Um objeto é criado utilizando as chaves {}

const menu = {
  width: 800,
  height: 50,
  backgroundColor: "#84E",
};

const bg = menu.backgroundColor; // '#84E'

//PALAVRA-CHAVE THIS
//this irá fazer uma referência ao próprio objeto.

const height = 120;
const menu1 = {
  width: 800,
  height: 50,
  metadeHeight() {
    return this.height / 2;
  },
};

menu1.metadeHeight(); // 25
// sem o this, seria 60

let dadosPessoais = {
  nome: "Matheus",
  sobrenome: "Torres",
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  },
};

console.log(dadosPessoais.nomeCompleto());

let cachorro = {
  raca: "Labrador",
  cor: "Preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homem") {
      return console.log("LATIR!!1");
    } else {
      return console.log("Dormir zzz");
    }
  },
};

cachorro.latir("criança");

//TUDO É OBJETO
//Strings, Números, Boolean, Objetos e mais, possuem propriedades e métodos. Por isso são objetos.

//Objeto Literal

const menu5 = {
  selector: ".principal",
  active() {
    const MenuElement = document.querySelector(this.selector);
    MenuElement.classList.add("active");
  },
};

menu.selector; //".principal"
menu.active(); //adicionar active ao menu
menu
  .hasOwnProperty("class") // método herdado

  [("10", "20", "30")].map(Number); //[10, 20, 30];
"JavaScript".toUpperCase(); //JAVASCRIPT

const body = document.querySelector("body");
body.classList.add("js"); // adiciona JS ao body
