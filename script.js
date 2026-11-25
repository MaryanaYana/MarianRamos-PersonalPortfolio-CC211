const contactForm = document.getElementById("contactForm");

const feedback = document.getElementById("feedback");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
    }

    feedback.textContent = "Thank you! Your message is ready.";

    contactForm.reset();

});
