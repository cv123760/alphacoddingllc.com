document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('volunteer-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            role: document.getElementById('role').value,
            message: document.getElementById('message').value
        };

        // Simple validation
        if (!formData.name || !formData.email || !formData.role) {
            alert('Please fill out all required fields.');
            return;
        }

        // Simulate a successful sign-up
        console.log('Form Data:', formData);
        alert('Thank you for signing up to volunteer! We will be in touch soon.');

        // Reset the form after submission
        form.reset();
    });
});