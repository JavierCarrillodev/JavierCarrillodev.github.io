document.addEventListener('DOMContentLoaded', function () {
    // Inicializar AOS
    AOS.init({
        duration: 1000, // Duración de la animación en milisegundos
        once: false     // Se anima cada vez que aparece en pantalla
    });

    // Lógica del carrusel
    const carrusel = document.getElementById('videoCarrusel');
    if (carrusel) {
        carrusel.addEventListener('slide.bs.carousel', function (event) {
            const videos = carrusel.querySelectorAll('video');

            // Pausa y reinicia todos los videos
            videos.forEach(video => {
                video.pause();
                video.currentTime = 0;
            });

            // Reproduce el video del próximo slide (después de la transición)
            const nextSlide = carrusel.querySelectorAll('.carousel-item')[event.to];
            const video = nextSlide ? nextSlide.querySelector('video') : null;
            if (video) {
                setTimeout(() => {
                    video.play();
                }, 600);
            }
        });
    }
    });

