document.addEventListener("DOMContentLoaded", () => {
    
    // ================= 🌟 1. AOS INTERACTIVITY INIT 🌟 =================
    if(typeof AOS !== 'undefined') {
        AOS.init({
            once: true,
            offset: 50,
            easing: 'ease-in-out',
            duration: 800,
        });
    }

    // ================= 🌟 2. HERO PARALLAX REVEAL SEQUENCE 🌟 =================
    const elements = document.querySelectorAll('.word-text');
    const pathTrace = document.querySelector('.breadcrumb');

    if(elements.length > 0) {
        elements.forEach((word, index) => {
            setTimeout(() => {
                word.style.transition = "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.6s ease";
                word.style.transform = "translate(0px, 0%)";
                word.style.opacity = "1";
            }, index * 120); 
        });

        const activeDelayLimit = (elements.length * 120) + 300; 
        setTimeout(() => {
            if(pathTrace) {
                pathTrace.style.transition = "transform 0.8s ease, opacity 0.8s ease";
                pathTrace.style.transform = "translate(0px, 0px)";
                pathTrace.style.opacity = "1";
            }
        }, activeDelayLimit);
    }

    // ================= 🌟 3. MOBILE INTERACTION TRIGGER (HAMBURGER) 🌟 =================
    const menuToggleNode = document.getElementById('mobile-menu');
    const navLinksNode = document.getElementById('nav-links');

    if (menuToggleNode && navLinksNode) {
        menuToggleNode.addEventListener('click', () => {
            navLinksNode.classList.toggle('active');
            
            const vectorIcon = menuToggleNode.querySelector('i');
            if (navLinksNode.classList.contains('active')) {
                vectorIcon.classList.remove('fa-bars');
                vectorIcon.classList.add('fa-times');
            } else {
                vectorIcon.classList.remove('fa-times');
                vectorIcon.classList.add('fa-bars');
            }
        });
    }

    // ================= 🌟 4. FOOTER NEWSLETTER VALIDATION PROCESS 🌟 =================
    

});


// ================= 🌟 5. SECURE INPUT FORM STRICT VALIDATION PIPELINE 🌟 =================
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

                // Validate individual check blocks inputs data states matrix loop structures
                if (inputElement.value.trim() === "") {
                    group.classList.add('invalid-input');
                    isFormValid = false;
                } else if (inputElement.type === 'email') {
                    // Quick safe regex structure matching standard parameters email formats verification strings
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

                // Add real-time user typing layout listener to clear warnings actively
                inputElement.addEventListener('input', () => {
                    if (inputElement.value.trim() !== "") {
                        group.classList.remove('invalid-input');
                    }
                });
            });

            // If everything is completely empty or wrong execution track blocks logic paths bounds
            if (isFormValid) {
                 window.location.href='404page.html'

                setTimeout(() => {
                    alertSystemBox.style.display = 'none';
                }, 5000);
            }
        });
    }

    // ================= 🌟 6. CONTACT FAQ ACCORDION LOGIC 🌟 =================
    const faqNodes = document.querySelectorAll('.contact-faq-item');

    faqNodes.forEach(item => {
        item.addEventListener('toggle', () => {
            if (item.open) {
                // Close all other open FAQ items
                faqNodes.forEach(otherItem => {
                    if (otherItem !== item && otherItem.open) {
                        otherItem.removeAttribute('open');
                    }
                });
            }
        });
    });