
const sunModal = document.getElementById('sunModal');
const sunModalButton = document.getElementById('sunModalButton');
const closeSunModal = document.getElementById('closeSunModal');

sunModalButton.addEventListener('click', () => {
    sunModal.style.display = 'block';
    sunModal.classList.add('show');
});

closeSunModal.addEventListener('click', () => {
    sunModal.style.display = 'none';
    sunModal.classList.remove('show');
});

window.addEventListener('click', (event) => {
    if (event.target === sunModal) {
        sunModal.style.display = 'none';
        sunModal.classList.remove('show');
    }
});
