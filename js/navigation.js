

window.onscroll = function(e) {

    e.preventDefault;
    if(e.dir === 'up'){
        alert('scroll up');
    } else if(e.dir === 'down'){
        alert('scroll down');
    }
}


function scrollTo(event) {

    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop

    window.scroll({

        top: to,
        behavior: 'smooth',
    });
}