//  document.addEventListener('DOMContentLoaded', () => {
//             const cards = document.querySelectorAll('.scroll-animate');
//             const observer = new IntersectionObserver((entries) => {
//                 entries.forEach(entry => {
//                     if (entry.isIntersecting) {
//                         entry.target.classList.add('is-visible');
//                         observer.unobserve(entry.target); // Stop observing once animated
//                     }
//                 });
//             }, { threshold: 0.2 });

//             cards.forEach(card => observer.observe(card));
//         });