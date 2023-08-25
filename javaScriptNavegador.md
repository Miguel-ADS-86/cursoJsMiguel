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

![](C:\Users\Miguel\Documents\Projetos\cursoJsMiguel\img\dom-img.png)
