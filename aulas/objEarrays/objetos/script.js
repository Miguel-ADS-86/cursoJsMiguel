/* 
    OBJETOS:
    Uma coleção de propiedades, parecido com arrays.
    podemos acessar estas propiedades.

    []array
    {}objetos
*/

// criando o objeto
let pessoa = {
    nome:'Miguel',
    profissao:'Programador',
    idade:36,
    falar: ()=>{
         console.log('Boa noite!');
    }
};

//pegando o valor do objeto com as propiedades do objeto
console.log(pessoa.nome);
console.log(pessoa.profissao);
console.log(pessoa.idade);
pessoa.falar();

// deletando propiedades do objeto
delete pessoa.idade; // -> a propiedade não tem mais valor fica undefined
console.log(pessoa.idade);

//adicionando propiedade ao objeto
pessoa.estadoCivil = 'solteiro';
console.log(pessoa.estadoCivil);

// copiando propiedade de um objeto
//podemos copiar todas as propiedades de um objeto para o outro.
/* Object é o pai de todos os objetos e estamos usando o metodo Object.assign() que recebe 2 parametros onde o primeiro objeto vai herdar todas as propiedades do segundo objeto */
let obj_a = {
    prop1:'Teste',
    prop2:'Testando'
}

let obj_b = {
    prop3:'propiedade'
}
// onde o objeto_a vai herda todas as propiedades do obj_b.
Object.assign(obj_a, obj_b);
console.log(obj_a);

/* quando falamos de objetos no javascript falamos de chaves e valor. e podemos verificar quais chaves cada objeto possui 
Object.keys(bicicleta) -> retorna quantas chaves tem no objeto.
  modelo -> é uma chave
  'Oggi' -> é um valor
  
  o Keys verifica as chaves do objeto.
*/
/*
let bicicleta ={
    modelo:'Oggi',
    aro:29,
    tamanho:17,
    velocidade:()=>{
        console.log('30km');
    }
}
console.log(Object.keys(bicicleta));*/

//************Mutação********************
/* um objeto pode herdar todas as caracteristicas do outro, virando uma referencia ao mesmo. */

let objetoA={
    pontos:10
};

let objetoB = objetoA; //-> aqui ele herda o objetoA e vira uma referencia

let objetoC={
    pontos:10
};

console.log(objetoA == objetoB);//true
console.log(objetoA == objetoC);//false

//agora com exemplo de multação:
// por isso chama mutação ambus pode trocar o valor um do outro.
let pessoa3 ={
    nome: 'Miguel'
};

let pessoa4 = pessoa3;
console.log(pessoa4.nome);

pessoa4.nome ='Ruty';
console.log(pessoa4.nome);

///////******************************* */

// LOOPS EM ARRAYS ///////////////////////////////////

let numeros = [1,5,10,15,20,25];
for(let i=0; i < numeros.length;i++){
    if(numeros[i] == 15){
        console.log(numeros[i]);
        break;
    }
    console.log(numeros[i]);
}