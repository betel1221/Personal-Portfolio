// Shared functionality for all pages
document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const toggleBtn = document.querySelector('.togglebtn');
    const navLinks = document.querySelector('.navlinks');

    if (toggleBtn && navLinks) {
        toggleBtn.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });
    } else {
        console.log('Toggle button or navlinks not found');
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});