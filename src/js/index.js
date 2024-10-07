const botaomostraprojetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaomostraprojetos.addEventListener('click', () => {
    mostrarMaisPorjetos();
    esconderBotao();
});

function esconderBotao() {
    botaomostraprojetos.classList.add('remover');
}

function mostrarMaisPorjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

