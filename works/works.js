document.addEventListener('DOMContentLoaded', () => {
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
});