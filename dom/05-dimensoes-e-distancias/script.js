//HEIGHT E WIDTH
//Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only
const listaAnimais = document.querySelector(".animais-lista");

//section.clientHeight; // height + padding
//section.offsetHeight; // height + padding + border
//section.scrollHeight; // height total, mesmo dentro de scroll

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;

const primeiroh2 = document.querySelector("h2");
const h2left = primeiroh2.offsetLeft;

const h2rect = primeiroh2.getBoundingClientRect();

console.log(h2rect.top);

if (h2rect.top < 0) {
  console.log("Passou do elemento");
}

console.log(
  window.innerWidth,
  window.innerHeight,
  window.outerWidth,
  window.outerHeight,
  window.pageYOffset
);

//MATCHMEDIA();
//Utilize um media-querie como no CSS para verificar a largura do browser
//const small = window.matchMedia('(max-width: 600px)');

const small = window.matchMedia("(max-width: 600px)").matches;

if (small) {
  console.log("Usuário mobile");
} else {
  console.log("Usuário desktop");
}