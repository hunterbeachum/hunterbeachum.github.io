// Lightbox functionality
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    // Function to open lightbox with an image
    function openLightbox(imgSrc) {
        // Get the data-img attribute which contains the large image filename
        const largeImgSrc = imgSrc.getAttribute('data-img');
        // Construct the path to the large image
        const fullImgPath = '../images/' + largeImgSrc + '.jpg';
        
        lightboxImg.setAttribute('data-src', fullImgPath);
        lightboxImg.src = fullImgPath; // Set src after data-src
        lightbox.classList.add('active');
    }

    // Add click event to all gallery images
    const galleryImages = document.querySelectorAll('.gallery-img');
    galleryImages.forEach((img) => {
        img.addEventListener('click', () => {
            openLightbox(img);
        });
    });

    // Add click event to exhibition image if it exists
    const exhibitionImg = document.getElementById('exhibition-img');
    if (exhibitionImg) {
        exhibitionImg.addEventListener('click', () => {
            openLightbox(exhibitionImg);
        });
    }

    // Add click event to gallery image if it exists
    const galleryImg = document.getElementById('gallery-img');
    if (galleryImg) {
        galleryImg.addEventListener('click', () => {
            openLightbox(galleryImg);
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