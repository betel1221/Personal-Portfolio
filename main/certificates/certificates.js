document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("certificate-modal");
    const modalImage = modal.querySelector(".modal-image");
    const modalTitle = modal.querySelector(".modal-title");
    const modalDescription = modal.querySelector(".modal-description");
    const closeBtn = modal.querySelector(".close-btn");
    const certificateCards = document.querySelectorAll(".certificate-card");

    certificateCards.forEach(card => {
        card.addEventListener("click", () => {
            modalImage.src = card.querySelector("img").src;
            modalTitle.textContent = card.dataset.title;
            modalDescription.textContent = card.dataset.description;
            modal.style.display = "flex";
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});