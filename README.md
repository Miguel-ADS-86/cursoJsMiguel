# Conceito de Orientação a objeto!

* Uma forma de programar, que utiliza os objetos como o seu principal princípio;
* Além de utilizar conceitos e técnicas que envolve objetos;
* A maioria dos softwares, na parte de back-end, são desenvolvidos em cima desse paradigma;



## Aprofundando em métodos

* Propriedade que servem como funções;
* Ou seja, as ações dos objetos invocam os métodos da mesma maneira que funções;
* Dentro do objeto os atributos e métodos são separados por virgulas;

### Abaixo tem os metodos getters e setters no objeto cachorro:

```js
let cachorro = {
    nome: "",
    setNome:(nome)=>{
       this.nome = nome;
    },
    getNome:()=>{
      return this.nome;
    },
    latir: function(){
      console.log("au au");
    }
}

cachorro.latir();
cachorro.setNome('Doug');
console.log(cachorro.getNome());

```

## Prototypes

* Um objeto fallback de outro objeto; é a instancia do objeto em si;
* Quando um objeto recebe uma requisição de uma propriedade que não tem, ela é procura no prototype deste objeto.
* O prototype de um objeto criado do zero é o Object, que tem os metodos nativos da linguagem;
* Todo objeto tem um prototype.

  

```js
//é um objeto que é pai de um objeto que eu estou ultilizando.

const cliente = {
   maos: 2,
 }
 console.log(Object.getPrototypeOf(cliente));
 console.log(Object.getPrototypeOf(cliente) === Object.prototype);
```

### Quando criamos um objeto a partir de um outro:

* A base será o prototype.
* Ele herdará tanto os métodos e propriedades de Object (o prototype do objeto base);

```js
let pessoa = {
  maos: 2
};

//criando um objeto a partir de outro objeto
let pessoaNova = Object.create(pessoa);//criando uma pessoa na pessoaNova ou seja instanciando.Consigo usar metodos e atributos.

console.log(pessoaNova.maos);
console.log(Object.getPrototypeOf(pessoaNova) == pessoa);
```

## Classes

* O prototype do javaScript pode ser chamado de classe;
* Pois nas outras linguagens uma Class é um molde de um objeto;
* Ou seja, podemos criar diversos objetos em cima de um prototype;
* O prototype pode ser chamado de classe

```js
let cachorro ={ //classe cachorro
  tipo:'mamifero',
  raca:'vira-lata'
}

let pastorAlemao = Object.create(cachorro); //instancio ou seja criando um objeto tipo cachorro.
console.log(pastorAlemao.raca);
pastorAlemao.raca = 'Pastor Alemão'
console.log(pastorAlemao.raca);
```

Usando o Object.create(classe) e como se tivemos instanciando um objeto a partir de uma classe que é passada como parametro do metodo do object.

Um objeto também pode ser uma classe que vai servir como molde.

Craindo classe pelo Object.create não é a maneira mais utilizada, uamos o construtor:

### CONSTRUTOR POR FUNÇÃO

* Construtores são formas de instanciar uma classe em uma linguagem de programação;
* Instancia cria um objeto novo;
* No construtor já podemos definir propiedades;

```js
function criarCachorro(raca, patas, cor){
  let cachorro = Object.create({});//criou o objeto vazio
  cachorro.raca = raca;
  cachorro.patas = patas;
  cachorro.cor = cor;
  cachorro.latir = ()=>{
     console.log('au au au ...');
  }
  return cachorro;
}

let doberman = criarCachorro('Dorberman',4,'preto');
console.log(doberman)
doberman.latir();
```

### Construtor por New

* Em muitas linguagens temos a possibilidade de instanciar um objeto com new, no js também;
* Quando criamos uma função com letra maiuscula por convensão é uma classe, function Cachorro(raca)

```js
function Cachorro(raca){
   this.raca = raca;
}
let husky = new Cachorro('Husky');
console.log(husky.raca);
```

### Métodos no prototype 

```js
function Cachorro(raca){
   this.raca = raca;
}
//serve para separar metodos das classes para deiachar a classe somente com as propiedades
// assim a maneira mais correta para criar metodos ao objeto.
Cachorro.prototype.uivar = function(){
    console.log('uivar');
}

let dog = new Cachorro('vira-lata');
dog.uivar();
```

