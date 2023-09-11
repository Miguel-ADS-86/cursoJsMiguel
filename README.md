# Programação Assíncrona com JavaScript

estudo js asscincrona e js com o dom

## Programação Assíncrona

Conseguimos executar ações em determinados tempos que não sejam o mesmo da execução do programa. Ou seja são ações que tem seu proprio fluxo e não acontece de forma sincronizada com outros eventos.

Os códigos eles são executados de cima para baixo da esquerda para direita, porem de forma assincrona as ações não obedecem uma fila de execução elas podem ser chamadas em qualquer momento.

## Callbacks

Uma das vertentes a prog. Assincrona é fazer ações que aconteçam depois de um tempo por meio de callbacks;

Callback: é uma função que faz uma ação apos algum acontecimaneto no código.

podemos realizar um callback com a função setTimeout. Veja:

```js
console.log("Aiinda não chamou o callback");

setTimeout(function(){
  console.log("chamou o callback")
},2000);

console.log("Aiinda não chamou o callback");

```

O setTimeout ele é uma função assincrona que recebe como parametro uma função anonima e os segundos para poder ser executado e os outros eventos são executados normalmente.

## Promises (Promessa)

São ações assíncronas que podem produzir um valor em algum momento no código; Uma forma de dizer a linguagem que um valor pode estar presente em um futuro do código;

O objeto da promise é Promise, resolve é o metodo que resolve uma Promise, o then é o que faz ela poder ser executada em um ponto futuro;

```js
let promessa = Promise.resolve(468);
console.log('resolvendo algum codigo');
promessa.then((value)=>{
    console.log(`O valor é ${value}`);
})


```

A granda sacada da Promise é que ela guarda um valor dentro dela, até ser chamado pelo then em algum momento do programa.

eu posso chamar o then mais de uma vez ou seja eu posso encadear diversas ações: Usamos then para pegar o valor da promessa.

```js
promessa.then((value)=>{
return value + 5;
}).then((value)=>{
   console.log(value);
});

```

## Falha nas Promises

* Uma promise pode falhar, podemos reter esse erro com um método chamado catch; Com ele podemos exibir o erro no console, e fazer o debug no código.

  Ou seja conseguimos pegar os erros das promessas.

```js
 let p = Promise.resolve(new Error("Algo eu errado!"));

 p.then((value)=>{
    console.log(value);
 }).catch((reason) => console.log("Erro:" + reason));

                /*outra forma*/

let variavel = Promise.reject(new Error("algo deu errado"));

variavel.then((value)=>{
    console.log(teste); -> /* está linha não executa*/
}).catch((reason)=>{console.log("Error: "+ reason)});
```

Usamos o cacth para pegar o erro da promessa e a reason para mostrar o erro da promessa.

## Rejeitando Promises

* Alem do resolve, há o metodo reject;
* Que é quando determinada lógica não satisfaz nosso programa, então podemos ir para outra com o reject, em vez do resolve;
* Resolve e reject terminam a Promise, ou seja, não podemos chamar o then;

```js
function verificaAlgo(num){
    return new Promise((resolve, reject)=>{
        if(num == 2){
            resolve(console.log(`o numéro é ${num}`));
        }else{
            reject(new Error('Falhou que que isso'));
        }
    });
}

verificaAlgo(2);
verificaAlgo(3);

         /*Outra forma de fazer*/
function calcularValor(a,b){
    return new Promise((resolve,reject)=>{
        if(a == 3 && b == 4){
            resolve(console.log(a+b));
        }else{
            reject(new Error("não foi possivel fazer o calculo"));
        }
    })
}

calcularValor(3,8).catch((reason)=>{console.log("Error"+reason)});
```

## Resolvendo Varias Promises

Com o metodo all, podemos resolver varias promessas de uma só vez. Ou seja passamos ela por array e quando for resolvida receberemos a resposta.

```js
const p1 = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve(100);
    }, 2000);
});

const p2 = Promise.resolve(5);

const p3 = new Promise(function(resolve, reject){
    resolve(10);
});


Promise.all([p1,p2,p3]).then((values)=>{
     console.log(values);
});
```

## Funções Assincronas

### Assync functions

* Podemos criar funções assíncronas com a palavra reservada async;
* Elas retornam uma Promise;
* Se retorna algo a promessa é resolvida, se der alguma exceção a promessa é rejeitada.

```js
/*quando só tem uma linha para executar não precisa de chaves mais caso tenha ai precisa*/
async function somar(a,b){
    return a + b;
}

somar(3,5).then((valor)=>console.log(valor));
           /* OU */
somar(3,5).then((valor)=>{
    console.log(valor)
});
```

### Ultilizando o await

* Nas async functions, podemos determinar uma instrução await;
* Que vai esperar uma promise ser resolvida

```js
function somaDelay(a,b){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(a+b);
        },4000);
    });
}

async function resSoma(a,b,c,d){
    let x = somaDelay(a,b);
    let y = somaDelay(c,d);
    return await x + y;
}
/*usamos sempre o then para pegar o valor da promessa*/
resSoma(1,2,3,4).then(value =>{console.log(value)});
```

### Generators

* Generators funcionam semelhantes as Promises;
* Onde ações podem ser pausadas e continuadas depois;
* Caracterizados pelo function* e yield, veja;
* O yield pode salvar o estado da variável;
* e inves do then vamos chamar o next() para dizer qual o proximo generatorsvai ser executado;

```js
function* criadorId(){
    let id = 1;
    while(true){
        yield id++;
    }
}

let criaId = criadorId();
console.log(criaId.next().value);
console.log(criaId.next().value);
```

só vai ser chamado o generator apenas uma vez e depois chama de novo assim como no exemplo acima, podendo assim fazer um gerador de ids.

Finalizado Estudo.
