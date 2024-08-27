// Log message to ensure script is running
console.log('JavaScript is working!');

// Handle redirection from index.html to about.html
const aboutButton = document.getElementById('aboutButton');
if (aboutButton) {
    aboutButton.addEventListener('click', () => {
        window.location.href = '/about';
    });
}

// Handle redirection from about.html to index.html
const homeButton = document.getElementById('homeButton');
if (homeButton) {
    homeButton.addEventListener('click', () => {
        window.location.href = '/';
    });
}
