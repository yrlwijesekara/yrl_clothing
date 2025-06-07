// Theme toggling functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check if user has a saved preference
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.classList.replace('bi-moon-fill', 'bi-sun-fill');
    }
    
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        
        // Update icon
        if (document.body.classList.contains('dark-theme')) {
            themeToggle.classList.replace('bi-moon-fill', 'bi-sun-fill');
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.classList.replace('bi-sun-fill', 'bi-moon-fill');
            localStorage.setItem('theme', 'light');
        }
    });
});