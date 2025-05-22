document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded, checking toggle on:', window.location.pathname);

    // Mobile menu toggle
    const toggleBtn = document.querySelector('.togglebtn');
    const navLinks = document.querySelector('.navlinks');

    function updateNavDisplay() {
        if (toggleBtn && navLinks) {
            console.log('Toggle elements found:', { toggleBtn, navLinks });
            navLinks.style.display = window.innerWidth <= 930 ? 'none' : 'block';
        }
    }

    if (toggleBtn && navLinks) {
        updateNavDisplay();
        toggleBtn.addEventListener('click', () => {
            console.log('Toggle button clicked on:', window.location.pathname);
            const isOpen = navLinks.classList.toggle('open');
            console.log('Navlinks toggled to:', isOpen ? 'open' : 'closed');
            navLinks.style.display = isOpen ? 'block' : 'none';
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            updateNavDisplay();
            if (window.innerWidth > 930) {
                navLinks.classList.remove('open');
            }
        });
    } else {
        console.error('Toggle elements not found on:', window.location.pathname, { toggleBtn, navLinks });
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

    // Page-specific functionality
    const path = window.location.pathname;

    // Home page: Animate social icons on load and animate "I'm Frontend Developer" text
    if (path.includes('index.html')) {
        const socialIcons = document.querySelectorAll('.social-icon');
        socialIcons.forEach((icon, index) => {
            setTimeout(() => {
                icon.style.opacity = '1';
                icon.style.transform = 'translateY(0)';
            }, index * 200);
        });

        const animatedText = document.querySelector('.animated-text');
        if (animatedText) {
            const text = animatedText.textContent;
            animatedText.textContent = '';
            text.split('').forEach(char => {
                const span = document.createElement('span');
                span.textContent = char;
                animatedText.appendChild(span);
            });
        }
    }

    // About page: Add animations, skill card flipping, and tilt effect
    if (path.includes('about.html')) {
        const animatedSections = document.querySelectorAll('.animated-section');
        animatedSections.forEach((section, index) => {
            const elements = section.querySelectorAll('p, .skill-card');
            elements.forEach((el, i) => {
                el.style.animationDelay = `${index * 0.2 + i * 0.1}s`;
                el.style.opacity = '1';
            });
        });

        const skillCards = document.querySelectorAll('.skill-card');
        skillCards.forEach(card => {
            const handleFlip = () => card.classList.toggle('flipped');
            card.addEventListener('click', handleFlip);
            card.addEventListener('touchstart', (e) => { e.preventDefault(); handleFlip(); });

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                const tiltX = (y / rect.height) * 20;
                const tiltY = -(x / rect.width) * 20;
                card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        });
    }

    // Certificates page: Add animations and certificate card flipping
    if (path.includes('certificates.html')) {
        const animatedSections = document.querySelectorAll('.animated-section');
        animatedSections.forEach((section, index) => {
            const elements = section.querySelectorAll('.certificate-card');
            elements.forEach((el, i) => {
                el.style.animationDelay = `${index * 0.2 + i * 0.1}s`;
                el.style.opacity = '1';
            });
        });

        const certificateCards = document.querySelectorAll('.certificate-card');
        certificateCards.forEach(card => {
            const handleFlip = () => card.classList.toggle('flipped');
            card.addEventListener('click', handleFlip);
            card.addEventListener('touchstart', (e) => { e.preventDefault(); handleFlip(); });
        });
    }

    // Works page: Modal for project details
    if (path.includes('works.html')) {
        const workItems = document.querySelectorAll('.work-item');
        const modal = document.querySelector('#workModal');
        const modalTitle = document.querySelector('#modalTitle');
        const modalDescription = document.querySelector('#modalDescription');
        const modalLink = document.querySelector('#modalLink');
        const closeModal = document.querySelector('.close-modal');

        if (workItems.length && modal) {
            workItems.forEach(item => {
                item.addEventListener('click', (e) => {
                    if (e.target.classList.contains('btn')) return;
                    modalTitle.textContent = item.querySelector('h3').textContent;
                    modalDescription.textContent = item.querySelector('p').textContent;
                    modalLink.href = item.querySelector('.btn').href;
                    modal.classList.add('show');
                });
            });

            closeModal.addEventListener('click', () => modal.classList.remove('show'));
            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.classList.remove('show');
            });
        }
    }

    // Contact page: Show alert on social icon click
    if (path.includes('contact.html')) {
        const socialIcons = document.querySelectorAll('.social i');
        socialIcons.forEach(icon => {
            icon.addEventListener('click', (e) => {
                e.preventDefault();
                const platform = icon.classList.contains('fa-facebook') ? 'Facebook' :
                                icon.classList.contains('fa-linkedin') ? 'LinkedIn' :
                                icon.classList.contains('fa-instagram') ? 'Instagram' :
                                'Telegram';
                alert(`Opening ${platform}...`);
            });
        });
    }

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-icon');
    const html = document.documentElement;

    // Load saved theme or default to dark
    if (localStorage.getItem('theme')) {
        html.setAttribute('data-theme', localStorage.getItem('theme'));
        if (localStorage.getItem('theme') === 'light') {
            themeToggle.classList.replace('fa-sun', 'fa-moon');
        }
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            html.setAttribute('data-theme', 'light');
            themeToggle.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        } else {
            html.setAttribute('data-theme', 'dark');
            themeToggle.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        }
    });
});