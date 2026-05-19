document.addEventListener("DOMContentLoaded", () => {

    if (typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 50,
            easing: 'ease-in-out',
            duration: 800,
        });
    }

    const elements = document.querySelectorAll('.word-text');
    const pathTrace = document.querySelector('.breadcrumb');

    if (elements.length > 0) {
        elements.forEach((word, index) => {
            setTimeout(() => {
                word.style.transition = "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease";
                word.style.transform = "translate(0px, 0%)";
                word.style.opacity = "1";
            }, index * 120);
        });

        const activeDelayLimit = (elements.length * 120) + 300;
        setTimeout(() => {
            if (pathTrace) {
                pathTrace.style.transition = "transform 0.8s ease, opacity 0.8s ease";
                pathTrace.style.transform = "translate(0px, 0px)";
                pathTrace.style.opacity = "1";
            }
        }, activeDelayLimit);
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


const contactForm = document.getElementById('secureContactForm');
const alertSystemBox = document.getElementById('formSuccessAlert');

if (contactForm && alertSystemBox) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let isFormValid = true;
        const requiredGroups = contactForm.querySelectorAll('.form-group');

        requiredGroups.forEach(group => {
            const inputElement = group.querySelector('input, textarea');
            if (!inputElement) return;

            if (inputElement.value.trim() === "") {
                group.classList.add('invalid-input');
                isFormValid = false;
            } else if (inputElement.type === 'email') {
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(inputElement.value.trim())) {
                    group.classList.add('invalid-input');
                    isFormValid = false;
                } else {
                    group.classList.remove('invalid-input');
                }
            } else {
                group.classList.remove('invalid-input');
            }

            inputElement.addEventListener('input', () => {
                if (inputElement.value.trim() !== "") {
                    group.classList.remove('invalid-input');
                }
            });
        });

        if (isFormValid) {
            window.location.href = '404page.html'

            setTimeout(() => {
                alertSystemBox.style.display = 'none';
            }, 5000);
        }
    });
}

const faqNodes = document.querySelectorAll('.contact-faq-item');

faqNodes.forEach(item => {
    item.addEventListener('toggle', () => {
        if (item.open) {
            faqNodes.forEach(otherItem => {
                if (otherItem !== item && otherItem.open) {
                    otherItem.removeAttribute('open');
                }
            });
        }
    });
});