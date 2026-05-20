document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        once: true,
        mirror: false
    });

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

    const track = document.getElementById('services-track');

    if (track) {
        const cards = Array.from(track.children);
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            track.appendChild(clone);
        });

        let scrollAmount = 0;
        const speed = 1.3;

        function autoScrollEngine() {
            scrollAmount -= speed;

            if (Math.abs(scrollAmount) >= track.scrollWidth / 2) {
                scrollAmount = 0;
            }

            track.style.transform = `translateX(${scrollAmount}px)`;
            requestAnimationFrame(autoScrollEngine);
        }

        autoScrollEngine();
    }

    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    if (tabButtons.length > 0 && tabPanes.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));

                button.classList.add('active');

                const targetId = button.getAttribute('data-target');
                const targetPane = document.getElementById(targetId);

                if (targetPane) {
                    targetPane.classList.add('active');
                }
            });
        });
    }

    const financeMarquee = document.getElementById('finance-marquee');
    if (financeMarquee) {
        const textSpans = Array.from(financeMarquee.children);
        textSpans.forEach(span => {
            const clone = span.cloneNode(true);
            financeMarquee.appendChild(clone);
        });
    }
});

const faqHeaders = document.querySelectorAll('.faq-header');

if (faqHeaders.length > 0) {
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentFaqCard = header.parentElement;
            const currentAnswerDrawer = currentFaqCard.querySelector('.faq-ans');
            const isOpen = currentFaqCard.classList.contains('active');

            document.querySelectorAll('.faq-content').forEach(card => {
                card.classList.remove('active');
                card.querySelector('.faq-ans').style.maxHeight = null;
                card.querySelector('.faq-ans').style.paddingTop = "0";
            });

            if (!isOpen) {
                currentFaqCard.classList.add('active');
                currentAnswerDrawer.style.maxHeight = currentAnswerDrawer.scrollHeight + "px";
                currentAnswerDrawer.style.paddingTop = "5px";
            } else {
                currentFaqCard.classList.remove('active');
                currentAnswerDrawer.style.maxHeight = null;
                currentAnswerDrawer.style.paddingTop = "0";
            }
        });
    });
}
document.addEventListener('DOMContentLoaded', () => {
    
    // Select all image and text slides
    const imageSlides = document.querySelectorAll('.hero-slide-image');
    const textSlides = document.querySelectorAll('.hero-slide-text');
    
    // Settings
    let currentSlide = 0;
    const slideDuration = 3000; // 6000 milliseconds = 6 seconds per slide

    // Ensure we actually have slides to animate
    if (imageSlides.length > 0 && textSlides.length > 0) {
        
        // The function that performs the slide change
        function switchSlide() {
            // 1. Remove 'active' class from current elements
            imageSlides[currentSlide].classList.remove('active');
            textSlides[currentSlide].classList.remove('active');

            // 2. Calculate the next slide index (loops back to 0 when reaching the end)
            currentSlide = (currentSlide + 1) % imageSlides.length;

            // 3. Add 'active' class to the new current elements
            imageSlides[currentSlide].classList.add('active');
            textSlides[currentSlide].classList.add('active');
        }

        // Run the switchSlide function automatically every X seconds
        setInterval(switchSlide, slideDuration);
    }
});