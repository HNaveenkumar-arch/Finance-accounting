document.addEventListener("DOMContentLoaded", () => {


    AOS.init({
        once: true,
        offset: 50,
        easing: 'ease-in-out',
    });


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

    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {

                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                document.body.style.overflow = 'hidden';
            } else {

                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                document.body.style.overflow = '';
            }
        });
    }


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
                observer.unobserve(counter);
            }
        });
    };

    const observer = new IntersectionObserver(startCounter, {
        threshold: 0.5,
    });

    counterValues.forEach(counter => observer.observe(counter));
});