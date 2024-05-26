
// Select all the slides and set the current slide to the first one
const slides = document.querySelectorAll('.work1');
let currentSlide = 0;

// Function to change the slide
function changeSlide(n) {
    // Remove the 'active' class from the current slide
    slides[currentSlide].classList.remove('active');

    // Calculate the new slide index by adding 'n' to the current slide index and using modulo to loop around
    currentSlide = (currentSlide + n + slides.length) % slides.length;

    // Remove the 'active' class from all slides
    slides.forEach(slide => slide.classList.remove('active'));

    // Add the 'active' class to the new slide
    slides[currentSlide].classList.add('active');
}

// Function to check the viewport size and adjust the slides accordingly
function checkViewport() {
    if (window.innerWidth <= 430) {
        // Hide all slides and show only the first one
        slides.forEach(slide => slide.style.display = 'none');
        slides[0].style.display = 'block';

        // Show the carousel navigation buttons
        document.querySelector('.carousel-nav').style.display = 'flex';
    } else {
        // Show all slides and hide the carousel navigation buttons
        slides.forEach(slide => slide.style.display = 'block');
        document.querySelector('.carousel-nav').style.display = 'none';
    }
}

// Add event listeners for window resize and load events
window.addEventListener('resize', checkViewport);
window.addEventListener('load', checkViewport);
