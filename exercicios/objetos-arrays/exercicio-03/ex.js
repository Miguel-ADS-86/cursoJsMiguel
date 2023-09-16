let onibus = {
    rodas: 8,
    limitePassageiro:40,
    portas: 2,
    nomeLinha:'Jardin São Paulo'
};

let numero ={
    valor1: 5,
    valor2: 6,
    calculo: (v1,v2)=>{
        return v1 + v2;
    }
}

let operacao = numero.calculo(numero.valor1,numero.valor2);
console.log(operacao);

/*
console.log('A linha:' + onibus.nomeLinha
    ,'Total de passageiros:'+ onibus.limitePassageiro, 
    'Portas:'+ onibus.portas, 
     'quantidade de rodas:' + onibus.rodas
    );
*/