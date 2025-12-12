// Esperar a que el documento cargue
document.addEventListener("DOMContentLoaded", () => {
    
    // Efecto simple de aparición suave para el Hero
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = "0";
    heroContent.style.transform = "translateY(20px)";
    heroContent.style.transition = "opacity 1s ease, transform 1s ease";

    setTimeout(() => {
        heroContent.style.opacity = "1";
        heroContent.style.transform = "translateY(0)";
    }, 100);

    // Saludo en la consola (detalle friki)
    console.log("¡Hola! Si estás viendo esto, deberíamos trabajar juntos. 🚀");
});
