/* quando usamos Clousure sempre temos que retorna uma função. */


// este exemplo é de clousure arrowfunction
function armazenarSoma(x){
     return y => x + y;
}

//ou desta forma sem arrowfunction
/*
function armazenarSoma(x){
    return function(y){
        return x + y;
    }
}*/

let soma1 = armazenarSoma(5);
console.log(soma1(3));
////////////////////////////////////////////////////
//outra forma de motrar que ele se lembra do valor anterior usando clousure
// 
function contador(i){
   let cont = i;
   let contar = function(){
      console.log(cont);
      cont++;
   }
   return contar;
}
// eu tenho que atribuir a outra variavel.
let meuContador = contador(1);
meuContador();
meuContador();
meuContador();
meuContador();
