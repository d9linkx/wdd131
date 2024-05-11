// Function template to add event listeners
function performAction(eventName, elementId, actionFunction) {
    const element = document.getElementById(elementId);
    element.addEventListener(eventName, actionFunction);
  }
  
  // Script.js code for image carousel
  const carouselImages = document.querySelectorAll(".carousel img");
  let currentImageIndex = 0;
  
  function showImage(index) {
    carouselImages.forEach((image) => image.classList.remove("active"));
    carouselImages[index].classList.add("active");
    currentImageIndex = index;
  }
  
  // Show the first image initially
  showImage(currentImageIndex);
  
  // Add event listeners for navigation buttons (if applicable)
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  
  performAction("click", "prevButton", () => {
    const newIndex = currentImageIndex === 0 ? carouselImages.length - 1 : currentImageIndex - 1;
    showImage(newIndex);
  });
  
  performAction("click", "nextButton", () => {
    const newIndex = (currentImageIndex + 1) % carouselImages.length;
    showImage(newIndex);
  });
  
  // Select references to input, button, and list elements
  const input = document.querySelector('#favchap');
  const button = document.querySelector('button');
  const list = document.querySelector('#chapterList'); // Fill in the blank with the ID of the unordered list
  
  // Event listener for button click (using performAction)
  performAction("click", "button", addChapter);
  
  function addChapter() {
    // ... rest of the addChapter function (unchanged)
  }
  
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
  