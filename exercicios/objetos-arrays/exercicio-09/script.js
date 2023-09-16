let frase = "Amor-é-lindo";
let palavra = frase.split("-");//-> transforma em array

let imprimir = ()=>{ 
   for(let i=0; i < palavra.length;i++){
       console.log( i + '-' + palavra[i]);
   }
}

imprimir();