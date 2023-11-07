//BOOLEAN
//Existem dois valores booleanos false ou true.
//Todo valor verdadeiro ou falso pode ser validade em uma estrutura if_else

//EXEMPLO

let possuiGraduacao = true;

if (possuiGraduacao) {
  console.log("É graduado");
} else {
  console.log("Não possui Graduação");
}

//O valor dentro dos parênteses sempre será avaliado em false ou true.

//CONDICIONAIS ELSE IF
//Se o if não for verdadeiro, ele testa o else if
let possuiDoutorado = false;
if (possuiDoutorado) {
  console.log("Possui graduação e doutorado");
} else if (possuiGraduacao) {
  console.log("Possui graduação, mas não possui doutorado");
} else {
  console.log("Não possui graduação");
}
// retorna Possui Graduação, mas não possui doutorado

//Exercicios
let temperature = 37.1;

if (temperature >= 37.5) {
  console.log("Febre alta");
} else if (temperature < 37.5 && temperature >= 37) {
  console.log("Febre moderada");
} else {
  console.log("saudável");
}


var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}