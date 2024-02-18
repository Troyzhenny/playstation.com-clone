var Images = document.querySelectorAll(".image");
var heroDiv = document.getElementById("hero--div");
// Explicitly type as string
var ActiveImageClass = "active";
// Convert the NodeListOf<Element> to an array of HTMLElement
var imagesArray = [];
Images.forEach(function (img) {
    imagesArray.push(img);
});
// Function to execute when the image preview is clicked, explicitly specifying the type
Images.forEach(function (img, index) {
    img.addEventListener("click", function () {
        // Remove the 'active' class from all images
        imagesArray.forEach(function (image) {
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
            var imgClone = img.cloneNode(true);
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
        img.click();
    }
});
