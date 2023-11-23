document.addEventListener("DOMContentLoaded", function () {
    var scrollBtn = document.querySelector(".back-to-top");

    window.addEventListener("scroll", function () {
        // Add or remove the "scrolled" class based on scroll position
        document.body.classList.toggle("scrolled", window.scrollY > 0);
    });

    // Smooth scroll to top when the link is clicked
    scrollBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
