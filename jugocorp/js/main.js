document.addEventListener('DOMContentLoaded', function () {
    const menuTrigger = document.querySelector('.header__menu-trigger');
    const nav = document.querySelector('.header__nav');

    if (menuTrigger && nav) {
        menuTrigger.addEventListener('click', function () {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }

    // Scroll Animations (Fade-up)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.section__title, .section__lead, .mission__text, .cycle-card, .product-card, .achievement__item, .news-list li, .btn');
    animatedElements.forEach((el, index) => {
        el.classList.add('js-fade-up');
        // Add a slight stagger delay to grid items like cycle-cards, product-cards, and list items
        if (el.classList.contains('cycle-card') || el.classList.contains('product-card')) {
            el.style.transitionDelay = `${(index % 4) * 0.1}s`;
        } else if (el.classList.contains('achievement__item') || el.tagName.toLowerCase() === 'li') {
            el.style.transitionDelay = `${(index % 10) * 0.1}s`;
        }
        scrollObserver.observe(el);
    });
});
