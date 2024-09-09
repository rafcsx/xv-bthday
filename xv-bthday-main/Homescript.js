import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';
import './Homestyles.css';

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
    const form = document.getElementById('form-recados');
    const submitButton = form.querySelector('button[type="submit"]');
    const recadosContainer = document.getElementById('recados-container');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Desabilita o botão de envio
        submitButton.disabled = true;

        const nome = document.querySelector('input[name="nome"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const recado = document.querySelector('textarea[name="recado"]').value;

        // Gera um ID único para o recado
        const recadoId = Date.now();
        const recadoRef = ref(database, 'recados-home/' + recadoId);

        // Verifica se o recado já existe
        onValue(recadoRef, (snapshot) => {
            if (!snapshot.exists()) {
                // Adiciona os dados ao Firebase
                set(recadoRef, {
                    nome: nome,
                    email: email,
                    recado: recado,
                    timestamp: recadoId
                }).then(() => {
                    alert('Recado enviado com sucesso!');
                    form.reset();
                    submitButton.disabled = false;

                    // Adiciona o recado ao container
                    addRecadoToContainer({ nome, recado, timestamp: recadoId });
                }).catch(error => {
                    console.error('Erro ao enviar recado:', error.message);
                    submitButton.disabled = false;
                });
            } else {
                alert('Esse recado já foi enviado.');
                submitButton.disabled = false;
            }
        });
    });

    function addRecadoToContainer(recadoData) {
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
    }

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

    setInterval(updateCountdown, 1000); // Atualiza a cada segundo
    updateCountdown(); // Chama imediatamente para evitar atraso inicial

    // Chama a função para criar e adicionar estrelas
    createStars();
});
