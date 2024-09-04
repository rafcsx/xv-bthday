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
        'fa-satellite',    // Satélite
        'fa-star',         // Estrela
        'fa-planet-ringed',
        'fa-galaxy',
        'fa-meteor',
        'fa-black-hole',
        'fa-star',
        'fa-comet',
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


document.addEventListener('DOMContentLoaded', function () {
    const meteor = document.querySelector('.meteor');

    setInterval(() => {
        const randomTop = Math.random() * 50 - 50; // Varia entre -50px e 0px
        const randomLeft = Math.random() * 50 - 50; // Varia entre -50px e 0px
        meteor.style.top = `${randomTop}px`;
        meteor.style.left = `${randomLeft}px`;
    }, 5000); // A cada 5 segundos, o meteoro muda de posição inicial
});