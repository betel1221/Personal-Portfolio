document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form'); // Select the form directly or by its ID if you add one
    const successMessageDiv = document.getElementById('thankYouMessage'); // Make sure this ID matches your HTML

    form.addEventListener('submit', async (e) => { // Made the event listener async
        e.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic client-side validation
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return; // Stop the function if validation fails
        }

        // Prepare data for Formspree
        const formData = new FormData(form); // Get all form data easily
        formData.append('_subject', subject); // Formspree uses _subject for the email subject line

        try {
            // Send data to Formspree
            const response = await fetch("https://formspree.io/f/mnndkvgj", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json' // Essential for Formspree to return JSON for AJAX
                }
            });

            if (response.ok) { // Check if the submission was successful
                form.style.display = 'none'; // Hide the form
                successMessageDiv.style.display = 'block'; // Show the success message
                form.reset(); // Reset form fields
            } else {
                // Handle errors (e.g., show an error message)
                const data = await response.json(); // Try to parse error message from Formspree
                if (data.errors) {
                    alert('Oops! There was an error sending your message: ' + data.errors.map(err => err.message).join(', '));
                } else {
                    alert('Oops! There was an error sending your message. Please try again.');
                }
                console.error('Formspree error:', response.status, data);
            }
        } catch (error) {
            // Handle network errors
            alert('A network error occurred. Please check your internet connection and try again.');
            console.error('Network error:', error);
        }
    });
});