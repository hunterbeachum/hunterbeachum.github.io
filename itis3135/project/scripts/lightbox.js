// Lightbox functionality
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    // Function to open lightbox with an image
    function openLightbox(imgSrc) {
        lightboxImg.setAttribute('data-src', imgSrc);
        lightboxImg.src = imgSrc; // Set src after data-src
        lightbox.classList.add('active');
    }

    // Add click event to all gallery images
    const galleryImages = document.querySelectorAll('.gallery-img');
    galleryImages.forEach((img) => {
        img.addEventListener('click', () => {
            openLightbox(img.src);
        });
    });

    // Add click event to exhibition image if it exists
    const exhibitionImg = document.getElementById('exhibition-img');
    if (exhibitionImg) {
        exhibitionImg.addEventListener('click', () => {
            openLightbox(exhibitionImg.src);
        });
    }

    // Add click event to gallery image if it exists
    const galleryImg = document.getElementById('gallery-img');
    if (galleryImg) {
        galleryImg.addEventListener('click', () => {
            openLightbox(galleryImg.src);
        });
    }

    // Close lightbox when clicking the close button
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    }

    // Close lightbox when clicking outside the image
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });
    }
}); 