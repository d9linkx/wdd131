// Update footer copyright year and last modified date (moved to temples.js)

// Hamburger menu functionality
const hamburgerButton = document.querySelector('.hamburger-menu');
const navigationMenu = document.querySelector('.navigation');
const closeButton = document.createElement('button'); // Create close button

// Configure close button
closeButton.textContent = 'X';
closeButton.classList.add('close-button'); // Add styling class

// Add close button to navigation menu
navigationMenu.appendChild(closeButton);

hamburgerButton.addEventListener('click', () => {
  navigationMenu.classList.toggle('hidden');
  hamburgerButton.classList.toggle('active');
  closeButton.classList.toggle('active'); // Toggle close button visibility
});

// Responsive hamburger menu functionality (moved to temples.js)
