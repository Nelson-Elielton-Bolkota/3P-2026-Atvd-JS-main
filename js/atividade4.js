// ATIVIDADE 4 (base da atividade 3)
// ==============================

// Dentro do evento de adicionar item:

// 1. Criar o botão de remover
// → usar document.createElement()

// 2. Adicionar texto ao botão
// → exemplo: "Remover" ou "X"

// 3. Adicionar evento de clique no botão
// → quando clicar:
//    - remover o item da lista (li.remove())

// 4. Colocar o botão dentro do <li>
// → usar appendChild()
const input = document.getElementById("input");
const botao = document.getElementById("botao");
const lista = document.getElementById("lista");

botao.addEventListener("click", function () {

    const texto = input.value;

        const item = document.createElement("li");
        item.textContent = texto;

        const remover = document.createElement("button");
        remover.textContent = "X";

        remover.addEventListener("click", function () {
            item.remove();
        });

        item.appendChild(remover);
        lista.appendChild(item);
        input.value = "";
})