// script.js
window.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
});


// Add this script to apply the blur effect on scroll
window.addEventListener('scroll', function() {
    const scrollPos = window.scrollY;
    const parallaxBg = document.querySelector('.parallax-bg');
    const blurThreshold = 200; // Adjust this threshold as needed
    
    if (scrollPos > blurThreshold) {
        parallaxBg.classList.add('blur-bg');
    } else {
        parallaxBg.classList.remove('blur-bg');
    }
});


window.onscroll = function() {
    const parallaxBg = document.querySelector('.parallax-bg');
    const scrollPosition = window.scrollY;
    
    // Add or remove class to show/hide blur
    if (scrollPosition >= 100) {
        parallaxBg.classList.add('show-blur');
    } else {
        parallaxBg.classList.remove('show-blur');
    }
};
