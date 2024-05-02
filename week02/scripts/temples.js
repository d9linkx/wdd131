// Update footer copyright year and last modified date
const copyrightYear = document.querySelector('#copyrightYear');
const lastModified = document.querySelector('#lastModified');

copyrightYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

// Hamburger menu functionality
const hamburgerButton = document.querySelector('.hamburger-menu');
const navigationMenu = document.querySelector('.navigation');

hamburgerButton.addEventListener('click', () => {
  navigationMenu.classList.toggle('hidden');
  hamburgerButton.classList.toggle('active');
});

// Show hamburger menu only on mobile screens (can be adjusted based on your needs)
if (window.screen.width <= 768) {
  hamburgerButton.style.display = 'block';
} else {
  hamburgerButton.style.display = 'none';
}
