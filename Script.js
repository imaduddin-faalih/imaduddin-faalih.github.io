// Contact Form Submission Handler
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic Validation
    if (!name || !email || !message) {
        alert('Please fill in all fields before submitting.');
        return;
    }

    // Simulate form submission (you can replace this with actual API calls)
    alert(`Thank you, ${name}! Your message has been sent successfully.`);

    // Reset the form
    document.getElementById('contact-form').reset();
});
