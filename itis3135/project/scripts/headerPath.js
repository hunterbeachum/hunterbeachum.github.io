// Adjust header navigation links based on current page location
document.addEventListener('DOMContentLoaded', () => {
    // Get the current page path
    const currentPath = window.location.pathname;
    
    // Check if we're in the pages directory
    const isInPagesDirectory = currentPath.includes('/pages/');
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Adjust paths based on current location
    navLinks.forEach((link) => {
        const originalPath = link.getAttribute('data-path');
        
        if (isInPagesDirectory) {
            // If in pages directory, add ../ to paths that don't start with ../
            if (!originalPath.startsWith('../') && originalPath !== 'index.html') {
                link.href = '../' + originalPath;
            } else if (originalPath === 'index.html') {
                // Special case for home link - needs to go up one level
                link.href = '../index.html';
            }
        } else {
            // If in root directory, use the original path
            link.href = originalPath;
        }
    });
}); 