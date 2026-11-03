// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            event.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        } else {
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                event.preventDefault();
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});
