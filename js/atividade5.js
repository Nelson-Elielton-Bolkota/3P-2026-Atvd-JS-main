// ATIVIDADE 5 (base da atividade 3)
// ==============================

// PARTE 1 — Criar função para adicionar tarefas
// → função responsável por criar o <li>
// → reutilizar código da atividade 3

// PARTE 2 — Evento do botão "Adicionar"
// → usar addEventListener
// → pegar valor do input
// → chamar função que cria o <li>
// → limpar o input

// PARTE 3 — Salvar dados no localStorage
// → criar função salvar()
// → percorrer todos os <li>
// → pegar o texto de cada item
// → guardar em uma lista (array)
// → transformar em JSON (JSON.stringify)
// → salvar no localStorage

// PARTE 4 — Carregar dados ao abrir a página
// → usar: document.addEventListener("DOMContentLoaded")
// → buscar dados do localStorage
// → transformar JSON em lista (JSON.parse)
// → recriar os <li> na tela

// PARTE 5 — Atualizar sempre que mudar
// → chamar salvar() ao:
//    - adicionar item
//    - Carregar a página
const input = document.getElementById('input');
const botao = document.getElementById('botao');
const lista = document.getElementById('lista');

function criarItem(texto) {
    const item = document.createElement("li");
    item.textContent = texto;

    const remover = document.createElement("button");
    remover.textContent = "X";

    remover.addEventListener("click", function () {
        item.remove();
    });

    item.appendChild(remover);
    lista.appendChild(item);
}

botao.addEventListener("click", function () {
    const texto = input.value;

    if (texto === "") return;

    criarItem(texto);

    salvar(); 
    input.value = "";
});


function salvar() {
    const itens = document.querySelectorAll("#lista li");

    const dados = [];

    itens.forEach(function (li) {
        const texto = li.firstChild.textContent;
        dados.push(texto);
    });

    localStorage.setItem("lista", JSON.stringify(dados));
}



document.addEventListener("DOMContentLoaded", function () {
    const dados = JSON.parse(localStorage.getItem("lista")) || [];

    dados.forEach(function (texto) {
        criarItem(texto);
    });
});