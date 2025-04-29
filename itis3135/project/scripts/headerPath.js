// Adjust header navigation links based on current page location
document.addEventListener('DOMContentLoaded', () => {
    // Get the current page path
    const currentPath = window.location.pathname;
    
    // Check if we're in the pages directory
    const isInPagesDirectory = currentPath.includes('/project/pages/');
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Adjust paths based on current location
    navLinks.forEach((link) => {
        const originalPath = link.getAttribute('data-path');
        
        if (isInPagesDirectory) {
            // If in pages directory
            if (originalPath === 'index.html') {
                // Home link needs to go up one level
                link.href = '../index.html';
            } else if (originalPath.startsWith('pages/')) {
                // Remove the 'pages/' prefix since we're already in that directory
                link.href = originalPath.replace('pages/', '../');
            }
        } else {
            // If in root directory, use the original path
            link.href = originalPath;
        }
    });
}); 