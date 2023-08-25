/*Topicos
-Calbacks ok
-Promise ok
-falhas nas promise ok
-resolvendo varias promises ok
- funões assincronas ok
  * Assync ok
  * Await ok
  * Generators ok
*/

function calcular(a,b){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(a + b);
     },3000);
    })
};

async function resultado(a,b,c){
   let y = calcular(a,b);
   let x = c;
   return await y + x;
  }

 resultado(5,2,3).then((value)=>{console.log(value)});


 function* getId(){
     let id = 1;
     while(true){
       yield id++
     }
 }

let obj = getId();
console.log(obj.next().value);
console.log(obj.next().value);