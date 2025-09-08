document.addEventListener('DOMContentLoaded', function () {

    // Variables to keep track of the current testimonial and total number of testimonials
    let currentIndex = 0;
    const testimonials = document.querySelectorAll(".testimonial");
    const indicators = document.querySelectorAll(".slider-indicator");
    const totalTestimonials = testimonials.length;

    // Function to update the slider's position
    function updateSlider() {
        // Calculate the offset for the testimonials track
        const offset = -currentIndex * 100;
        document.getElementById("testimonialsTrack").style.transform = `translateX(${offset}%)`;

        // Update active indicator
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle("active", index === currentIndex);
        });
    }

    // Function to move to the previous testimonial
    function showPrevious() {
        currentIndex = (currentIndex - 1 + totalTestimonials) % totalTestimonials;
        updateSlider();
    }

    // Function to move to the next testimonial
    function showNext() {
        currentIndex = (currentIndex + 1) % totalTestimonials;
        updateSlider();
    }

    // Event listeners for control buttons
    document.getElementById("controlBack").addEventListener("click", showPrevious);
    document.getElementById("controlForward").addEventListener("click", showNext);

    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            currentIndex = index;
            updateSlider();
        });
    });

    // Optional: Automatically cycle through testimonials every few seconds
    let autoSlideInterval = setInterval(showNext, 5000);

    // Pause auto-slide on user interaction
    document.getElementById("testimonialsSlider").addEventListener("mouseenter", () => {
        clearInterval(autoSlideInterval);
    });

    document.getElementById("testimonialsSlider").addEventListener("mouseleave", () => {
        autoSlideInterval = setInterval(showNext, 5000);
    });

});