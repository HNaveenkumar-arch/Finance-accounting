document.addEventListener("DOMContentLoaded", () => {

    // ================= 1. INITIALIZE AOS ANIMATION =================
    AOS.init({
        once: true, // Animation happens only once when scrolling down
        offset: 50, // Trigger point from bottom
        easing: 'ease-in-out',
    });

    // ================= 2. HERO TEXT REVEAL ANIMATION (Custom) =================
    const words = document.querySelectorAll('.word-text');
    const breadcrumb = document.querySelector('.breadcrumb');

    if (words.length > 0) {
        words.forEach((word, index) => {
            setTimeout(() => {
                word.style.transition = "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease";
                word.style.transform = "translate(0px, 0%)";
                word.style.opacity = "1";
            }, index * 120);
        });

        const totalWordAnimTime = (words.length * 120) + 300;
        setTimeout(() => {
            breadcrumb.style.transition = "transform 0.8s ease, opacity 0.8s ease";
            breadcrumb.style.transform = "translate(0px, 0px)";
            breadcrumb.style.opacity = "1";
        }, totalWordAnimTime);
    }

    // ================= 3. MOBILE HAMBURGER MENU TOGGLE =================
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // ================= 4. NEWSLETTER FORM SUBMISSION =================
 
});

document.addEventListener("DOMContentLoaded", () => {
    const counterValues = document.querySelectorAll(".counter-value");
    const speed = 200; // Animation speed

    const startCounter = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const updateCount = () => {
                    const target = +counter.getAttribute("data-target");
                    const count = +counter.innerText;
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 15);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
                observer.unobserve(counter); // Trigger only once
            }
        });
    };

    // Intersection Observer to detect when section comes into view
    const observer = new IntersectionObserver(startCounter, {
        threshold: 0.5,
    });

    counterValues.forEach(counter => observer.observe(counter));
});