document.addEventListener('DOMContentLoaded', () => {
    console.log('FocusFlow landing page loaded!');

    // In a real application, you might add:
    // - Smooth scrolling for navigation links
    // - Analytics tracking for button clicks
    // - Lazy loading for images
    // - Form validation if there was a contact form

    // Example: Smooth scroll for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});