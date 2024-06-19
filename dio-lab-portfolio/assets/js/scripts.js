const acordeonTriggers = document.querySelectorAll('.acordeon .trigger');

acordeonTriggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement;
        const isOpen = acordeon.classList.contains('open');

        if (isOpen) {
            acordeon.classList.remove('open');
        } else {
            // Fecha todos os acordeões antes de abrir o atual
            closeAllAcordeons();
            acordeon.classList.add('open');
        }
    });
});

// Função para fechar todos os acordeões
function closeAllAcordeons() {
    acordeonTriggers.forEach((trigger) => {
        const acordeon = trigger.parentElement;
        acordeon.classList.remove('open');
    });
}
