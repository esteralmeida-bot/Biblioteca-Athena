// Seleciona os elementos que vamos usar no DOM
const botaoMenu = document.querySelector("#btn-menu");
const menu = document.querySelector(".nav");

// Escuta o evento de clique no botão hambúrguer
botaoMenu.addEventListener("click", function () {
    // Alterna (adiciona se não existir / remove se já existir) a classe "ativo"
    menu.classList.toggle("ativo");
});