//FOR...OF
//É possível fazemos um loop por cada iteração do objeto iterável utilizando o for...of. Além deste loop podemos também utilizar o Spread Operator nos mesmos.

const frutas = ['Banana', 'Morango', 'Uva'];
const frase = 'Isso e JavScript';

for(const fruta of frutas){
    console.log(fruta);
}

for(const char of frase){
    console.log(char);
}

//SPREAD E FOR...OF
//Com o for loop podemos manipular cada um dos elementos do objeto iterável

const buttons = document.querySelectorAll('button');

for(const btn of buttons){
    btn.style.background = 'blue';
}

//APENAS ITERÁVEIS
//O for...of não irá funcionar em um objeto comum que não seja iterável.


//FOR...IN
//Este loop irá retornar a chave (key) de todas as propriedades enumeráveis (que não sejam símbolos) de um objeto.

const carro = {
    marca: 'Honda',
    ano: 2018,
}

for(const propriedades in carro){
    console.log(propriedades);
}

//ARRAYS E FOR...IN
//Uma Array é um objeto, porém a chave de cada valor é igual ao seu index.

for(const index in frutas) {
    console.log(frutas[index]);
  }

//CHAVE E VALOR
//Utilizando o for...in podemos retornar todas as chaves e valores de propriedades enumeráveis.  
const btn = document.querySelector('button');
const btnStyles = getComputedStyle(btn)

for(const style in btnStyles){
    console.log(`${style}: ${btnStyles[style]}`);
}

// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li

const lista = document.querySelectorAll('li');

for(const li of lista){
    li.classList.add('Ativo');
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window


for(const all in window){
    console.log(all[windowKey])
}

