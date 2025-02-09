// Birthday song
const birthdaySong = new Audio('https://example.com/birthday-song.mp3');
let isMusicPlaying = false;

// Surprise button click handler
document.getElementById('surpriseButton').addEventListener('click', function() {
    createConfetti();
    showWishes();
});

// Music button click handler
document.getElementById('musicButton').addEventListener('click', function() {
    if (!isMusicPlaying) {
        birthdaySong.play();
        this.innerHTML = '<i class="fas fa-pause"></i> Pause Music';
        isMusicPlaying = true;
    } else {
        birthdaySong.pause();
        birthdaySong.currentTime = 0;
        this.innerHTML = '<i class="fas fa-music"></i> Play Birthday Song';
        isMusicPlaying = false;
    }
});

// Confetti animation
function createConfetti() {
    const colors = ['#ff6b6b', '#4ecdc4', '#ffe66d', '#ff8c42', '#6c5ce7'];
    const confettiCount = 200;
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '1000';
    document.body.appendChild(container);

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        const size = Math.random() * 10 + 5;
        
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.position = 'absolute';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = '-20px';
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        confetti.style.opacity = Math.random();
        confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
        
        container.appendChild(confetti);
    }

    setTimeout(() => container.remove(), 5000);
}

// Show birthday wishes
function showWishes() {
    const wishes = document.getElementById('wishes');
    wishes.classList.remove('hidden');
    wishes.classList.add('show');
}

// Countdown timer
function updateCountdown() {
    const birthday = new Date('2025-02-09');
    const now = new Date();
    const countdownElement = document.getElementById('countdown');

    if (now.toDateString() === birthday.toDateString()) {
        countdownElement.innerHTML = '<span class="special-text">🎉 It\'s Your Birthday Today! 🎉</span>';
        countdownElement.style.fontSize = '1.5rem';
        countdownElement.style.color = '#ff6b6b';
    } else {
        const timeDiff = birthday - now;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <div class="countdown-item">${days}d</div>
            <div class="countdown-item">${hours}h</div>
            <div class="countdown-item">${minutes}m</div>
            <div class="countdown-item">${seconds}s</div>
        `;
    }
}

// Create stars background
function createStars() {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        starsContainer.appendChild(star);
    }
}

// Initialize
createStars();
updateCountdown();
setInterval(updateCountdown, 1000);
