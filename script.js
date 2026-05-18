document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize AOS Animation Library
    AOS.init({
        once: true,
        mirror: false
    });

    // 2. Mobile Menu Toggle Logic
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

    // 3. Infinite Continuous Scroll Logic for Services
    // 3. Non-Stop Infinite Continuous Scroll Motor (Mouse hover pause removed)
    const track = document.getElementById('services-track');

    if (track) {
        // Step A: Clone all cards for perfect infinity wrap loops
        const cards = Array.from(track.children);
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            track.appendChild(clone);
        });

        // Step B: Initialize position parameters
        let scrollAmount = 0;
        const speed = 1.3; // Speed control knob! (Innum fast-ah poganumna intha value-ah increase pannikonga)

        // Step C: Start smooth execution runtime engine loop
        function autoScrollEngine() {
            scrollAmount -= speed;

            // If track crosses the cloned elements boundary center reset point
            if (Math.abs(scrollAmount) >= track.scrollWidth / 2) {
                scrollAmount = 0; // Seamless position reset teleportation
            }

            track.style.transform = `translateX(${scrollAmount}px)`;
            requestAnimationFrame(autoScrollEngine); // Smooth hardware accelerated loops
        }

        // Run the custom scroll driver mechanics engine 
        autoScrollEngine();
    }

    // 4. About Section Tab Logic
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

    // 5. Text Marquee Loop Backup
    const financeMarquee = document.getElementById('finance-marquee');
    if (financeMarquee) {
        const textSpans = Array.from(financeMarquee.children);
        textSpans.forEach(span => {
            const clone = span.cloneNode(true);
            financeMarquee.appendChild(clone);
        });
    }
});

// ================= 6. FAQ ACCORDION SLIDE TOGGLE LOGIC =================
const faqHeaders = document.querySelectorAll('.faq-header');

if (faqHeaders.length > 0) {
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const currentFaqCard = header.parentElement;
            const currentAnswerDrawer = currentFaqCard.querySelector('.faq-ans');
            const isOpen = currentFaqCard.classList.contains('active');

            // Step A: Close all other open FAQ cards first (Optional clean slider action)
            document.querySelectorAll('.faq-content').forEach(card => {
                card.classList.remove('active');
                card.querySelector('.faq-ans').style.maxHeight = null;
                card.querySelector('.faq-ans').style.paddingTop = "0";
            });

            // Step B: Toggle state controls for the clicked block card elements
            if (!isOpen) {
                currentFaqCard.classList.add('active');
                // Dynamic calculation of inner scroll heights avoids static pixels hardcoding bugs
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