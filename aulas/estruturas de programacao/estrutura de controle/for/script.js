/*let x = 10;

for(let i=0; i <= x; i++){
    console.log(i);
}

${} -> serve para colocar valor dentro quando se usa ``.

for(let i=0; i < 10; i++){
    console.log(`2 x ${i} = ${i*2}`);
}*/

/*Usando break
for(let i=5; i < 20; i = i +1){
    if(i % 10 == 0){
       console.log('saiu do loop!');
       break;
    }
    console.log('Prosseguindo o loop...');
}

let valor = 9;
let resultado = (valor % 10);
console.log(resultado);
*/

// usando continue
let x = 0;
while(x < 11){
    x++;
   if(x % 2 == 0){
    continue;
   }
   console.log(`Numero ${x}`);
}