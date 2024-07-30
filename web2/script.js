const menu = document.querySelector('.menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        hamburger.classList.remove('active');
        menu.addEventListener('transitionend', handleTransitionEnd);
    } else {
        menu.classList.add('active');
        hamburger.classList.add('active');
        menu.style.visibility = 'visible';
    }
});

function handleTransitionEnd() {
    if (!menu.classList.contains('active')) {
        menu.style.visibility = 'hidden';
    }
    menu.removeEventListener('transitionend', handleTransitionEnd);
}