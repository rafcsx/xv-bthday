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
function createStars() {
    const numStars = 100; // Número total de estrelas
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

    document.body.appendChild(starsContainer);
}

// Inicializar estrelas e slide
createStars();

// Função para criar e adicionar estrelas e a lua
function createStarsAndMoon() {
    const numStars = 100; // Número total de estrelas
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

// FILTRO DE PREÇO 
document.addEventListener('DOMContentLoaded', function () {
    // Lógica para o filtro de preços
    const priceFilter = document.getElementById('preco-filtro');
    const items = document.querySelectorAll('.moldura');

    priceFilter.addEventListener('change', function () {
        const selectedValue = this.value.split('-');
        const minPrice = parseFloat(selectedValue[0]);
        const maxPrice = parseFloat(selectedValue[1]);

        items.forEach(item => {
            const itemPrice = parseFloat(item.getAttribute('data-price'));
            if ((!isNaN(minPrice) && itemPrice < minPrice) || (!isNaN(maxPrice) && itemPrice > maxPrice)) {
                item.style.display = 'none';
            } else {
                item.style.display = 'block';
            }
        });
    });
})

// Função para lidar com o clique no botão de compra
function comprar(btn) {
    // Obtém o container da moldura
    const moldura = btn.closest('.moldura');

    // Seleciona o container do botão e o preço
    const botaoContainer = moldura.querySelector('.botao-container');
    const preco = botaoContainer.querySelector('div:not(button)');

    // Remove o preço e altera o botão
    preco.style.display = 'none'; // Oculta o preço
    btn.classList.add('comprado'); // Aplica a classe 'comprado'
    btn.textContent = 'Esse item já foi presenteado 🎉'; // Altera o texto do botão
    btn.style.width = 'auto'; // Ajusta a largura do botão para o conteúdo
}