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

