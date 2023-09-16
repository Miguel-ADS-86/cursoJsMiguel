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

