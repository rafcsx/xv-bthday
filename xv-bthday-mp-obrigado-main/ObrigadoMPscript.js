import './ObrigadoMPstyles.css'

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


    // Adicionar o ícone da lua
    const moon = document.createElement('i');
    moon.className = 'fas fa-moon';
    moon.style.position = 'absolute';
    moon.style.fontSize = '50px';
    moon.style.color = '#FE59BB';
    moon.style.left = '85%';
    moon.style.top = '10%';
    moon.style.zIndex = '0'; // A lua também deve ficar atrás

    starsContainer.appendChild(moon);

    document.body.appendChild(starsContainer);
}

createStarsAndCosmicElements();


document.addEventListener('DOMContentLoaded', function() {
    const meteor = document.querySelector('.meteor');

    setInterval(() => {
        const randomTop = Math.random() * 50 - 50; // Varia entre -50px e 0px
        const randomLeft = Math.random() * 50 - 50; // Varia entre -50px e 0px
        meteor.style.top = `${randomTop}px`;
        meteor.style.left = `${randomLeft}px`;
    }, 5000); // A cada 5 segundos, o meteoro muda de posição inicial
});

/* PRESENT */
document.addEventListener('DOMContentLoaded', function() {
    const giftRainContainer = document.getElementById('gift-rain');
    let giftCount = 0; // Contador de presentes
    const maxGifts = 20; // Número máximo de presentes fixos

    function createGiftIcon() {
        if (giftCount >= maxGifts) return; // Limita a quantidade após 8 segundos

        const icon = document.createElement('i');
        icon.classList.add('fas', 'fa-gift', 'gift');
        icon.style.left = `${Math.random() * 100}%`;
        icon.style.fontSize = `${Math.random() * 20 + 20}px`;
        icon.style.animationDuration = `${Math.random() * 3 + 3}s`;

        giftRainContainer.appendChild(icon);

        icon.addEventListener('animationend', function() {
            giftRainContainer.removeChild(icon);
            giftCount--; // Diminui o contador quando o presente é removido
        });

        giftCount++; // Aumenta o contador ao criar um novo presente
    }

    // Aumenta a quantidade de presentes nos primeiros 8 segundos
    const initialInterval = setInterval(createGiftIcon, 200);

    // Após 8 segundos, diminui a criação de novos presentes
    setTimeout(() => {
        clearInterval(initialInterval);
        setInterval(createGiftIcon, 1000); // Mantém uma quantidade fixa de presentes
    }, 8000);
});

/* efeito touch gift */ 
document.querySelectorAll('.present').forEach(present => {
    let offsetX, offsetY;
    const barrier = 20; // Margem ao redor do cursor/touch para manter o presente visível

    function onMouseMove(event) {
        const containerRect = document.body.getBoundingClientRect();
        let newX = event.pageX - offsetX;
        let newY = event.pageY - offsetY;

        // Limitar o movimento do presente para dentro da janela
        newX = Math.max(barrier, Math.min(containerRect.width - present.offsetWidth - barrier, newX));
        newY = Math.max(barrier, Math.min(containerRect.height - present.offsetHeight - barrier, newY));

        present.style.left = `${newX}px`;
        present.style.top = `${newY}px`;
    }

    function onTouchMove(event) {
        const touch = event.touches[0];
        const containerRect = document.body.getBoundingClientRect();
        let newX = touch.pageX - offsetX;
        let newY = touch.pageY - offsetY;

        // Limitar o movimento do presente para dentro da janela
        newX = Math.max(barrier, Math.min(containerRect.width - present.offsetWidth - barrier, newX));
        newY = Math.max(barrier, Math.min(containerRect.height - present.offsetHeight - barrier, newY));

        present.style.left = `${newX}px`;
        present.style.top = `${newY}px`;
    }

    function onMouseDown(event) {
        offsetX = event.clientX - present.getBoundingClientRect().left;
        offsetY = event.clientY - present.getBoundingClientRect().top;
        present.style.position = 'absolute';
        present.style.zIndex = 1000; // Garante que o item arrastado fique acima dos outros
        document.addEventListener('mousemove', onMouseMove);
    }

    function onTouchStart(event) {
        const touch = event.touches[0];
        offsetX = touch.clientX - present.getBoundingClientRect().left;
        offsetY = touch.clientY - present.getBoundingClientRect().top;
        present.style.position = 'absolute';
        present.style.zIndex = 1000;
        document.addEventListener('touchmove', onTouchMove);
    }

    function onMouseUp() {
        document.removeEventListener('mousemove', onMouseMove);
    }

    function onTouchEnd() {
        document.removeEventListener('touchmove', onTouchMove);
    }

    present.addEventListener('mousedown', onMouseDown);
    present.addEventListener('mouseup', onMouseUp);
    present.addEventListener('touchstart', onTouchStart);
    present.addEventListener('touchend', onTouchEnd);
});

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('background-music');
    audio.volume = 0.5; // Define o volume para 50% (médio)
});
