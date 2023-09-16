/** Funções de java script */
/*
//funcao para imprimir no console:
function imprimirConsole(){
    console.log('imprimindo no console');
}
imprimirConsole();

// funcao com parametro
function imprimirNumero(numero){
    console.log(`O numero é + ${numero}`);
}

imprimirNumero(2);//chamando a funcao

// podemos declarar uma variavel e ela receber uma função
const mensagem = function(){
    console.log('ola mundo!');
}
mensagem();*/

//outras formas de funcoes

let soma = function(a,b){
   return a +b;
}
console.log(soma(2,5));

//////////////////////////////////////////////////

function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log('pode dirigir');
    }else{
        console.log('não pode dirigir');
    }
}

console.log(podeDirigir(18,true));

// ESCOPO ANINHADO:
/** para mostrar que eu posso ter uma variavel global, mais quando esta dentro
 * de outro scopo a variavel com o mesmo nome é a variavel do escopo não a variavel global. E o scopo fica dentro das {}.
 */
let y = 5;

const multiplicar = function(v){
    let y = v * 2;
    console.log(y);//escopo funcao

    if(y == 10){
        let y = 55;
        console.log(y); // escopo if dentro da funcao
    }
}

multiplicar(y);
