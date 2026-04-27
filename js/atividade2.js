const paragrafo = document.getElementById("paragrafo");
const botao = document.getElementById('botao');
const fundo = document.getElementById('fundo')

botao.addEventListener("click",function(){
    paragrafo.style.color = paragrafo.style.color === "red" ? "black" : "red";
})
fundo.addEventListener("click", function(){
    document.body.style.backgroundColor = document.body.style.backgroundColor === "pink"? "white" : "pink";
})