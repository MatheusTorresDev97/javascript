//SUBCLASSES
//É possível criarmos uma subclasse, esta irá ter acesso aos métodos da classe à qual ela estendeu através do seu protótipo.
//METODOS
//Podemos escrever por cima de um método herdado.

class Veiculo {
    constructor(rodas) {
        this.rodas = rodas;
    }
    acelerar() {
        console.log('Acelerou');
    }
}

class Moto extends Veiculo {
    acelerar() {
        super.acelerar()
        console.log('Muito');
    }
    empinar() {
        console.log('Empinou com ' + this.rodas + ' rodas');
    }
}

const honda = new Moto(2);
honda.empinar();