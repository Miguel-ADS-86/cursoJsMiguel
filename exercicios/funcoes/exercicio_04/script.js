/* numeroMaximo é o range do numero aleatorio que vai ser percorrio se o numeroMaximo for 5 o numero aleatorio vai ser entre 0 e 5 porem a função Math.random() ela retorna numeros flutuantes para transforma em inteiros temos que converter com o metodo Math.floor()*/
function numeroAleatorio(numeroMaximo){
    return Math.floor(Math.random() * numeroMaximo);
}

console.log(numeroAleatorio(5));