/*Arrays
Possibilidade de adicionar um conjunto de valores a uma variavel.
O array deve ser escrito entre colchetes, separando os valores por virgulas.
*/

let frutas = [5];//cria o array com 5 posições iniciando pelo indice 0.
frutas[0] = 'Maçã';
frutas[1] = 'Uva';
frutas[2] = 'Melao';
frutas[3] = 'Ameixa';
frutas[4] = 'Banana';

let numeros = [1,2,3];//cria ja com os valores dentro do array, e a quantidade de valores dentro do array é o tamanho dele no caso 3.
let informacoes = ['Matheus',30,true];// array com valores misturados.

/* 
  podemos exibir o array no console desta forma:
  console.log(numeros); -> desta forma ele vai mostrar no console
  e podemos percorrer com o for e exibir os valores e podemos pegar o valor pelo
  indice.
*/

//pegando o valor pelo indice:
console.log(frutas[0]);
//pegando o ultimo elemento do array usando esta tecnica frutas.length -1
console.log(frutas[frutas.length -1]);

////////////////////////////////////////////////////////////////////////

// O QUE SÃO PROPIEDADES? //////////////////////////////////////////

/* são informações que podem ser verificadas de um valor
 quase todos os valores de javascript tem propiedades, menos null e undefined.
 podemos acessar as propiedades de duas maneiras exemplo:
   numeros.length ou numeros['length']

   definição de uma propiedade variavel.nome
*/

let nome = 'Joao';
console.log(nome.length);
console.log(nome['length']); // -> isso aqui tambem é uma propiedade

// O QUE SÃO METODOS? ///////////////////////////
/* são propiedades que funcionam como funções, strings e arrays contém metodos 
exemplo abaixo*/
let maisculo = 'Nike';
let menisculo = 'MIGUEL';

console.log(marca.toUpperCase());
console.log(menisculo.toLowerCase());

/* para poder diferenciar propiedade de metodo.
string.propiedade;
string.metodo();
*/
