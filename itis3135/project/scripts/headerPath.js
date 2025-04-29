// Adjust header navigation links based on current page location
document.addEventListener('DOMContentLoaded', () => {
    // Get the current page path
    const currentPath = window.location.pathname;
    
    // Check if we're in the pages directory
    const isInPagesDirectory = currentPath.includes('/project/pages/');
    
    // Debug logging
    console.log('Current path:', currentPath);
    console.log('Is in pages directory:', isInPagesDirectory);
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Adjust paths based on current location
    navLinks.forEach((link) => {
        const originalPath = link.getAttribute('data-path');
        console.log('Original path:', originalPath);
        
        if (isInPagesDirectory) {
            // If in pages directory
            if (originalPath === 'index.html') {
                // Home link needs to go up one level
                link.href = '../index.html';
            } else if (originalPath.startsWith('pages/')) {
                // Remove the 'pages/' prefix since we're already in that directory
                link.href = originalPath.replace('pages/', '');
            }
            console.log('Adjusted path:', link.href);
        } else {
            // If in root directory, use the original path
            link.href = originalPath;
            console.log('Using original path:', link.href);
        }
    });
}); 