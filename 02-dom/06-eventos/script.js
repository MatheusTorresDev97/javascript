//ADDEVENTLISTENER
//Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento.
//É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima

//EVENT
//O primeiro parâmetro do callback é referente ao evento que ocorreu.
const img = document.querySelector("img");
const callback = (evento) => {
  console.log(evento);
};

img.addEventListener("click", callback);

//PROPRIEDADES DO EVENT
const animaisLista = document.querySelector("animais-lista");
const executarCallback = (event) => {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
};

animaisLista.addEventListener("click", executarCallback);

//EVENT.PREVENTDEFAULT()
//Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.

const linksExterno = document.querySelector('a[href^="http"]');
const clickNoLink = (event) => {
  event.preventDefault();
  console.log(event.currentTarget.href);
};

linksExterno.addEventListener("click", clickNoLink);

//This
//A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto.
//No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.

function callback(event) {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute('src'));
}

img.addEventListener('click', callback);

//DIFERENTES EVENTOS
//Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais. 
//Eventos podem ser adicionados a diferentes elementos, como o window e document também.

////KEYBOARD
//Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.
// h1.addEventListener('click', handleEvent);
// h1.addEventListener('mouseenter', handleEvent);
// h1.addEventListener('mousemove', handleEvent);

// window.addEventListener('scroll', handleEvent);
// window.addEventListener('resize', handleEvent);

function handleKeyboard(event) {
  if(event.key === 'a') {
    document.body.classList.toggle('azul');
  }
}

window.addEventListener('keydown', handleKeyboard);

const imgs = document.querySelectorAll('img');

function handleImg(event) {
  console.log(event.currentTarget.getAttribute('src'));
}

imgs.forEach((img) => {
  img.addEventListener('click', handleImg);
});