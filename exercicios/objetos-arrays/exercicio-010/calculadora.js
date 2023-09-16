let calculadora = {
    somar: (v1,v2)=>{ console.log('A soma é : ' + (v1+v2)) },
    subtrair: (v1,v2)=>{ console.log('A subtrair é : ' + (v1-v2)) },
    multiplicar: (v1,v2)=>{ console.log('A multiplicação é : ' + (v1*v2)) },
    dividir: (v1,v2)=>{ console.log('A dividir é : ' + (v1/v2)) }
}

calculadora.somar(2,4);
calculadora.subtrair(10,4);
calculadora.multiplicar(2,4);
calculadora.dividir(20,4);
