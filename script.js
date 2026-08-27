const form = document.querySelector('#contactForm');
const statusMessage = document.querySelector('.form-status');
const year = document.querySelector('#year');

if (year) year.textContent = new Date().getFullYear();

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        statusMessage.textContent = 'Mensagem pronta! Em breve entraremos em contato.';
        form.reset();
    });
}