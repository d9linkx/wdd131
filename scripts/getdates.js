// Function to set the current year
function setCurrentYear() {
    const currentYearSpan = document.querySelector('#currentyear');
    const currentYear = new Date().getFullYear();
    currentYearSpan.textContent = currentYear;
}

// Function to set the last modified date
function setLastModifiedDate() {
    const lastModifiedParagraph = document.querySelector('#lastModified');
    lastModifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
}

// Call the functions when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();
    setLastModifiedDate();
});
