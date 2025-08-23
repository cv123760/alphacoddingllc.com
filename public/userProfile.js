document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove 'active' class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            // Add 'active' class to the clicked tab
            tab.classList.add('active');

            // Get the target content section based on data-tab-target attribute
            const targetId = tab.dataset.tabTarget;
            const targetContent = document.querySelector(targetId);

            // Add 'active' class to the target content
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});