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