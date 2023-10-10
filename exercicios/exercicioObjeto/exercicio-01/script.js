/* Crie uma classe que simule uma conta no banco(ultilize a forma que preferir);
Deve conter a propriedade saldo e os métodos depositar e
saque, teste os metodos.
*/

// 1) primeira forma:

let Conta = {
    saldo: 0,
    getSaldo:()=>{
        return this.saldo;
    },
    depositar:(valor)=>{
        this.saldo = valor;
    },
    saque:(valor)=>{
       if(this.saldo <= 0){
          console.log('Você está sem saldo para saque!');
       }else{
        this.saldo = this.saldo - valor;
        console.log(`Saque realizado com sucesso! seu saldo é ${this.saldo}`);
       }
    }
}
Conta.depositar(0);
Conta.saque(5);
console.log(Conta.getSaldo());

// 2 segunda forma
const cliente = {
    maos: 2
  }
  console.log(Object.getPrototypeOf(cliente));
  console.log(Object.getPrototypeOf(cliente) === Object.prototype);

