const templeFigures = document.querySelectorAll("figure");

templeFigures.forEach((figure) => {
  figure.addEventListener("click", openLightbox);
});

function openLightbox(event) {
  const clickedImage = event.currentTarget.querySelector("img");
  const lightbox = document.createElement("div"); // Create lightbox element
  lightbox.classList.add("lightbox"); // Add a class for styling

  // Add a larger version of the image to the lightbox
  const lightboxImage = document.createElement("img");
  lightboxImage.src = clickedImage.src;
  lightbox.appendChild(lightboxImage);

  // Add functionality to close the lightbox (optional)
  lightbox.addEventListener("click", closeLightbox);

  // Add the lightbox to the body
  document.body.appendChild(lightbox);
}

function closeLightbox(event) {
  if (event.target.classList.contains("lightbox")) {
    event.target.remove(); // Remove the lightbox element
  }
}
