// menu toggle coed start

const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

// menu toggle code end




document.addEventListener("DOMContentLoaded", function () {

    const section = document.querySelector(".tool-container");
    const bars = document.querySelectorAll(".progress-fill");

    function animateCount(element, target) {
        let current = 0;
        const increment = target / 100;
        const interval = setInterval(() => {
            current += increment;

            if (current >= target) {
                current = target;
                clearInterval(interval);
            }

            element.textContent = Math.floor(current) + "%";
        }, 15);
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                bars.forEach(bar => {
                    const percent = parseInt(bar.dataset.percent);
                    bar.style.width = percent + "%";

                    const text = bar.querySelector(".percent");
                    animateCount(text, percent);
                });

                observer.unobserve(section);
            }
        });
    }, { threshold: 0.4 });

    observer.observe(section);

});

