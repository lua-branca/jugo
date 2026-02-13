document.addEventListener('DOMContentLoaded', function () {
    const menuTrigger = document.querySelector('.header__menu-trigger');
    const nav = document.querySelector('.header__nav');

    if (menuTrigger && nav) {
        menuTrigger.addEventListener('click', function () {
            this.classList.toggle('active');
            nav.classList.toggle('active');
        });
    }
});
