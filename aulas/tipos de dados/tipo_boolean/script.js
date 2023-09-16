//               TIPO DE BOOLEAN

//serve para guardar um valor de uma comparação de verdadeiro ou falso.
// true ou false

console.log(5 > 2);
console.log(1 > 2);

// comparações pode ser
/*
 maior que > ,
 menor que <, 
 maior igual a >=, 
 menor igual a <=, 
 igual a ==,
 diferente de !=,
 idêntico === (é o mesmo valor e o mesmo tipo de variavel)
*/

// OPERADORES LÓGICOS QUE RETORNA UM BOOLEAN
/** 
 * && - and ambos precisam ser true.
 * || - or para ser true um dos lados precisa ser true.
 * ! not invert o valor true vira false e false vira true.
*/

console.log(true && true);
console.log(true && false);
console.log(false || false);
console.log(!true);

// OPERADOR TERNARIO ASSUNTO DO BOOLEAN

//ele faz um comparativo em apenas uma linha de codigo
// console.log(true ?1:2) se for verdadeiro retorna a condição 1 caso for falso 
//retorna a condição 2

console.log( 5 > 2 ? 'é sim':'é não');

