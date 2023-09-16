/** Funções de java script */

// Arrow Function
/** é uma função anonima ela não tem nome e temos que atrelar ela 
 * a uma variavel.
 * 
 * EXEMPLO:
 * abaixo esta o corpo da funcao.
 * ()=>{
 * }
 * 
 * 
 * 
 */

let parOuImpar = (n)=>{
   return n % 2;
}

function verificar(valor){
    if(valor == 0){
        console.log('O número é par');
    }else{
        console.log('O número é impar');
    }
}

verificar(parOuImpar(4));

/** se só tiver um parametro podemos remover os parenteses exemplo:
 *   let calcular = n =>{
 * }
 * 
 * e se não temos parametros dentro do parenteses fazemos assim: 
 * let exibir = ()=>{
    console.log('');
    }

    se a expressão for pequena pode ate ser feita em uma linha sem prejudicar a leitura.
    
    não precisa fazer assim.
    const raizQuadrada = (x)=>{
        return x * x; 
    }

    faz desta forma:
    const raizQuadrada = n => x * x;
 *  
 */


let exibir = ()=>{
    console.log('exibindo mensagem');
}

exibir();

/**
 * funções opcionais, ou seja tratar sua função exemplo abaixo:
*/

function calcular(a,b){
    if(a === undefined && b === undefined){
        console.log('esta funcao precisa ter dois argumentos');
    }else{
        return a + b;
    }
}

console.log(calcular(1,2));

///////////////////////////////////////////////////////////
// outra forma de tratar a funcao

function saudacao(nome, idade){
    if(idade == undefined){
        console.log('Olá ' + nome);
    }else{
        console.log('Olá '+ nome +' você tem ' + idade + ' anos');
    }
}
saudacao('Ruty');
saudacao('miguel',36);

////////////////////////////////////////////////////////////////////
// ARGUMENTOS COM VALORES DEFAULT:
//no caso ele sobrescreve o valor de v.
function repetirFrase(frase, v=2){
    for(let i=1; i <= v; i++){
        console.log(frase + ' ' + i);
    }
}
repetirFrase('Jesus',4);

/////////////////////////////////////////////////////////////////////
//CLOSURE é basicamente uma função que vai retorna outra função.
// sempre ele retorna outra funcao

function amazenarSoma(x){
    return y => x + y;
}
// outra forma de fazer 
/**
 * function amazenarSoma(x){
    return function(y){
        return x + y;
    }
}
 */
let soma1 = amazenarSoma(3);
console.log(soma1(5));

////////////////////////////////////////////////////////////////
//para mostrar que esta funcao closure se lembra do valor outro exemplo:

function contador(i){
    let cont = i;
    let somarContador = function(){
        console.log(cont);
        cont ++;
    }
    return somarContador;
}

let meuContador = contador(2);
meuContador();
meuContador();
meuContador();
meuContador();
meuContador();

///////////////////////////////////////////////////////////////////////////////////////
// RECURSION :
// UM FUNCIONALIDADE QUE PERMITE UMA FUNÇÃO SE CHAMAR NOVAMENTE.

function retornarNumeroPar(n){
    if(n % 2 == 0){
      console.log('n agora é par: ' + n);
    }else{
        console.log('Não é par ' + n);
        retornarNumeroPar(n-1);
    }
}

retornarNumeroPar(33);