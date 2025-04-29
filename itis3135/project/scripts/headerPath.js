// Adjust header navigation links based on current page location
document.addEventListener('DOMContentLoaded', () => {
    // Wait for the header component to be loaded
    const checkHeaderLoaded = setInterval(() => {
        const header = document.querySelector('header');
        if (header) {
            clearInterval(checkHeaderLoaded);
            
            // Get the current page path
            const currentPath = window.location.pathname;
            
            // Detailed path debugging
            console.log('Full URL:', window.location.href);
            console.log('Pathname:', currentPath);
            console.log('Pathname includes /project/pages/:', currentPath.includes('/project/pages/'));
            console.log('Pathname includes /pages/:', currentPath.includes('/pages/'));
            
            // Check if we're in the pages directory
            const isInPagesDirectory = currentPath.includes('/project/pages/');
            console.log('Final isInPagesDirectory value:', isInPagesDirectory);
            
            // Get all navigation links
            const navLinks = document.querySelectorAll('.nav-link');
            console.log('Number of nav links found:', navLinks.length);
            
            // Adjust paths based on current location
            navLinks.forEach((link) => {
                const originalPath = link.getAttribute('data-path');
                console.log('Processing link:', link.textContent, 'Original path:', originalPath);
                
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
        }
    }, 100); // Check every 100ms
    
    // Set a timeout to stop checking after 5 seconds
    setTimeout(() => {
        clearInterval(checkHeaderLoaded);
        console.error('Header component not loaded after 5 seconds');
    }, 5000);
}); 