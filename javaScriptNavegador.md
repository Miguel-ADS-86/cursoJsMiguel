# JavaScript e o Navegador (Dom)

## Protocolos:

* Um protocolo é uma forma de comunicação entre computadores atraves da rede;
* O HTTP, serve para nós solicitarmos arquivos,imagens e etc (HYPER TEXT TRANSFER PROTOCOL);
* Entramos em sites graças ao protocolo HTTP;
* SMTP = Protocolo para enviar e-mail;
* TCP = Protocolo de transferência;

## URL

* Cada arquivo que carrega no navegador é nomeado por uma URL;
* A URL (Uniform Resource Locator) pode ser dividida em 3 partes, protocolo, servidor e arquivo;
* http://www.horadecodar.com.br/index.html
* http = protocolo;
* www.horadecodar.com.br = servidor (DNS para um IP);
* index.html = arquivo;

## OBS:

Podemos usar a chamada ao java script externo no html usando ele no final da pagina `:`

` <body>`

    no final do corpo:
    
    `<script src=""></script>`

`</body>`

OU no inicio usando o defer

```html
<head> <script src="" defer></script></head> <body> </body>
```

O defer ele serve para fazer que o javascript execute por ultimo no html;

## A Estrutura HTML e o DOM

* Quando uma página web é requisitada, ela ecebe um texto que é transformado em uma estrutura HTML;
* As tags vão se ninhando uma as outras, formando uma estrutura em que elementos ficam dentro de dos outros;
* Esssa estrutura tem uma representação exatamente igual para o JS chamado de DOM;
* Que significa Document Object Model;
* E por meio do JS podemos cessar cada um destes elementos do HTML através do DOM;

### O DOM

* Podemos mudar completamente uma página HTML através do DOM;
* É possivel alterar: elementos, atributos, css;
* Além de alterar podemos adicionar e remover;
* Além de ser possível criar eventos na página, como animações;

#### A arvore do Dom

* O documento HTML seria a árvore completa;
* A raiz da árvore é o Document(só uma raiz);
* Cada elemento da árvore chamamos de leaf nodes (as folhas)

![img](img/dom-img.png)

#### Movendo-se Atraves do DOM

* Podemos acessar todos os elementos a partir de document.body;
* A partir dele vamos entrando nos childNodes;
* E depois acessando as propiedades que nos interessa;

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Teste</title>
</head>
<body>
    <div>
        <h1>Titulo pincipal</h1>
        <p>Algum texto</p>
    </div>
    <div>
        <h2>Lista de coisas a Fazer</h2>
        <ul>
            <li>Coisa 1</li>
            <li>Coisa 2</li>
            <li>Coisa 3</li>
        </ul>
    </div>

    <script src="teste.js"></script>
</body>
</html>
```

```js
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes[1]);
console.log(document.body.childNodes[1].childNodes[1].textContent);
```

#### Encontrando elementos

* Podemos encontrar elementos de uma forma mais facil do que se movendo pelo DOM;
* Como no html temos tags, classes e ids, o javaScript nos possibilita utilizar estas características para encontrar o que desejamos;
* Há alguns metodos para isto: getElementsByTagName, getElementById, getElementByClassName e também o querySelector;
* Vamos ver cada um deles;

Abaixo segue alguns exemplos:

```js
/* encontrando elemento por tagName */
/*ele retornam uma collection*/
/*Talvez não use muito pois ele mexe com os elementos do dom, e queremos ser mais especificos */
/*
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('p'));
console.log(document.getElementsByTagName('li'));
*/

/* encontrando elementyos por id */

/*console.log(document.getElementById('titulo'));*/

/* encontrando elemento por class */
/*console.log(document.getElementsByClassName('lista'));*/

/* Usando o querySelector */
console.log(document.querySelector('#titulo'));
console.log(document.querySelector('.lista'));
console.log(document.querySelector('p'));
```

#### Alterando o HTML:

* Podemos mudar quase tudo através do Dom;
* Adicionar,Remover e clonar elementos;
* Podemos utilizar metodos como: insertBeofore, appendChild e replaceChild;
* Vamos ver em detalhes como usar cada um destes;

##### Alterando o DOM com insertBefore

* Insere um nó antes do nó de referencia do método;
* Precisamos de um elemento para ser adicionado;
* O elemento que terá o outro elemento adicionado antes dele;
* E o elemento pai desses dois;

```js

<body>
     <div id="container">
         <h1 id="titulo">Testando</h1>
     </div>

    <script src="teste.js"></script>
