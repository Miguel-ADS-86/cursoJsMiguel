// o que eu fiz
function decrementa(base){
    for(let i=0; i < base; i++){
        if((base-i) % 2 ==0){
            console.log(base -i);
        }
    }
}

// forma que o professor fez
function imprimir(num){
    for(let y=num; y >= 0; y--){
        if(y % 2 ==0){
            console.log(y);
        }
    }
}


//decrementa(10);
imprimir(10);
