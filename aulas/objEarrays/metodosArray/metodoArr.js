//Executa com control + alt + n para compilar no console.
/*
Metodos prontos do javascript para se trabalhar com array
*/

// Métodos push e pop: eles insere e remove sempre no fim do array
// push -> inserir um elemento no array
// pop -> remover um elemento no array

//------USANDO O POP-----------------------
/*let pessoas = ['Miguel','João','Ricardo'];
console.log('Lista de pessoas: ' + pessoas);
let pessoaRemovida = pessoas.pop();
console.log('Pessoa removida: ' + pessoaRemovida);
//----USANDO O PUSH------------------------
pessoas.push('Ruty');
console.log('Pessoa adicionada: ' + pessoas);*/

///////METODOS SHIFT E UNSHIFT ///////////////////
// shift -> remmove o primeiro elemento de um array.
// unshift -> adiciona um ou mais elementos no inico de um array;

/////usando o shift:///////////
/*
let frutas = ['maçã','melão','Uva'];
console.log('Lista das Frutas: ' + frutas);
let frutaRemovida = frutas.shift();
console.log('fruta removida: ' + frutaRemovida);

////usando o unshift:////////////////////
frutas.unshift('Jaca');
console.log('fruta adicionada ' + frutas);*/

///// indexOf e lastIndexOf/////////////////////

// indexOf -> encontra o indice de um determinado elemento;
// lastIndexOf -> encontra o último indice de um elemento;
// ele verifica o elemento e procura o primeiro indice ou o ultimo indice do elemento.
/*
let numeros = [0,1,2,1,0];
console.log(numeros.indexOf(1));
console.log(numeros.lastIndexOf(1));*/

///// SLICE /////////
/* retorna um array a partir de outro, o array retornado é determinado pelos parâmetros que são os indices de inicio e fim do novo array.
slice(inicial,final) ele pega o valor entre os indices.
se eu quiser pegar os ultimos numeros do indice só colocar os numeros negativos que eles decrementa. slice(-2).
*/
/*
let nomes = ['Miguel','Lourdes','Amanda','Ruty'];
console.log(nomes.slice(1,2));//-> ele recebe dois parametros inicial/final //ele para um indice antes.
console.log(nomes.slice(3));//-> ele pega o ultimo valor
*/

////// FOREACH ///////////////////////
// itera elementos do array
/*
let nomes = ['Miguel','Ruty','Lourdes','Amanda']
nomes.forEach(p =>{
    console.log(p);
})
*/

//// INCLUDES ////////////////////
// Verifica se o array tem um determinado elemento;
// e ele é caseSensitive
// e ele retorna verdadeiro ou falso.
/*
let carros = ['BMW','FIAT', 'AUDI'];
console.log(carros.includes('AUDI'));*/

///// REVERSE ////////////////////
//Inverte um array;
let arr = [1,2,3,4,5,6];//ele inverte a posição do array onde o indice inicia pelo valor 6.
console.log(arr.reverse());