</body>


let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum texto");//createTextNode é um no de texto.
novoElemento.appendChild(texto);//o appendChild para poder adicionar elementos
let elementoAlvo = document.querySelector("#titulo");
let elementoPai = document.querySelector("#container");

elementoPai.insertBefore(novoElemento, elementoAlvo);/*inserindo um paragrafo antes do titulo */
```

Ou seja crie um paragrafo, criei um nó de texto depois adicionei ao paragrafo e depois peguei o elemento pai chamei o metodo insertBefore passei o novo elemento que foi criado que vai ficar antes do elemento alvo que eu quero colocar antes.

##### Inserindo elementos com appendChild:

Adiciona um nó após todos os elementos do elemento pai especificado;

```js
<body>
   
     <div>
        <p id="p-principal"> bilom </p>
        <p>mais texto</p>
     </div>

    <script src="teste.js"></script>
</body>

let novoElemento = document.createElement("p");
let texto = document.createTextNode(" Lorem LoreLorem LoreLorem LoreL");/* createTextNode cria um texto */

novoElemento.appendChild(texto);

let p = document.querySelector("#p-principal");
let pai = p.parentNode;/* usando o parentNode ele faz com que eu pegue o pai do elemento
ou seja eu pegue a div que é o pai p-principal e adicione outro elemento dentro dela apos o 
elemento filho ficando sempre no final da fila*/

pai.appendChild(novoElemento);
```

##### Alterando a DOM com replaceChild

Repõe um antigo elemento no DOM, com um novo;

```js
<body>
   
     <div>
        <h1 id="titulo-principal"> ALgum Titulo </h1><!--trocando por um paragrafo-->
        <p>mais texto</p>
     </div>

    <script src="teste.js"></script>
</body>

let novoElemento = document.createElement("p");
let texto = document.createTextNode(" Lorem LoreLorem LoreLorem LoreL");/* createTextNode cria um texto */
novoElemento.appendChild(texto);

let titulo = document.querySelector('#titulo-principal');
let pai = titulo.parentNode;

pai.replaceChild(novoElemento, titulo);/*replaceChild(novo, antigo) */



```

Ou seja ele troca o elemento por outro novo.

##### Inserindo Texto nos elementos:

* Podemos criar um nó de texto puro e inserir em um elemento;

```js
<body>
   
     <div>
        <p id="p-paragrfo"></p>
     </div>

    <script src="teste.js"></script>
</body>


let texto = document.createTextNode("Jesus é o Caminho a verdade e a vida!");/*criei o texto */
let p = document.getElementById('p-paragrfo');/*peguei o paragrafo via id */
p.appendChild(texto);/*adicionei o texto dentro do paragrafo */

```

##### Criando nós de Elemento

* Podemos crar um nó de elemento com o CreateElement, e depois inserir no html

```js
let span = document.createElement("span");
let el = document.querySelector("h1");
let pai = h1.parentNode;

pai.insertBefore(span, el);
```

outro exemplo mais complexo:

html:

```html
<body>
     <div id="container">
     
     </div>

    <script src="teste.js"></script>
</body>
```

Js:

```js
let lista = document.createElement('ul');


for(i=0; i < 5; i++){
    let item = document.createElement('li');
    let texto = document.createTextNode('Texto lista' + ' - '+ i);
    item.appendChild(texto);
    lista.appendChild(item);
}

let container = document.querySelector('#container');
container.appendChild(lista);
```

##### Modificando e Lendo atributos

* Podemos resgatar o valor de um atributo ou trocar com o js;
* Por exemplo o href de um a ou src de um elemento de img;
* getAttribute pega o valor;
* setAttribute atualiza o valor

Um exemplo criando so o setAttribute:

```js
let container = document.querySelector('#container');
let imagem = document.createElement('img');

imagem.setAttribute('src','img/dom-img.png');
imagem.setAttribute('alt','imagem arvore dom');
imagem.setAttribute('width','550px');

container.appendChild(imagem);
```

Um exemplo usando o getAttribute:

```js
let a = document.querySelector('footer a');
console.log(a.getAttribute('href'));/*ele vai pegar o valor e exibir*/
```

Verificando altura e largura do elemento

* Com o js também é possvel verificar propiedades do elemento como altura e largura, veja;

```js
let container = document.querySelector('#container');

console.log('A largura: ' + container.offsetWidth + 'A altura ' + container.offsetHeight);//considera as bordas

