// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Form Validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let errorMessage = document.getElementById('error-message');

    if (name === '' || email === '' || message === '') {
        errorMessage.textContent = 'Please fill out all fields.';
        event.preventDefault();
    } else if (!email.includes('@')) {
        errorMessage.textContent = 'Please enter a valid email address.';
        event.preventDefault();
    } else {
        errorMessage.textContent = '';
    }
});
