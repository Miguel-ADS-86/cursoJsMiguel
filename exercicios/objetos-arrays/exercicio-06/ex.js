let elemento1 = [1,2,3,4,5,6];
let elemento2 = [7,8,9,10];

function verificaElementos(arr){
    if(arr.length > 5){
       console.log('Possui muitos elementos');
    }else{
        console.log('Possui menos elementos');
    }
}

verificaElementos(elemento1);
console.log('-----------------------------------');
verificaElementos(elemento2);