document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('workModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalVideoSource = modalVideo.querySelector('source');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalLink = document.getElementById('modalLink');
    const closeModal = document.querySelector('.close-modal');
    const viewProjectButtons = document.querySelectorAll('.view-project-btn');
    const workVideos = document.querySelectorAll('.work-video');

    // Play videos on hover
    workVideos.forEach(video => {
        video.addEventListener('mouseenter', () => {
            video.play();
        });
        video.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0; // Reset to start
        });
    });

    // Open modal when a "View Project" button is clicked
    viewProjectButtons.forEach(button => {
        button.addEventListener('click', () => {
            const workItem = button.closest('.work-item');
            const title = workItem.getAttribute('data-title');
            const description = workItem.getAttribute('data-description');
            const link = workItem.getAttribute('data-link');
            const videoSrc = workItem.getAttribute('data-video');

            modalVideoSource.src = videoSrc;
            modalVideo.load(); // Reload the video with the new source
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalLink.href = link;
            modalLink.textContent = `Visit ${title} on GitHub`; // Dynamically set button text

            modal.classList.add('show');
        });
    });

    // Close modal when the close button is clicked
    closeModal.addEventListener('click', () => {
        modal.classList.remove('show');
        modalVideo.pause(); // Pause the video when closing
    });

    // Close modal when clicking outside the modal content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            modalVideo.pause(); // Pause the video when closing
        }
    });
});