import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import './Homestyles.css'; 

// Configuração do Firebase
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Inicializa o Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

document.addEventListener('DOMContentLoaded', function () {
    // Manipula o envio do formulário
    document.getElementById('form-recados').addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        const nome = document.querySelector('input[name="nome"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const recado = document.querySelector('textarea[name="recado"]').value;

        // Adiciona os dados ao Firebase
        set(ref(database, 'recados-home/' + Date.now()), {
            nome: nome,
            email: email,
            recado: recado,
            timestamp: Date.now()
        }).then(() => {
            alert('Recado enviado com sucesso!');
            document.getElementById('form-recados').reset();
        }).catch(error => {
            console.error('Erro ao enviar recado:', error.message);
        });
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

    // Função para mover os slides
    let slideIndex = 1;

    function moveSlide(n) {
        showSlide(slideIndex += n);
    }

    function currentSlide(n) {
        showSlide(slideIndex = n);
    }

    function showSlide(n) {
        let i;
        const slides = document.querySelectorAll(".carousel-item");
        const indicators = document.querySelectorAll(".indicator");

        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }

        // Ocultar todos os slides
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        // Remover a classe ativa dos indicadores
        for (i = 0; i < indicators.length; i++) {
            indicators[i].className = indicators[i].className.replace(" active", "");
        }

        // Exibir o slide atual
        slides[slideIndex - 1].style.display = "block";
        indicators[slideIndex - 1].className += " active";
    }

    // Inicializar o carousel e mostrar o primeiro slide
    showSlide(slideIndex);

    // Navegação automática do carousel a cada 3 segundos
    setInterval(() => {
        moveSlide(1); // Mover para o próximo slide
    }, 3000);

    // Adiciona eventos de clique para as setas de navegação
    const leftControl = document.querySelector('.carousel-control.left');
    const rightControl = document.querySelector('.carousel-control.right');
    
    if (leftControl) {
        leftControl.addEventListener('click', function() {
            moveSlide(-1);
        });
    }

    if (rightControl) {
        rightControl.addEventListener('click', function() {
            moveSlide(1);
        });
    }

    // Adicionar funcionalidade para indicadores
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => currentSlide(index + 1));
    });

    // Adicionar navegação por toque
    const carousel = document.querySelector('.carousel-inner');
    let startX;
    let endX;

    if (carousel) {
        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        carousel.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            if (startX > endX) {
                moveSlide(1); // Navegar para a próxima imagem
            } else {
                moveSlide(-1); // Navegar para a imagem anterior
            }
        });
    }

    // Atualizar a contagem regressiva a cada segundo
    function updateCountdown() {
        const eventDate = new Date('2024-10-11T22:00:00-03:00'); // Data e hora do evento
        const now = new Date(); // Data e hora atual
        const timeDiff = eventDate - now;

        if (timeDiff <= 0) {
            document.querySelector('.countdown').innerHTML = "<h3>Evento Encerrado</h3>";
            return;
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);

    // Toggle do menu de navegação
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            if (navMenu.style.display === 'block') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'block';
            }
        });
    }

    const navbarToggler = document.getElementById('navbar-toggler');
    const navbarCollapse = document.getElementById('responsive-navbar-nav');

    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', () => {
            navbarToggler.classList.toggle('collapsed');
            navbarCollapse.classList.toggle('show');
        });
    }

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

    // Cria estrelas
    createStars();
});
