// script.js
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-item');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('open');
        });
    });

    // Carousel functionality
    const carouselContainer = document.querySelector('.carousel-container');
    const carouselSlides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let currentIndex = 0;

    const showSlide = (index) => {
        if (index >= carouselSlides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = carouselSlides.length - 1;
        } else {
            currentIndex = index;
        }
        carouselContainer.style.transform = `translateX(${-currentIndex * 100}%)`;
    };

    prevButton.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 3000); // Auto-slide every 3 seconds
});
