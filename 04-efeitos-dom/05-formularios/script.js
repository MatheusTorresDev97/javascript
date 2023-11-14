//FORMS
//É comum utilizarmos inputs de formulários para criarmos uma interface entre funções de JavaScript e o usuário final do site.
//Para isso precisamos aprender como pegar os valores dos formulários.

document.forms; // lista com os formulários
document.forms.contato; // form com nome contato
document.forms.contato.elements; // elementos
document.forms[0].elements[0].value; // valor do primeiro

//VALUES
//A propriedade value retorna o valor do elemento no formulário. Se adicionarmos um callback ao keyup (tecla levantar), podemos ficar de olho no evento e puxar o valor sempre que ele mudar. change dispara quando houver mudanças.

const form = document.getElementById("contato");

function handleChange(event) {
  const target = event.target;
  if (!target.checkValidity()) {
    target.classList.add("invalido");
    target.nextElementSibling.innerText = target.validationMessage;
  } else {
    target.classList.remove("invalido");
  }
}

form.addEventListener("change", handleChange);

//VALIDAÇÃO
//O método checkValidity verifica se um input com o atributo required, é válido ou não.
//A propriedade validationMessage possui a mensagem padrão de erro do browser. É possível modicar com setCustomValidity('')

//SELECT
const form2 = document.getElementById("cores");

function handleChange2(event) {
  document.body.style.backgroundColor = event.target.value;
}

form2.addEventListener("change", handleChange2);

//CHECKBOX

const form3 = document.getElementById("identidade");
function handleChange3(event) {
  if (event.target.checked) console.log(event.target.value);
}
form3.addEventListener("change", handleChange3);

//RADIO
//A diferença entre Radio e Checkbox é que radio aceita apenas uma seleção por grupo. Radio é agrupado pelo atributo name.

const elementosRadio = document.querySelectorAll('[name="instrumento"]');
function handleChange4(event) {
  if (event.target.checked) {
    console.log(event.target.value);
  }
}
elementosRadio.forEach((elemento) => {
  elemento.addEventListener("change", handleChange4);
});

//PEGANDO TODOS OS VALORES
//Ao invés de selecionarmos elemento por elemento, podemos utilizar um objeto para colocarmos todos os dados que o usuário colocar no formulário.

const dados = {};
function handleChange(event) {
  dados[event.target.name] = event.target.value;
}
form.addEventListener("change", handleChange);