// Update footer copyright year and last modified date
const copyrightYear = document.getElementById('currentyear');
const lastModified = document.getElementById('lastModified');

copyrightYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

// Hamburger menu functionality
const hamburgerButton = document.querySelector('.hamburger-menu'); // Add class in CSS
const navigationMenu = document.querySelector('.navigation'); // Add class in CSS
const closeButton = document.createElement('button');

// Configure close button
closeButton.textContent = 'X';
closeButton.classList.add('close-button'); // Add styling class in CSS

// Add close button to navigation menu (optional - for better accessibility)
navigationMenu.appendChild(closeButton);

hamburgerButton.addEventListener('click', () => {
  navigationMenu.classList.toggle('hidden');
  hamburgerButton.classList.toggle('active');
  closeButton.classList.toggle('active'); // Toggle close button visibility
});

// Responsive hamburger menu functionality (optional)
// You can implement media queries or feature detection to show/hide the hamburger button based on screen size

// Example using media query (adjust breakpoint as needed)
const mediaQuery = window.matchMedia('(max-width: 768px)'); 
mediaQuery.addEventListener('change', () => {
  if (mediaQuery.matches) {
    hamburgerButton.style.display = 'block'; // Show hamburger button on mobile
  } else {
    hamburgerButton.style.display = 'none'; // Hide hamburger button on larger screens
  }
});

// Alternatively, use feature detection (consider polyfills for older browsers)
// if (window.matchMedia('only screen and (max-width: 768px)').matches) {
//   hamburgerButton.style.display = 'block';
// }
