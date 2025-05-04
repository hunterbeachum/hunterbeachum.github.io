// Adjust header navigation links based on current page location
document.addEventListener('DOMContentLoaded', () => {
    // Wait for the header component to be loaded
    const checkHeaderLoaded = setInterval(() => {
        const header = document.querySelector('header');
        if (header) {
            clearInterval(checkHeaderLoaded);
            
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
                        link.href = originalPath.replace('pages/', '');
                    }
                } else {
                    // If in root directory, use the original path
                    link.href = originalPath;
                }

                // Determine active link
                const resolvedLinkPath = new URL(link.href, window.location.origin).pathname;
                if (resolvedLinkPath === currentPath) {
                    link.classList.add('active');
                    console.log('Active link set:', link.textContent);
                } else {
                    link.classList.remove('active');
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