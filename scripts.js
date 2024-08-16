// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactLink = document.querySelector('.contact');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    contactLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        dropdownContent.classList.toggle('show');
    });
});
