document.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL
    const currentPage = window.location.pathname;
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    // Remove 'active' class from all links first
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Find the link that matches the current page and add 'active' class
    navLinks.forEach(link => {
        // Get the href attribute of the link
        const linkHref = link.getAttribute('href');
        
        // Check if the current page URL contains the link's href
        // This handles both exact matches and partial matches
        if (currentPage.includes(linkHref) && linkHref !== '../index.html') {
            link.classList.add('active');
        }
        
        // Special case for the home page
        if (currentPage.endsWith('index.html') && linkHref === '../index.html') {
            link.classList.add('active');
        }
    });
}); 