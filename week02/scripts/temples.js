// Update footer copyright year and last modified date
const copyrightYear = document.getElementById('currentyear');
const lastModified = document.getElementById('lastModified');

copyrightYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

// Hamburger menu functionality
const menuToggle = document.getElementById('menuToggle'); // Add id in HTML
const navigationMenu = document.getElementById('menu'); // Add id in HTML

menuToggle.addEventListener('click', function () {
  navigationMenu.classList.toggle('show');
});

// Responsive hamburger menu functionality (optional)
// You can implement media queries or feature detection to show/hide the hamburger button based on screen size

// Example using media query (adjust breakpoint as needed)
const mediaQuery = window.matchMedia('(max-width: 768px)'); 
mediaQuery.addEventListener('change', () => {
  if (mediaQuery.matches) {
    menuToggle.style.display = 'block'; // Show hamburger button on mobile
  } else {
    menuToggle.style.display = 'none'; // Hide hamburger button on larger screens
    navigationMenu.classList.remove('show'); // Also hide the navigation menu
  }
});

// Alternatively, use feature detection (consider polyfills for older browsers)
// if (window.matchMedia('only screen and (max-width: 768px)').matches) {
//   menuToggle.style.display = 'block';
// }
