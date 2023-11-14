//MÓDULOS
// Basta adicionar type="module" na tag script do HTML. Utilize a palavra chave export na frente do valor que deseja exportar (use default se for único). E import nome from arquivo.js para importar.

<script type="module" src="js/script.js"></script>;

// arquivo scroll-suave.js
export default function scrollSuave() {}

// arquivo script.js
import scrollSuave from "./scroll-suave.js";

scrollSuave();

//NAMED EXPORTS
//Você pode exportar mais de um valor. Quando for importar utilize as chaves para especificar cada valor. O nome importado deve ser igual ao exportado.
// arquivo scroll.js
export function scrollSuave() {
   
  };
  export function scrollAnimacao() {
   
  };
  
  // arquivo script.js
import { scrollSuave, scrollAnimacao } from './scroll.js';
scrollSuave();
scrollAnimacao();

// Importe todos os valores em um objeto
import * as scroll from './scroll.js';
scroll.scrollSuave();
scroll.scrollAnimacao();

//VALORES DO EXPORT
//Podemos exportar objetos, funções, classes, números, strings e mais.
// arquivo configuracao.js
export function scrollSuave() {};
export const ano = 2000;
export const obj = {nome: 'Ford'};
export const str = 'Frase';
export class Carro {};

// CARACTERÍSTICAS
// Strict mode

// 'use strict' por padrão em todos os arquivos.

// Variáveis ficam no module apenas

// Não vazam para o escopo globo.

// This fora de um objeto faz referência a undefined

// Ao invés de fazer referência ao window.

// Assíncrono