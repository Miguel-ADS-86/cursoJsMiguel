                ///// METODOS DE STRING //////////

 ///// String: trim ///////////////
 // remove tudo que não é string até os espaços
 /*let texto = '  \n teste \n ';
 console.log(texto.trim());*/


 ///// string: padStart ///////////////////
 //inseri caracteres antes da String
 // e ele pode ajuda a padronizar.
 
 /*let milAoContrario = '1';
 console.log(milAoContrario.padStart(4,'0'));*/

 ///// string: split /////////////
// divide uma string em uma array
/*
let frase = 'O rato roeu a roupa do rei de roma';
let palavras = frase.split('');
let produtos = 'banana;maça;jujuba;bola';
console.log(palavras);
console.log(produtos.split(';'));*/

/////string: join /////////////////
//junta elementos em uma array em uma frase, por meio de um separador.
// ele faz o inverso ele junta as palavras de acordo com o separador especificaddo no join(-).
/*let frase = 'O rato roeu a roupa do rei de roma';
let palavras = frase.split('');

let novaPalavra = palavras.join('-');
console.log(novaPalavra);*/

/////string:repeat//////////////
//repete uma string de acordo com um parametro number
/*console.log('Miguel \n'.repeat(3));*/


///// rast operator ///////////////
// é uma forma de função que recebe indefinidos parâmetros;
//O operador rest vai virar um array;
//o parametro é definido por: ...nomeArray;
/*
function imprimirValores(...args){
    for(let i=0;i< args.length;i++){
        console.log(args[i]);
    }
}
imprimirValores(1,2,3,4);
console.log('pausa');
imprimirValores('maça','uva','melao');*/

///// Destructuring com objetos ////////////
/*Podemos definir variaveis com propiedades do objeto com uma notação diferente chamada destructuring, uma forma de poder criar variaveis,objetos e arrays de uma forma mais rapida*/
let obj = {
    rodas:4,
    portas:4,
    tetoSolar:true,
    motor:'2.0'
};
//separar todas as propiedades em variaveis.
//ou seja conseguimos criar variaveis com a propiedade dos objetos.
/*const {rodas:vRodas,portas:vPortas,tetoSolar:vTetoSolar,motor:Vmotor} = obj;

console.log(vRodas);
console.log(vTetoSolar);*/

///// Destructuring em Arrays ////////////
/* podemos definir variaveis com os valores de um array utilizando o 
destructuring */
let nomes=['Miguel','Ruty'];
let [nomeA,nomeB] = nomes;
console.log(nomeA);
console.log(nomeB);
