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
Images.forEach(function (img) {
    img.addEventListener("click", function () {
        // Remove the 'active' class from all images
        imagesArray.forEach(function (image) {
            image.classList.remove(ActiveImageClass);
        });
        if (heroDiv) {
            // Add the 'active' class to the clicked image
            img.classList.add(ActiveImageClass);
        }
    });
});
