//SWITCH
//Sintaxe
 switch(expression){
     case 'a':
         //código
         break
     case 'b':
         //código para expression b
         console.log('Funcionou');
         break    
     default:
         console.log('default')
     break
 }


//Exercicios

let corFavorita = "Azul";

switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu.");
    break;
  case "Vermelho":
    console.log("Olhe para rosas.");
    break;
  case "Amarelo":
    console.log("Olhe para o sol.");
    break;
  default:
    console.log("Feche os olhos");
}

function calculate(n1, operator, n2){
    let result

    switch(operator) {
        case '+':
            result = n1 + n2;
            break
        case '-':
            result = n1 - n2;
            break
        case '*':
            result = n1 * n2;
            break
        case '/':
            result = n1 / n2;
            default:
                console.log('Não implementado!');
                break
    }

    return result;
}

let colocacao = 1;

switch(colocacao){
    case 1:
        console.log('Primeiro Lugar');
        break
    case 2:
        console.log('Segundo Lugar');
        break
    case 3:
        console.log('Terceiro Lugar');
        break
    case 4, 5, 6:
        console.log('Prêmio de participação');
        break
    default:
        console.log('Não foi ranqueado');
        break
}

