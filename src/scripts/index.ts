const Images = document.querySelectorAll(".image");
const heroDiv = document.getElementById("hero--div");
// Explicitly type as string
const ActiveImageClass: string = "active";

// Convert the NodeListOf<Element> to an array of HTMLElement
const imagesArray: HTMLElement[] = [];
Images.forEach((img) => {
  imagesArray.push(img as HTMLElement);
});

// Function to execute when the image preview is clicked, explicitly specifying the type
Images.forEach((img, index) => {
  img.addEventListener("click", () => {
    // Remove the 'active' class from all images
    imagesArray.forEach((image) => {
      image.classList.remove(ActiveImageClass);
    });

    // Add the 'active' class to the clicked image
    if (img instanceof HTMLImageElement) {
      img.classList.add(ActiveImageClass);
    }

    if (heroDiv) {
      // Remove the previously appended image from heroDiv, if any
      while (heroDiv.firstChild) {
        heroDiv.removeChild(heroDiv.firstChild);
      }

      // Clone the clicked image, excluding the 'active' class, and append it to heroDiv
      const imgClone = img.cloneNode(true) as HTMLImageElement;
      imgClone.classList.remove(ActiveImageClass);
      imgClone.classList.remove("transform");
      imgClone.classList.remove("hover:shadow-lg");
      imgClone.style.width = "100%";
      imgClone.style.borderRadius = "0";
      heroDiv.appendChild(imgClone);
    }
  });

  // Trigger click event on the first image when the page loads
  if (index === 0) {
    (img as HTMLImageElement).click();
  }
});
