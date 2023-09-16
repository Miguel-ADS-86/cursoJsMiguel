let nomes = ['Ruty','Sulamyta','Miguel','jessyca','Alice'];

for(let i=0; i < nomes.length; i++){
    if(nomes[i] === 'Migue'){
        console.log('foi encontrado no Array o nome: ' + nomes[i]);
    }
}

//outra forma de fazer usando includes
// verifica se existe elemento no array.
if(nomes.includes('Miguel')){
    console.log('Existe o nome');
}else{
    console.log('Não Existe');
}