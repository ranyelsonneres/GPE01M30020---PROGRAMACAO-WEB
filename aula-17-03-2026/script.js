//buscar o elemento HTML
//buscamos pelo ID
let meuElemento = document.getElementById("paragrafo");
console.log(meuElemento);
console.log(meuElemento.textContent);

//buscamos o elemento pela classe
let paragrafo1 = document.getElementsByClassName("paragrafo");
console.log(paragrafo1);
//console.log(paragrafo1[0].textContent);

//for para imprimir todos os elementos da classe Paragrafo
for(let i=0;i<paragrafo1.length;i++){
    console.log(paragrafo1[i].textContent);
}

//buscamos o elemento pela tag
let paragrafo2 = document.getElementsByTagName("p");
console.log(paragrafo2);

//criar um elemento HTML via JavaScript
let destino = document.getElementById("elemento");
let elementoHTML = document.createElement("p");
elementoHTML.textContent = "Parágrafo criado via JavaScript";
destino.append(elementoHTML); //adicionar ao DOM

//criar a lista
let lista = document.getElementById("lista");
let ul = document.createElement("ul"); //lista não ordenada
let itens = ["Arroz", "Feijão", "Suco", "Laranja"];
//adicionar os itens a lista
for(i=0;i<itens.length;i++){
    //criar o elemento HTML li
    let li = document.createElement("li");
    li.textContent = itens[i]; //adiciona o conteúdo ao elemento li
    ul.append(li);
}
lista.append(ul);

//algoritmo
function somar(){
    //capturar o que o usuário digita
    let n1 = parseFloat(document.getElementById("num1").value);
    console.log(typeof n1);
    let n2 = parseFloat(document.getElementById("num2").value);
    let soma = n1 + n2;
    console.log(soma);
    let saida = `Resultado: <u>${soma}</u>`; //template literal
    document.getElementById("resultado").innerHTML = saida;
}
