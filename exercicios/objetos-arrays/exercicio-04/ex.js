let onibus = {
    rodas: 8,
    limitePassageiro:40,
    portas: 2,
    nomeLinha:'Jardin São Paulo'
};


console.log('A linha:' + onibus.nomeLinha
    ,'Total de passageiros:'+ onibus.limitePassageiro, 
    'Portas:'+ onibus.portas, 
     'quantidade de rodas:' + onibus.rodas
    );

    onibus.janelas = 20;
    delete onibus.rodas;

    console.log(
        onibus
    );
    