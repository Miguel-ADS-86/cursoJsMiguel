
let pessoa1 ={
    nome:"Miguel",
    estado:"Pernamuco"
}

let pessoa2 ={
    nome:"Ruty",
    estado:"Paraná"
}

let registro = {
   numero:15135,
   cod_pos:'ABC',
   pessoas:[pessoa1, pessoa2]
}

let nome = registro.pessoas[0].nome;

console.log('Número: '+registro.numero+ ' : '+ registro.pessoas[0].nome);
console.log('Número: '+registro.numero+ ' : '+ registro.pessoas[1].nome);

console.log("Nome da variavel" + nome);