import './Photostyles.css'; // Certifique-se de que o nome está correto

/*NAVBAR*/
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    menuToggle.addEventListener('click', function () {
        if (navMenu.style.display === 'block') {
            navMenu.style.display = 'none';
        } else {
            navMenu.style.display = 'block';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarCollapse = document.getElementById('responsive-navbar-nav');

    navbarToggler.addEventListener('click', () => {
        navbarToggler.classList.toggle('collapsed');
        navbarCollapse.classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar'); // Seleciona o elemento do navbar
    const scrollThreshold = 50; // Define o ponto onde o navbar muda (em pixels)

    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('navbar-scrolled'); // Adiciona a classe quando rola para baixo
        } else {
            navbar.classList.remove('navbar-scrolled'); // Remove a classe quando volta ao topo
        }
    }

    window.addEventListener('scroll', handleScroll); // Adiciona o evento de scroll ao window
});

// Função para criar e adicionar estrelas
function createStarsAndCosmicElements() {
    const numStars = 50; // Reduzido para 50 estrelas
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    starsContainer.style.zIndex = '0'; // Mantém os ícones cósmicos atrás do campo de agradecimento

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        const size = Math.random() * 3 + 1;
        const left = Math.random() * 100;
        const top = Math.random() * 100;

        const color = Math.random() < 0.2 ? '#FE59BB' : '#fff';
        star.style.backgroundColor = color;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${left}%`;
        star.style.top = `${top}%`;

        starsContainer.appendChild(star);
    }

    // Adicionar ícones do Font Awesome
    const cosmicIcons = [
    ];

    cosmicIcons.forEach(iconClass => {
        const icon = document.createElement('i');
        icon.className = `fas ${iconClass}`;
        icon.style.position = 'absolute';
        icon.style.fontSize = `${Math.random() * 20 + 20}px`; // Tamanho variável entre 20px e 40px
        icon.style.color = '#FE59BB'; // Cor do ícone
        icon.style.left = `${Math.random() * 100}%`;
        icon.style.top = `${Math.random() * 100}%`;
        icon.style.transform = 'rotate(45deg)';
        icon.style.zIndex = '0'; // Define que esses ícones devem ficar atrás do campo de agradecimento

        starsContainer.appendChild(icon);
    });

  

    document.body.appendChild(starsContainer);
}

createStarsAndCosmicElements();


/* photo album */ 
document.addEventListener('DOMContentLoaded', function() {
    const photos = document.querySelectorAll('.photo-item img');
    const imageViewer = document.createElement('div');
    imageViewer.className = 'image-viewer';
    document.body.appendChild(imageViewer);

    const imageViewerClose = document.createElement('div');
    imageViewerClose.className = 'image-viewer-close';
    imageViewerClose.innerHTML = '&times;';
    imageViewer.appendChild(imageViewerClose);

    const imageViewerContent = document.createElement('img');
    imageViewer.appendChild(imageViewerContent);

    const zoomControls = document.createElement('div');
    zoomControls.className = 'zoom-controls';
    imageViewer.appendChild(zoomControls);

    const zoomInButton = document.createElement('button');
    zoomInButton.className = 'zoom-btn';
    zoomInButton.innerHTML = '+';
    zoomControls.appendChild(zoomInButton);

    const zoomOutButton = document.createElement('button');
    zoomOutButton.className = 'zoom-btn';
    zoomOutButton.innerHTML = '-';
    zoomControls.appendChild(zoomOutButton);

    let zoomLevel = 1;

    zoomInButton.addEventListener('click', function() {
        zoomLevel += 0.1;
        if (zoomLevel > 3) zoomLevel = 3; // Limite de zoom máximo
        imageViewerContent.style.transform = `scale(${zoomLevel})`;
    });

    zoomOutButton.addEventListener('click', function() {
        zoomLevel -= 0.1;
        if (zoomLevel < 1) zoomLevel = 1; // Limite de zoom mínimo
        imageViewerContent.style.transform = `scale(${zoomLevel})`;
    });

    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            imageViewerContent.src = this.src; // Define a imagem no visualizador
            imageViewer.style.display = 'flex'; // Exibe a seção de visualização
            zoomLevel = 1; // Redefine o nível de zoom ao abrir uma nova imagem
            imageViewerContent.style.transform = `scale(${zoomLevel})`;
        });
    });

    imageViewerClose.addEventListener('click', function() {
        imageViewer.style.display = 'none'; // Oculta a seção de visualização
    });

    imageViewer.addEventListener('click', function(e) {
        if (e.target === imageViewer) {
            imageViewer.style.display = 'none'; // Fecha se clicar fora da imagem
        }
    });
});

/* setas */ 
document.addEventListener('DOMContentLoaded', function() {
    const slideContainer = document.querySelector('.photo-slide');
    const slides = document.querySelectorAll('.photo-slide img');
    const prevButton = document.querySelector('.arrow.prev');
    const nextButton = document.querySelector('.arrow.next');
    let currentIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        slideContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    prevButton.addEventListener('click', function() {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', function() {
        showSlide(currentIndex + 1);
    });

    // Touch support
    let startX = 0;
    let endX = 0;

    slideContainer.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
    });

    slideContainer.addEventListener('touchend', function(e) {
        endX = e.changedTouches[0].clientX;
        if (startX > endX + 50) {
            showSlide(currentIndex + 1);
        } else if (startX < endX - 50) {
            showSlide(currentIndex - 1);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('photo-modal');
    const modalImage = document.getElementById('modal-image');
    const zoomInButton = document.getElementById('zoom-in');
    const zoomOutButton = document.getElementById('zoom-out');

    // Mostrar o modal ao clicar na foto
    document.querySelectorAll('.photo-gallery img').forEach(img => {
        img.addEventListener('click', function() {
            modal.style.display = 'flex';
            setTimeout(() => {
                modal.classList.add('show'); // Adiciona a classe para a transição
            }, 10);
            modalImage.src = this.src; // Definindo a imagem do modal para a imagem clicada
        });
    });

    // Fechar o modal ao clicar fora da imagem
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show'); // Remove a classe para a transição
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300); // Tempo igual ao da transição
        }
    });

    // Zoom com scroll do mouse
    let scale = 1;
    modalImage.addEventListener('wheel', function(e) {
        e.preventDefault();
        const zoomSpeed = 0.1;
        if (e.deltaY < 0) {
            scale += zoomSpeed; // Zoom in
        } else {
            scale -= zoomSpeed; // Zoom out
            if (scale < 1) scale = 1; // Não permitir zoom out além do tamanho original
        }
        modalImage.style.transform = `scale(${scale})`;
    });

    // Zoom in e out com botões
    zoomInButton.addEventListener('click', function() {
        scale += 0.1;
        modalImage.style.transform = `scale(${scale})`;
    });

    zoomOutButton.addEventListener('click', function() {
        scale -= 0.1;
        if (scale < 1) scale = 1;
        modalImage.style.transform = `scale(${scale})`;
    });
});