console.log(container.clientWidth);//desconsidera bordas
console.log(container.clientHeight);// desconsidera bordas
```

##### Posição do elemento na tela

* Também é possivel checar a posição do elemento na tela;
* getBoundingClientRect nos da as posições de top,left,right,bottom do elemento e outras informações;

```js
let titulo = document.querySelector('#titulo');
console.log(titulo.getBoundingClientRect());
```

##### Estilizando com JS

* Podemos também mudar as propiedades de estilo dos elementos do html com o js;
* Acessando a propiedade style podemos fazer as modificações;
* O estilo é manipulado direto na tag, ou seja, substitui o do css na maioria das vezes;

```js
let titulo = document.querySelector('#titulo');

console.log(titulo.style);

titulo.style = 'color:red';//assim
titulo.style.color ='blue';// ou assim
```

##### Selecionar várioselementos com query

* Para selecionar diversos elementos com o query, podemos utilizar o metodo querySelectorAll;
* Em vez de um, podemos pegar todos os elementos semelhantes com o seletor do css;

Html:

```html
<body>
     <div id="container">
        <h1 id="titulo">Olar Mundo!</h1>
         <ul>
            <li class="itens-vermelho">Lista vermelha</li>
            <li class="itens-vermelho">Lista vermelha</li>
            <li class="itens-vermelho">Lista vermelha</li>
            <li class="itens-azul">Lista azul</li>
            <li class="itens-azul">Lista azul</li>
            <li class="itens-azul">Lista azul</li>
         </ul>

     </div>

    <script src="teste.js"></script>
</body>
```

Js:

```js
let itens = document.querySelectorAll('.itens-vermelho');

console.log(itens);

titulo.style.color = '';
for(i=0; i < itens.length;i++){
    itens[i].style.color ='red';
}
```

##### Mais sobre estilização:

```js
// pegando o valor
nome.value;
document.querySelector('#display').value = "receber algum valor";

//adicionando valor no elemento com css
document.querySelector('#display').style.backgrounColor = 'blue';
let valor = document.querySelector('#display');
valor.style.backgrounColor = 'blue';

//quando quero adicionar um css ja pronto no elemento
let i = document.querySelector('.menu');//pego o elemento
i.classList.add('fa-b');//adiciono a classe de css no elemento

//verificando se contem a classe no elemento
i.classList.contains('fa-b');

// remove a classe do elemento
i.classList.remove('fa-b');

// para adicionar um elemeto
botao.appendChild(i);
//removendo um elemento
botao.removeChild(i);
```



## Eventos com JavaScript		

O que são Eventos?

* Ações condicionadas a algum tipo de resposta feita pelo usuário;
* Por exemplo clicks, aperta uma tecla ou até movimento do mouse;
* Podemos atrelar lógica a essas ações do usuário;
* por meio de handlers;

### Como acionar um evento

* Devemos atrelar o evento a um elemento, por exemplo um botão;
* Depois inserir um listener e o tipo de evento como argumento;
* Ai o elemento responderá por este evento e, obviamente os outros da página não;

```js
let btn = document.querySelector('#btn'); //pega o elemento pelo id e adiciona a variavel.

/* este metodo, ele recebe um evento e uma função,
 podendo usar arrowfunction ou não. 
*/
btn.addEventListener('click',()=>{
    console.log('clicou');
});

// outra forma

let valor = function(){
    console.log('clicou');
};

btn.addEventListener('click', valor);//não preciso aqui colocar valor() só valor
```

### Removendo eventos

* Da mesma forma que podemos adicionar eventos, podemos remover quando acharmos necessário;
* Para isso utilizaremos o método removeEventListener, onde passamos o evento e a função que o evento está escutando.

```js
function msg(){
    console.log('clicou');
}

btn.addEventListener('click', msg);

setTimeout(()=>{
  btn.removeEventListener('click',msg);
},3000);
```


### O objeto do evento

* Quando criamos eventos, temos a opção de ultilizae argumento opcional, que é chamado de objeto do evento;
* Ele contém propiedades que podem ser utilizadas a nosso favor;
* O objeto é criado pelo javascript automaticamente;

```js
function msg(e){
    console.log(e);
}

btn1.addEventListener('click', msg); 

btn2.addEventListener('click', function(evento){
    console.log(evento);
});
```

Acima está duas formas de se fazer, e no console podemos ver as propiedades que podemos ultilizar.

### Propagação

* Qaundo não definimos um elemento muito bem (seletor brando) ou um elemento que está dentro de outro tem um evento;
* Pode acontecer a propagação, ou seja, o outro elemento ativar um evento também, aí teremos uma duplicação;
* Por isso temos um método que para está propagação e resolve este problema, o stopPropagation;

HTML:

```html
<body>
  
    <p><button id="btn1">clique em mim</button></p>

    <script src="teste.js"></script>
