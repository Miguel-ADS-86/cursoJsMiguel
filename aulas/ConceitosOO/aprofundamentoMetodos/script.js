let cachorro ={
   ruivar: function(){console.log("auuuuuuuuuuuuuuu")},
   rosnar: ()=>{console.log("rararararara")}
}

//cachorro.ruivar();
//cachorro.rosnar();

//////////////////* geters e setters ////////////////////////////*/
let pessoa = {
    nome:'',
    setNome:(nome)=>{
       this.nome = nome;
    },
    getNome:()=>{
       return this.nome;
    }
}
pessoa.setNome('Objct');
console.log(pessoa.getNome());

/// PROTOTYPES ////////////////
//é um objeto que é pai de um objeto que eu estou ultilizando.

const cliente = {
   maos: 2,
 }
 
 console.log(Object.getPrototypeOf(cliente));
 console.log(Object.getPrototypeOf(cliente) === Object.prototype);

 // CLASSES SÃO PROTOTYPE EM JS
 let cachorro2 ={
   tipo:'mamifero',
   raca:'vira-lata'
 }
 
 let pastorAlemao = Object.create(cachorro2);
 console.log(pastorAlemao.raca);
 pastorAlemao.raca = 'Pastor Alemão'
 console.log(pastorAlemao.raca);