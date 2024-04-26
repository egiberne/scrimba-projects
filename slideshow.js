document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");

    let currentSlide = 0;

    // Function to show a specific slide
    function showSlide(index) {
        slides.forEach((slide) => slide.classList.remove("active"));
        dots.forEach((dot) => dot.classList.remove("active"));

        slides[index].classList.add("active");
        dots[index].classList.add("active");
    }

    // Function to move to the next slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Function to handle dot click events
    function onDotClick(index) {
        currentSlide = index;
        showSlide(currentSlide);
    }

    // Set up automatic slide transition every 10 seconds
    setInterval(nextSlide, 10000);

    // Event listeners for dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener("click", () => onDotClick(index));
    });
});
