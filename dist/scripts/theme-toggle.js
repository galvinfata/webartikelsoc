document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved user preference, if any, and apply it
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(currentTheme);

    themeToggleButton.addEventListener('click', () => {
        // Toggle between light and dark themes
        if (body.classList.contains('light')) {
            body.classList.remove('light');
            body.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark');
            body.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
    });
});