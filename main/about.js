 document.addEventListener('DOMContentLoaded', () => {
            const cards = document.querySelectorAll('.scroll-animate');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target); // Stop observing once animated
                    }
                });
            }, { threshold: 0.2 });

            cards.forEach(card => observer.observe(card));
        });

         document.addEventListener('DOMContentLoaded', () => {
            // Scroll animation for event cards
            const cards = document.querySelectorAll('.scroll-animate');
            if (cards.length > 0) {
                if ('IntersectionObserver' in window) {
                    const observer = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('is-visible');
                                observer.unobserve(entry.target);
                            }
                        });
                    }, { threshold: 0.3 });
                    cards.forEach(card => observer.observe(card));
                } else {
                    cards.forEach(card => card.classList.add('is-visible'));
                }
            }

            // Modal functionality
            const modal = document.getElementById('event-modal');
            const modalImage = modal.querySelector('.modal-image');
            const modalTitle = modal.querySelector('.modal-title');
            const modalDescription = modal.querySelector('.modal-description');
            const closeBtn = modal.querySelector('.close-btn');
            const eventCards = document.querySelectorAll('.event-card');

            if (modal && modalImage && modalTitle && modalDescription && closeBtn && eventCards.length > 0) {
                eventCards.forEach(card => {
                    card.addEventListener('click', () => {
                        const img = card.querySelector('.event-image');
                        modalImage.src = img.getAttribute('data-fullsrc') || img.src;
                        modalTitle.textContent = card.dataset.title;
                        modalDescription.textContent = card.dataset.description;
                        modal.style.display = 'flex';
                        document.body.style.overflow = 'hidden';
                    });
                });

                closeBtn.addEventListener('click', () => {
                    modal.style.display = 'none';
                    modalImage.src = '';
                    document.body.style.overflow = 'auto';
                });

                modal.addEventListener('click', (event) => {
                    if (event.target === modal) {
                        modal.style.display = 'none';
                        modalImage.src = '';
                        document.body.style.overflow = 'auto';
                    }
                });

                document.addEventListener('keydown', (e) => {
                    if (e.key === 'Escape' && modal.style.display === 'flex') {
                        modal.style.display = 'none';
                        modalImage.src = '';
                        document.body.style.overflow = 'auto';
                    }
                });
            }
        });