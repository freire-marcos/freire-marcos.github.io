
// select in the menu, all tags a that have # on it's href
const menuItens = document.querySelectorAll('.menu a[href^="#"]');

menuItens.forEach(item => {

    item.addEventListener('click', scrollToOnClick);

});

function scrollToOnClick(event) {

    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop

    window.scroll({

        top: to,
        behavior: 'smooth',
    });
}