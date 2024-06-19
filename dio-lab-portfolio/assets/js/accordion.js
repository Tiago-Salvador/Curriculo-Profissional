document.addEventListener("DOMContentLoaded", function() {
    const accordionHeaders = document.querySelectorAll(".accordion__header");
  
    accordionHeaders.forEach(header => {
      header.addEventListener("click", () => {
        const accordionItem = header.closest('.accordion__item');
        const isAccordionActive = accordionItem.classList.contains("active");
  
        // Fecha todos os itens do accordion
        document.querySelectorAll('.accordion__item').forEach(item => {
          item.classList.remove('active');
        });
  
        // Abre ou fecha o item do accordion clicado
        if (!isAccordionActive) {
          accordionItem.classList.add("active");
        }
      });
    });
  });
  