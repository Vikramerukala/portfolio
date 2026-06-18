const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

// Open Lightbox
function openLightbox(index) {
    currentIndex = index;
    lightbox.style.display = "flex";
    lightboxImg.src = images[currentIndex].src;
}

// Close Lightbox
function closeLightbox() {
    lightbox.style.display = "none";
}

// Next / Previous Image
function changeImage(step) {
    currentIndex += step;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    lightboxImg.src = images[currentIndex].src;
}
images.forEach(img => {
    img.addEventListener("click", function() {

        images.forEach(i => {
            i.classList.remove("selected");
        });

        this.classList.add("selected");
    });
});
function filterSelection(category) {
    let items = document.querySelectorAll('.gallery-item');

    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}