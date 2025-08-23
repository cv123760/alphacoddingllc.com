document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const saveBtn = document.getElementById('save-btn');
    const resetBtn = document.getElementById('reset-btn');
    const settingsForm = document.getElementById('settings-form');

    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
    }

    // Toggle theme on click
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });

    // Save changes and log form data
    saveBtn.addEventListener('click', () => {
        const formData = new FormData(settingsForm);
        const settings = {};

        // Collect all input values
        settings.theme = themeToggle.checked ? 'dark' : 'light';
        settings.emailNotifications = document.getElementById('email-notifications').checked;
        settings.pushNotifications = document.getElementById('push-notifications').checked;
        settings.userName = document.getElementById('user-name').value;
        settings.userEmail = document.getElementById('user-email').value;
        settings.language = document.getElementById('language').value;

        console.log("Saving settings:", settings);
        alert("Settings saved successfully!");
    });

    // Reset form fields
    resetBtn.addEventListener('click', () => {
        settingsForm.reset();
        // Also reset theme to default (light)
        document.body.classList.remove('dark-theme');
        themeToggle.checked = false;
        localStorage.setItem('theme', 'light');
        alert("Settings have been reset.");
    });
});