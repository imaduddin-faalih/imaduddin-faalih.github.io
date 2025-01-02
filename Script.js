// Optional: Add an interaction effect or custom analytics
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        alert(`Redirecting to ${button.textContent}...`);
    });
});
