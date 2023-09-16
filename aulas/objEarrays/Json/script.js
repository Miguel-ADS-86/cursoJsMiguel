//não é um objeto javascript mais é um tipo de dado que serve como comunicação
// entre servidores e front end e back-end.
/*O padrão do json sempre aspas duplas e não aceita comentarios, e deve 
seguir o padrão imposto.*/ 
let pessoa = {
  "nome":"Ruty",
  "idade":27
};

//console.log(pessoa.nome);
//console.log(pessoa.idade);

///// convertendo Json para String e String para Json ///////////////

let car ={
    "nome":"Fiat-Touro",
    "porta":4,
    "motor":1.4
}
// convertendo o json para uma String
let jsonToString = JSON.stringify(car);// converte para String JSON.stringify()
console.log('convertendo em string' + jsonToString);

// convertendo uma string para um json
let stringToJason = JSON.parse(jsonToString);
console.log('convertendo abaixo em JSON');
console.log(stringToJason);
console.log(stringToJason.nome);
