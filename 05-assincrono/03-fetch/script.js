//FETCH API
//Permite fazermos requisições HTTP através do método fetch().
//Este método retorna a resolução de uma Promise. Podemos então utilizar o then para interagirmos com a resposta, que é um objeto do tipo Response.

const doc = fetch("./doc.txt");
doc.then((resolucao) => {
    console.log(resolucao);
});

//RESPONSE
//O objeto Response, possui um corpo com o conteúdo da resposta.
//Esse corpo pode ser transformado utilizando métodos do protótipo do objeto Response. Estes retornam outras promises.
fetch("./doc.txt")
    .then((r) => r.text())
    .then((corpo) => console.log(corpo));

fetch("./doc.txt")
    .then((r) => r.text())
    .then((body) => {
        const divConteudo = document.querySelector(".fla");
        divConteudo.innerHTML = body;
    });

//SERVIDOR LOCAL
//O fetch faz uma requisição HTTP/HTTPS.
//Se você iniciar um site local diretamente pelo index.html, sem um servidor local, o fetch não irá funcionar.

//JSON()
//Um tipo de formato de dados muito utilizado com JavaScript é o JSON (JavaScript Object Notation), pelo fato dele possuir basicamente a mesma sintaxe que a de um objeto js.
//.json() transforma um corpo em json em um objeto JavaScript.
const cep = fetch("https://viacep.com.br/ws/49010620/json/");

cep
    .then((response) => response.json())
    .then((cep) => {
        console.log(cep.bairro, cep.logradouro, cep.uf);
        const cep1 = document.querySelector(".cep");
        cep1.innerText = cep.bairro;
        cep1.innerText += cep.logradouro;
    });

//.TEXT()
//Podemos utilizar o .text() para diferentes formatos como txt, json, html, css, js e mais.

//HTML E .TEXT()
//Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e inserir em uma div com o innerHTML.
//A partir dai podemos manipular esses dados como um DOM qualquer.
const sobre = fetch("./sobre.html");

sobre
    .then((r) => r.text())
    .then((body) => {
        const divv = document.querySelector(".teste");
        divv.innerText = body;
    });

//.BLOB()
//Um blob é um tipo de objeto utilizado para representação de dados de um arquivo.
//O blob pode ser utilizado para transformarmos requisições de imagens por exemplo. O blob gera um URL único.
const blob = document.createElement("div");
fetch("./images.png")
    .then((response) => response.blob())
    .then((imgBlob) => {
        const blobUrl = URL.createObjectURL(imgBlob);
        const imagemDom = document.querySelector("img");
        imagemDom.src = blobUrl;
    });

//.CLONE()
//  Ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada. Por isso existe o método clone, caso você necessite transformar uma resposta em diferentes valores.
const dive = document.createElement("div");
fetch("https://viacep.com.br/ws/01001000/json/").then((response) => {
    const cloneResponse = response.clone();
    response.json().then((json) => {
        console.log(json);
    });
    cloneResponse.text().then((text) => {
        console.log(text);
    });
});

//HEADERS
//É uma propriedade que possui os cabeçalhos da requisição. É um tipo de dado iterável então podemos utilizar o forEach para vermos cada um deles.
const novaDiv = document.createElement("div");
fetch("https://viacep.com.br/ws/01001000/json/").then((response) => {
    response.headers.forEach(console.log);
});

//.STATUS E .OK
//Retorna o status da requisição. Se foi 404, 200, 202 e mais. ok retorna um valor booleano sendo true para uma requisição de sucesso e false para uma sem sucesso.

const diAv = document.createElement("div");

fetch("https://viacep.com.br/ws/01001000/json/").then((response) => {
    console.log(response.status, response.ok);
    if (response.status === 404) {
        console.log("Página não encontrada");
    }
});