document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('navbar-toggler');
    const navMenu = document.getElementById('responsive-navbar-nav');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('show'); // Alterna a classe para exibir/ocultar o menu
        menuToggle.classList.toggle('collapsed'); // Alterna a classe do botão
    });

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

// Função para criar e adicionar estrelas e a lua
function createStarsAndMoon() {
    const numStars = 40; // Número total de estrelas
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';

    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.className = 'star';

        const size = Math.random() * 3 + 1; // Tamanho entre 1 e 4
        const left = Math.random() * 100; // Posição horizontal (0-100%)
        const top = Math.random() * 100; // Posição vertical (0-100%)

        // Cor aleatória: 80% branco, 20% rosa (#FE59BB)
        const color = Math.random() < 0.2 ? '#FE59BB' : '#fff';
        star.style.backgroundColor = color;

        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${left}%`;
        star.style.top = `${top}%`;

        starsContainer.appendChild(star);
    }

    // Adiciona o ícone da lua
    const moon = document.createElement('i');
    moon.className = 'fas fa-moon';
    moon.style.position = 'absolute';
    moon.style.fontSize = '30px'; // Tamanho da lua
    moon.style.color = '#FE59BB'; // Cor da lua
    moon.style.left = '85%'; // Posição horizontal
    moon.style.top = '5%'; // Posição vertical

    starsContainer.appendChild(moon);

    document.body.appendChild(starsContainer);
}

// Inicializar estrelas e lua
createStarsAndMoon();

document.getElementById('created-field').value = new Date().toISOString();
