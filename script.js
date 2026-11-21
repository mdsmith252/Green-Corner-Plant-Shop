// This demo form shows a message without sending or saving information.
const contactForm = document.querySelector('#contact-form');
const formStatus = document.querySelector('#form-status');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();
  formStatus.textContent = 'Thanks for reaching out! This is a demo form, so your message was not sent.';
  contactForm.reset();
});
