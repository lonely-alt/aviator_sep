// Récupérer le bouton
const followBtn = document.getElementById('followBtn');

// Ajouter l'événement de clic
followBtn.addEventListener('click', function() {
    // Rediriger vers le lien Telegram
    window.location.href = 'https://t.me/Wakanimes';
});

// Optionnel : Ajouter un effet de feedback visuel
followBtn.addEventListener('mousedown', function() {
    this.style.transform = 'scale(0.95)';
});

followBtn.addEventListener('mouseup', function() {
    this.style.transform = 'scale(1)';
});

// Pour les appareils tactiles
followBtn.addEventListener('touchstart', function() {
    this.style.opacity = '0.8';
});

followBtn.addEventListener('touchend', function() {
    this.style.opacity = '1';
});
