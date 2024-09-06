    // Inicializa estrelas e lua
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

    createStarsAndMoon();

    // Manipulação do menu de navegação
    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarCollapse = document.getElementById('responsive-navbar-nav');

    navbarToggler.addEventListener('click', () => {
        navbarToggler.classList.toggle('collapsed');
        navbarCollapse.classList.toggle('show');
    });

    // Efeito de scroll na navbar
    const navbar = document.querySelector('.navbar');
    const scrollThreshold = 50; // Define o ponto onde o navbar muda (em pixels)

    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('navbar-scrolled'); // Adiciona a classe quando rola para baixo
        } else {
            navbar.classList.remove('navbar-scrolled'); // Remove a classe quando volta ao topo
        }
    }

    window.addEventListener('scroll', handleScroll); // Adiciona o evento de scroll ao window

    // Adicionar funcionalidade para a contagem regressiva
    function updateCountdown() {
        const eventDate = new Date('2024-10-11T22:00:00-03:00'); // Atualizado para 22:00 BRT (UTC-3)
        const now = new Date();
        const timeDiff = eventDate - now;

        if (timeDiff < 0) {
            document.querySelector('.countdown').innerHTML = "<h3>Evento Encerrado</h3>";
            return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
    }

    // Atualizar a contagem regressiva a cada minuto
    updateCountdown();
    setInterval(updateCountdown, 60000);
});
