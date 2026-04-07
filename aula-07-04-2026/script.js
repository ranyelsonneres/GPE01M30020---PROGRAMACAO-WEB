//objetos
const carro = new Object(); //estamos criando o objeto

//adicionando as propriedades do objeto
carro.marca = "Fiat";
carro.ano = 2026;
console.log(carro);

carro.marca = "Ferrari";
carro.ano = 2025;
console.log(carro);

//utilizando o construtor
function Pessoa(nome, idade){ //nome --> parametro
    this.nome = nome; //this.nome --> propriedade do objeto
    this.idade = idade;
};

//criar diversas instâncias de um mesmo objeto
const p1 = new Pessoa("Fulano", 12);
const p2 = new Pessoa("Ciclano", 13);
const p3 = new Pessoa("Beltrano", 30);
console.log(p1);
console.log(p2);

//percorrendo as instâncias do objeto "Pessoa"
const pessoas = [p1, p2, p3];
for (let pessoa of pessoas){
    console.log("--Pessoa---");
    for (let chave in pessoa){
        console.log(`${chave}: ${pessoa[chave]}`);
    };
};

//criar um programação orientado a objetos (organizar em classes)
class Animal {
    //construtor
    constructor(tipo, nome){
        this.tipo = tipo;
        this.nome = nome;
    };

    //constrói os métodos
    emitirSom(){
        return `${this.nome} faz um som`;
    };

};

//criar várias instâncias de um mesmo objeto
const gato = new Animal("Felino", "Denguinho");
console.log(gato.emitirSom());

const gato2 = new Animal("Felino", "Frajola");
console.log(gato2.emitirSom());


//modificadores de acesso em JavaScript
class ContaBancara {
    #saldo = 0; //propriedade privada (notação #)

    constructor(saldoInicial){
        this.#saldo = saldoInicial;
    }

    getSaldo(){ //método público para acessar a propriedade privada
        return this.#saldo;
    }
}

const conta = new ContaBancara(100);
console.log(conta.getSaldo()); //acessando o método público
//console.log(conta.#saldo); //vai dar erro, pois é uma propriedade privada

//objeto
const pessoa3 = { //tratar do mesmo elemento
    nome: "Pedro",
    idade: 30
};

//Arrays
let itens = ["Maça", "Laranja", 1, "Pedro"]; //tratar de diferentes elementos
console.log(itens);
console.log(itens[3]); //acessar uma determinada posição do array

//adicionar ao final
itens.push("uva");
console.log(itens);

//adicionar ao inicio
itens.unshift("pêra");
console.log(itens);

//adicionar em um posição específica
itens.splice(1, 0, "limão");
console.log(itens);

//remover de uma posição específica
itens.splice(5,1);
console.log(itens);
