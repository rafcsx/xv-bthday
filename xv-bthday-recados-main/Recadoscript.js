import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDbF2NHNj4wdRiNJKrRoQ4pAoVkJAy_yP8",
    authDomain: "xv-sophia-4ac28.firebaseapp.com",
    databaseURL: "https://xv-sophia-4ac28-default-rtdb.firebaseio.com",
    projectId: "xv-sophia-4ac28",
    storageBucket: "xv-sophia-4ac28.appspot.com",
    messagingSenderId: "636614421828",
    appId: "1:636614421828:web:7111bcf89337fef75e7b11",
    measurementId: "G-X8DEW4STTG"
};

// Inicializa o Firebase
const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);

document.addEventListener("DOMContentLoaded", function () {
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

    // Recupera os comentários do Firebase e exibe-os
    onValue(ref(database, 'recados-home'), function (snapshot) {
        const recadosContainer = document.getElementById('recados-container');
        recadosContainer.innerHTML = ''; // Limpa os comentários atuais

        snapshot.forEach(function (childSnapshot) {
            const recadoData = childSnapshot.val();
            const recadoElement = document.createElement('div');
            recadoElement.classList.add('recado');

            recadoElement.innerHTML = `
                <div class="recado-balao">
                    <p>${recadoData.recado}</p>
                </div>
                <br>
                <div class="recado-nome">
                    <h3>${recadoData.nome}</h3>
                </div>
                <small>${new Date(recadoData.timestamp).toLocaleString()}</small>
            `;

            // Função para gerar um gradiente aleatório com boa harmonia de cores
            function generateRandomGradient() {
                const colors = [
                    "#FF7E79", "#FFCC00", "#66FF66", "#00CCCC",
                    "#FF66B2", "#FF9933", "#6699FF", "#CC33FF"
                ];

                const color1 = colors[Math.floor(Math.random() * colors.length)];
                const color2 = colors[Math.floor(Math.random() * colors.length)];

                return `linear-gradient(90deg, ${color1}, ${color2}, #FFFFFF)`;
            }

            // Define o gradiente aleatório no nome
            const nomeElement = recadoElement.querySelector('.recado-nome h3');
            nomeElement.style.background = generateRandomGradient();
            nomeElement.style.backgroundClip = 'text'; // Faz com que o gradiente apareça apenas no texto
            nomeElement.style.color = 'transparent'; // Torna o texto transparente para ver o gradiente
            nomeElement.style.animation = 'gradient-move 5s linear infinite'; // Aplica a animação ao gradiente

            recadosContainer.appendChild(recadoElement);
        });
    });

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
