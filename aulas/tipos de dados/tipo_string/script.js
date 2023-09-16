//               TIPO DE DADOS STRING

console.log(typeof('Isso é uma string'));
console.log(typeof("Isso é uma string")); 
console.log(typeof(`tambem é string`)); // usando templete literals

console.log('Isso é uma string');
console.log("Isso é uma string"); 
console.log(`tambem é string`);

// DETALHES TECNICOS DA STRING

// como inserif aspas no texto, se quiser
console.log('"ola \n mundo!"');//para colocar aspas duplas inicia com aspas simples.
console.log("'ola \n mundo!'");//se quiser colocar aspas simples inicia com aspas duplas.

// \n pula uma linha
console.log('ola \n mundo!');

//templete literals pode inserir variaveis ou expreções.
console.log(`a soma de  2 + 2 é ${2+2}`);//colocamos o cifrão e dentro das chaves a expreção.

// comcatenando o texto
console.log("ola" + "mundo!");