//[].JOIN(separador) junta todos os valores da array e retorna uma string com eles.
//Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.

const linguagens = ["html", "css", "js", "php", "python"];
linguagens.join(); // 'html,css,js,php,python'
linguagens.join(" "); // 'html css js php python'
linguagens.join("-_-"); // 'html-_-css-_-js-_-php-_-python

let htmlString = "<h2>Título Principal</h2>";
htmlString = htmlString.split("h2");
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join("h1");
// <h1>Título Principal</h1>

//MÉTODOS DE ACESSO [].CONCAT()
//Retornam uma array modificada. [].concat() irá concatenar a array com o valor passado.

const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];

//[].INCLUDES(), [].INDEXOF() E [].LASTINDEXOF()
//[].includes(valor) verifica se a array possui o valor e retorna true ou false.
//[].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array.
// Já o [].lastIndexOf(valor) retorna o index do último.

const linguagens2 = ["html", "css", "js", "php", "python", "js"];

linguagens2.includes("css"); // true
linguagens2.includes("ruby"); // false
linguagens2.indexOf("python"); // 4
linguagens2.indexOf("js"); // 2
linguagens2.lastIndexOf("js"); // 5



const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];


const listaDeAlunosEMedias = [alunos, medias];

const exibeNomeENota = (aluno) => {
  if (listaDeAlunosEMedias[0].includes(aluno)) {
    const [alunos, medias] = listaDeAlunosEMedias;
    const indice = alunos.indexOf(aluno);
    const mediaDoAluno = medias[indice];
    console.log(`${aluno} tem a média ${mediaDoAluno}.`);
  } else {
    console.log("Aluno não encontrado!");
  }
};

exibeNomeENota("Ana");