</body>
```

JS:

```js
let btn1 = document.querySelector('#btn1'); //pega o elemento pelo id e adiciona a variavel.
let p = document.querySelector('p');

function msg(e){
    console.log('clicou!!');
    e.stopPropagation();//eu coloco onde eu quero que o evento funcione e pare
}

btn1.addEventListener('click', msg);

p.addEventListener('click', ()=>{
   console.log('clicou no paragrafo');
});

```

Quando temos um paragrafo com um botão dentro:

ou seja quando temos evento no paragrafo e evento no botão se não usarmos o metodo stopPropagation quando clicar no botão ele vai executar

o evento do botão e o evento do paragrafo.

### Ações default

* Muitos elementos teclas já tem ações pre-definidas,como clicar num link nos levar para outra pagina;
* Podemos para este evento default, e criar uma lógica diferente para o elemento em questão;

```js
let a = document.querySelecto('a');
a.addEventListener("click", function(e){
    e.preventDefault();//ele para o evento e você pode colocar outro novo evento
    console.log('clicou mais não mudou o link');
});
```

### Eventos de tecla (key event)

* sempre que uma tecla é pressionada, são gerados dois eventos KEYUP e KEYDOWN
* podemos realizar ações nestes eventos também;
* keyup é quando soltamos a tecla;
* keydown é quando apertamos;

quando é um evento que não pertence ao navegador exemplo evento de teclado  etc usamos o window.addEventListener;

```js
window.addEventListener("keydown",(e)=>{
   if(e.key == 'q'){
      console.log('apertou a letra q');
   }
});

window.addEventListener("keyup",(e)=>{
    if(e.key == 'q'){
       console.log('soltou o q');
    }
 });
```

### Eventos de Mouse

* No mouse temos também eventos como mousedown e mouseup, semelhantes aos das teclas;
* Dblclick para ativar com dois cliques;

```js
let btn = document.querySelector('button');
let btn2 = document.querySelector('#b');

btn.addEventListener("dblclick",function(){
   console.log("Ativou o double click!");
});
/*
btn2.addEventListener("mousedown",function(){
   console.log("aperttou o botao!");
});

btn3.addEventListener("mouseup",function(){
   console.log("soltou o botao!");
});*/

/* pegando o evento do botão direito */

btn2.addEventListener("contextmenu", function(e){
    e.preventDefault();
    console.log("botão direito");
});
```

#### Movimento do Mouse

* Podemos ativar eventos com a movimentação do mouse também;
* O nome é mousemove;
* Através desse evento podemos detectar a posição do ponteiro do mouse na tela;

Exemplo:

```js
window.addEventListener('mousemove',(e)=>{
    console.log(e.x);
    console.log(e.y);
});
```

#### Eventos por scroll

* Podemos atrelar evento ao scroll da tela também, pelo vento scroll;
* Por exemplo: podemos criar um elemento assim que o scroll atingir uma posição x;

```js
window.addEventListener('scroll', function(e){
     if(window.pageYOffset> 100){
         console.log("chegou na posição");
     }
})
```

#### Eventos por foco

* Quando focamos em um elemento ou saímos dele, podemos também atrelar um evento a esta ação;
* Focus para quando um elemento recebe foco e blur quando ele perde;

exemplo:

```js
let input = document.querySelector("input");

input.addEventListener('focus', function(){
    console.log('foco no input');
});

input.addEventListener('blur', function(){
   console.log('perdeu o foco');
});

```

#### Evento de carregamento

* Podemos atrelar um evento quando a página carrega, pelo evento load;
* E antes do usuário fechar a página pelo evento beforeunload;

```js
window.addEventListener('load', function(e){
       alert('assine os nossos termos de uso');
});

window.addEventListener('beforeunload', function(e){
       e.returnValue = null;
});
```

#### Debounce

* Um evento que dispara múltiplas vezes pode ser um problema para o computador do cliente;
* Por isso podemos fazer um debounce, que é um suavizador de evento, para não o chamar o mesmo tantas vezes

```js
let timeout;

window.addEventListener('mousemove',function(e){
    this.clearTimeout(timeout);
    timeout = setTimeout(function(){
       console.log(e.x);
    },500);
});
```



