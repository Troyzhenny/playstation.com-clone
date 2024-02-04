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
Images.forEach((img) => {
  img.addEventListener("click", () => {
    // Remove the 'active' class from all images
    imagesArray.forEach((image) => {
      image.classList.remove(ActiveImageClass);
    });

    if (heroDiv) {
      // Add the 'active' class to the clicked image
      img.classList.add(ActiveImageClass);
    }
  });
});
