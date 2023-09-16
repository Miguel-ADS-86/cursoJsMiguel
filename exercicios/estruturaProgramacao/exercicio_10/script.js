/**  resolucao do exercicio 09 */

let velocidadePermitida = 80;
let velociadeAtual = 80;

if(velociadeAtual == velocidadePermitida){
    console.log(`rodando na velocidade permitida de ${velociadeAtual}KM`);
}else if(velociadeAtual > velocidadePermitida){
    console.log(`sua velocidade de ${velociadeAtual}KM está maior que a permitida `);
}else{
    console.log(`sua velocidade de ${velociadeAtual}KM está menor que a permitida `);
}

