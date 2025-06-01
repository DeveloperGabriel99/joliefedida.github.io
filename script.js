// --- Efeito de Raio Seguindo o Mouse ---
const mouseSpark = document.getElementById('mouse-spark');

document.addEventListener('mousemove', (e) => {
    mouseSpark.style.left = `${e.clientX}px`;
    mouseSpark.style.top = `${e.clientY}px`;
});

document.addEventListener('mouseenter', () => {
    mouseSpark.style.width = '20px';
    mouseSpark.style.height = '20px';
    mouseSpark.style.opacity = '0.8';
});

document.addEventListener('mouseleave', () => {
    mouseSpark.style.width = '0px';
    mouseSpark.style.height = '0px';
    mouseSpark.style.opacity = '0';
});


// --- Fogos de Artifício (clique para disparar) ---
const fireworksContainer = document.getElementById('fireworks-container');
const fireworkColors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF', '#FFA500', '#800080'];

document.addEventListener('click', (e) => {
    createFirework(e.clientX, e.clientY);
});

function createFirework(x, y) {
    const numParticles = 30;
    const color = fireworkColors[Math.floor(Math.random() * fireworkColors.length)];

    for (let i = 0; i < numParticles; i++) {
        const particle = document.createElement('div');
        particle.classList.add('firework-particle');
        fireworksContainer.appendChild(particle);

        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        particle.style.backgroundColor = color;

        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 80 + 50;
        const offsetX = Math.cos(angle) * velocity;
        const offsetY = Math.sin(angle) * velocity;

        particle.style.setProperty('--x-offset', `${offsetX}px`);
        particle.style.setProperty('--y-offset', `${offsetY}px`);

        particle.addEventListener('animationend', () => {
            particle.remove();
        });
    }
}


// --- EFEITO: CHUVA (MAIS VISÍVEL E BONITA) ---
function createRain() {
    const numDrops = 300; // Aumentado para 300 gotas para maior densidade
    const body = document.body;

    for (let i = 0; i < numDrops; i++) {
        const drop = document.createElement('div');
        drop.classList.add('rain-drop');
        body.appendChild(drop);

        drop.style.left = `${Math.random() * 100}vw`;

        const duration = Math.random() * 1.5 + 0.5; // Duração entre 0.5s e 2s (mais rápida, mais dinâmica)
        drop.style.animationDuration = `${duration}s`;

        const delay = Math.random() * 3; // Atraso entre 0s e 3s (para distribuir o início da queda)
        drop.style.animationDelay = `-${delay}s`; // Usar delay negativo para que algumas já comecem caindo

        // Ajuste de tamanho da gota via JS para maior variação
        const size = Math.random() * 6 + 3; // Altura entre 30px e 90px (3*10 e 9*10)
        drop.style.height = `${size * 10}px`;
        drop.style.width = `${size / 3}px`; // Largura um pouco mais fina proporcionalmente

        drop.addEventListener('animationiteration', () => {
            drop.style.left = `${Math.random() * 100}vw`; // Reposiciona a gota horizontalmente
            drop.style.animationDuration = `${Math.random() * 1.5 + 0.5}s`; // Nova duração para variar
        });
    }
}

document.addEventListener('DOMContentLoaded', createRain);