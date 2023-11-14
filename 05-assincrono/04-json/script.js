const dados = fetch("./script.json")
    .then((r) => r.json())
    .then((json) => {
        json.forEach((aula) => {
            console.log(aula);
        });
    });

//JSON.PARSE() E JSON.STRINGIFY()

//JSON.parse() irá transformar um texto JSON em um objeto JavaScript.
const aulas = fetch("./script.json")
    .then((r) => r.text())
    .then((jsonText) => {
        const jsonFinal = JSON.parse(jsonText);
        console.log(jsonFinal);
    });

//JSON.stringify() irá transformar um objeto JavaScript em uma string no formato JSON.
//stringify transformando obj em formato json
const configuracoes = {
    player: "Google",
    tempo: 25.5,
    aula: "2.1 Javascript",
};

const stringConfig = JSON.stringify(configuracoes);
console.log(stringConfig);

//Podemos guardar no localStorage, uma string como valor de uma propriedade. E retornar essa string como um obj
localStorage.configuracoes = JSON.stringify(configuracoes);
const pegarConfiguracoes = JSON.parse(localStorage.configuracoes);