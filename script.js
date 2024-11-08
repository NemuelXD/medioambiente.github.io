let index = 0;

// Función para mover el carrusel
function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-image');
    const totalSlides = slides.length;
    index = (index + step + totalSlides) % totalSlides;
    document.querySelector('.carousel-slide').style.transform = `translateX(-${index * 100}%)`;
}

// Mueve el carrusel automáticamente cada 5 segundos (5000 milisegundos)
setInterval(() => {
    moveSlide(1);  // Esto hace que el carrusel avance una imagen cada intervalo
}, 5000);

// Si deseas que los botones manuales sigan funcionando, mantenemos la lógica de los botones
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));
