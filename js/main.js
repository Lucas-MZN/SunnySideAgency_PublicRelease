const toggleMenu = document.querySelector('.toggle--menu');
const menu = document.querySelector('.menu');
const headerHeight = document.querySelector('header').offsetHeight;

toggleMenu.addEventListener('click', function () {
    const open = JSON.parse(toggleMenu.getAttribute('aria-expanded'));
    toggleMenu.setAttribute('aria-expanded', !open);
    menu.hidden = !menu.hidden;
    document.body.classList.toggle('no-scroll');
});

if (window.matchMedia("(max-width:480px)").matches) {
    function convertPixelToRem(px) {

        return px / parseFloat(getComputedStyle(document.documentElement).fontSize)

    }
    menu.style.top = (convertPixelToRem(headerHeight) + 4 + "rem");
}
