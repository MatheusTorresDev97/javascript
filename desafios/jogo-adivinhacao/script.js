//VARIAVEIS
//Seleção de Elementos do DOM
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
//Gera um número Aleátorio
let randomNumber = Math.round(Math.random() * 10);
//Quantidade de Tentativas 
let xAttempts = 1;

// EVENTOS
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", handleEnterClick);

//FUNÇÕES CALLBACKS
function handleTryClick(event) {
    event.preventDefault();

    const inputNumber = Number(document.querySelector("#inputNumber").value);

    if (numberValue < 1 || numberValue > 10) {
        alert('Número inválido, digite um número entre 1 e 10');
        return;
    }

    if (numberValue == randomNumber) {
        toogleScreen();

        screen2.querySelector(
            "h2"
        ).innerText = `acertou em ${xAttempts} tentativas`;
    }

    inputNumber.value = "";
    xAttempts++;
}

function handleResetClick() {
    toogleScreen();
    xAttempts = 1;
    randomNumber = Math.round(Math.random() * 10);
}

function toogleScreen() {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function handleEnterClick(e) {
    if (e.key == "Enter" && screen1.classList.contains("hide")) {
        handleResetClick();
    }
}