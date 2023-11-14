const comidas = ["Pizza", "Frango", "Carne", "Macarrão"];
// Remova o primeiro valor de comidas e coloque em uma variável
// Remova o último valor de comidas e coloque em uma variável
// Adicione 'Arroz' ao final da array
// Adicione 'Peixe' e 'Batata' ao início da array

const primeiraComida = comidas.shift();
const ultimaComida = comidas.pop();
comidas.push("Arroz");
comidas.unshift("Peixe", "Batata");

console.log(comidas);

const estudantes = ["Marcio", "Brenda", "Joana", "Kleber", "Julia"];
// Arrume os estudantes em ordem alfabética
// Inverta a ordem dos estudantes
// Verifique se Joana faz parte dos estudantes
// Verifique se Juliana faz parte dos estudantes

estudantes.sort(); //Arruma a ordem dos estudantes
estudantes.reverse(); //Inverte a ordem dos estudantes
estudantes.includes("Joana"); //Verifica Joana
estudantes.includes("Juliana"); //Verifica Juliana

let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`;

// Substitua section por ul e div com li,
// utilizando split e join

html = html.split("section").join("ul").split("div").join("li");

const carros = ["Ford", "Fiat", "VW", "Honda"];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carrosCopia = carros.slice();

carros.pop();

console.log(carrosCopia);
console.log(carros);

const alunos = ["João", "Juliana", "Caio", "Ana"];
const notas = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, notas];

//Crie uma função que recebe como argumento o nome de um aluno.
const exibeNomeENota = (aluno) => {
    //Verifique se o aluno está presente na lista  (Verificar --> includes) // Aluno = Array1
    const alunoCadastrado = listaDeAlunosEMedias[0].includes(aluno);

    if (alunoCadastrado) {
        //Condicional
        const [alunos, medias] = listaDeAlunosEMedias; //Desestruturação da array
        const indice = alunos.indexOf(aluno); //buscando o indice do aluno caso tenha o aluno
        const mediaAluno = medias[indice]; //conforme o indice encontrado procurar a media atribuida
        console.log(`${aluno} tem a média ${mediaAluno}`);
    } else {
        console.log(`${aluno} não está cadastrado!`);
    }
};

exibeNomeENota("João");

//O método includes() verifica se o parâmetro passado para ele está incluso na lista. Quando está incluso, o retorno será o valor booleano true (verdadeiro).
// Do contrário, o retorno será false(falso). Por isso, podemos usar o includes() como condição da estrutura if.
//o método includes() confere se o elemento passado por parâmetro está incluso em uma lista;
//o método indexOf() retorna o índice do elemento passado por parâmetro

//Verifiquei que o aluno existe se sim puxou o indice dele pelo indice procuro a nota com correspondente ao indice
//Retorno

//Puxar o indice == indexOf Puxar a primeira array[0] e o index do aluno
//Puxa a segunda array 10 e o indice no caso 0

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ["Guitarra", "Baixo", "Bateria", "Teclado"];
const possuiBaixo = instrumentos.some((baixo) => {
    return baixo === "Baixo";
});

// Retorne o valor total das compras
const compras = [
    {
        item: "Banana",
        preco: "R$ 4,99",
    },
    {
        item: "Ovo",
        preco: "R$ 2,99",
    },
    {
        item: "Carne",
        preco: "R$ 25,49",
    },
    {
        item: "Refrigerante",
        preco: "R$ 5,35",
    },
    {
        item: "Quejo",
        preco: "R$ 10,60",
    },
];

const valorTotal = compras.reduce((acumulador, item) => {
    const precoLimpo = +item.preco.replace("R$ ", "").replace(",", ".");

    return acumulador + precoLimpo;
}, 0);