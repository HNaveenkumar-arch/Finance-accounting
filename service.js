document.addEventListener("DOMContentLoaded", () => {

    // 1. Initialize AOS (Scroll Animation)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 50,
            easing: 'ease-in-out',
            duration: 800,
        });
    }

    // 2. HERO TEXT REVEAL ANIMATION
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

    // 3. MOBILE HAMBURGER MENU TOGGLE
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

    // 4. FOOTER NEWSLETTER FORM
    
});


// ================= 🌟 5. FAQ ACCORDION LOGIC 🌟 =================
// Onnu open panna mathathu automatic-ah close aaga
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
        // Current item open aagumbothu...
        if (item.open) {
            // Matha ellathayum check panni close pannidu
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.removeAttribute('open');
                }
            });
        }
    });
});