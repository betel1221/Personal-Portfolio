document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name && email && subject && message) {
            form.style.display = 'none';
            successMessage.style.display = 'block';
            form.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
});