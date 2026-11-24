const contactForm = document.getElementById('contact-form');
const formNote = document.getElementById('form-note');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  formNote.textContent = 'Thanks for your message! This demo form is ready to connect to an email service.';
  contactForm.reset();
});