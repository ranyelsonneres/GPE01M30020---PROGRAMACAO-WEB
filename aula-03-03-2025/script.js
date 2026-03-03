//alert("Página carregada");

//variaveis
var animal = "gato";
console.log(animal);

let nomeCompleto = "Fulano da Silva"
console.log(nomeCompleto)

var valor0 = 10;
let valor1 = '10';
const valor2 = 10;

valor0 = 15;
console.log(valor0);
//valor2 = 15;
console.log(valor0);
console.log(valor2);

//verificar o tipo
console.log(typeof valor0);
console.log(typeof valor1);

//algoritmo: entrada + processamento + saída
var nome = window.prompt("Nome: ");
//console.log("Seja bem-vindo " + nome + " e aproveite a estadia");

//template literal, utiliza-se "crase"
console.log(`Seja bem-vindo ${nome} e aproveite a estadia`);
document.writeln(`Seja bem-vindo ${nome} e aproveite a estadia`);

//operadores artiméticos
//Exemplos: + / * -  

//operadores de comparação
// ==  === 
console.log(5 == '5'); //olhar apenas os valores
console.log(5 === '5'); //olhar o tipo e o valor (conteúdo)

//Criar um sistema que realize a soma de dois números
//o usuário vai digitar os numeros e você deverá apresentar a soma
var n1 = parseInt(window.prompt("Número 1: "));
console.log(typeof n1);
var n2 = parseInt(window.prompt("Número 2: "));
var soma = n1 + n2;
document.writeln(`Resultado ${soma}.`);


//estrutura de controle
//if-else
if (soma >=18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

//for
for (let i=0; i<5;i++){
    console.log("Iteração: " + i);
}

//switch-case
var diaSemana = 3;
switch (diaSemana){
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    default:
        console.log("Escolha uma opção");
}

//while
while (i< 5){
    console.log("Iteração: " + i);
    i++;
}