### Construtor na Classe (ES6) 

* Com a versão do ES6, uma possibilidade de criar (objeto) com construtor adicionado.
* Então não precisamos criar por meio de uma função, veja;
* É uma nova atualização do Java script que saiu entre 2015 e 2016.

```js
class Cachorro{
    constructor(raca){
        this.raca = raca;
    }   
}

let labrador = new Cachorro('Labrador');
console.log(labrador);
```

  Mais sobre Classes

* Não podemos adicionar propiedades na classe, só via prototype;
* A classe só aceita métodos. 

```js
class Cachorro{
    constructor(raca){
        this.raca = raca;
    }

    latir(){
      console.log('au au au...');
    }   
}
let labrador = new Cachorro('Labrador');
Cachorro.prototype.patas = 4;

console.log(labrador);
console.log(labrador.patas);
console.log(labrador.latir());
```

### Override nas propiedades do Prototype

* Sempre que adicionamos uma propiedade a um objeto, é criada uma idêntica no prototype;
* Podemos substituir a do prototype;

```JS
class Cachorro{
    constructor(raca){
        this.raca = raca;
    }

    latir(){
      console.log('au au au...');
    }   
}
let labrador = new Cachorro('Labrador');
Cachorro.prototype.patas = 4;
Cachorro.prototype.raca = 'SRC';

console.log(Cachorro.prototype.raca);// PODENDO TER UM VALOR PADRÃO USANDO PROTOTYPE
console.log(labrador.raca);//VALOR USANDO O CONSTRUTOR
```

### Symbols (Serve para fazer constantes)

* Propriedades únicas, que não podem ser alteradas e nem criadas duas vezes;
* Podemos utilizar como uma constante, só que para a propriedade de objeto.

```js
class Cachorro{
    constructor(raca){
        this.raca = raca;
    }

    latir(){
      console.log('au au au...');
    }   
}
let labrador = new Cachorro('Labrador');

Cachorro.prototype.raca = 'SRC';

// assim que eu crio a constante
let patas = Symbol();
Cachorro.prototype[patas] = 4;

//acessado o symbol
console.log(`meu cachorro tem ${Cachorro.prototype[patas]}`);
```

### Getters e Setters da  Usando Classe do (ES6)

* Get: serve para resgatar o valor de ua propriedade.
* Set: serve para alterar o valor de uma propriedade;

```js
class Cachorro{
    constructor(raca){
        this.raca = raca;
    }
    
    get getRaca(){
        return 'A raça é ' + this.raca;
    }

    set setRaca(raca){
       this.raca = raca;
    }

    latir(){
      console.log('au au au...');
    }   
}

let labrador = new Cachorro('SRC');
console.log(labrador);

labrador.setRaca = 'Labrador';
console.log(labrador.getRaca);
```

### Herança (INHERITANCE)

* Uma classe pode herdar propriedades de outra classe por Herança.
* Para isso utilizamos extends;

```js
class Mamifero{
    constructor(patas){
       this.patas = patas;
    }
}

let coiote = new Mamifero(4);
console.log(`O coiote tem ${coiote.patas} patas`);

class Cachorro extends Mamifero{
    constructor(patas, raca){
        super(patas, patas);
        this.raca = raca;
    }

    latir(){
        console.log('au au au');
    }
}

let pug = new Cachorro(4, 'vira-lata');
console.log(pug.patas + ' e ' + pug.raca);
pug.latir();
```

### Instanceof operator

* Podemos verificar quem é o pai do objeto utilizando o instanceof.

```js
class Mamifero{
    constructor(patas){
       this.patas = patas;
    }
}

let coiote = new Mamifero(4);
console.log(`O coiote tem ${coiote.patas} patas`);

class Cachorro extends Mamifero{
    constructor(patas, raca){
        super(patas, patas);
        this.raca = raca;
    }

    latir(){
        console.log('au au au');
    }
}

let pug = new Cachorro(4, 'vira-lata');
console.log(pug.patas + ' e ' + pug.raca);
pug.latir();

//o cachorro herda do mamifero
console.log(new Cachorro instanceof Mamifero);
```



fazer os exercício de orientação objeto desta seção...





## Programação Assíncrona com JavaScript

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
