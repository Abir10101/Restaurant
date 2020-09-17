let navbar = document.querySelector('.main-header');
let bgimg = document.querySelector('.bg-img')

window.addEventListener('scroll', function() {
    // console.log(window.pageYOffset)
    let navheight = navbar.getBoundingClientRect().height; 
    let imght = bgimg.getBoundingClientRect().height;
    let scrollheight = window.pageYOffset;
    if (scrollheight > (navheight - 20) && scrollheight <= (imght - 50)) {
        navbar.style.visibility = 'hidden';
    }
    else if (scrollheight > (imght - 50)) {
        navbar.style.visibility = 'visible';
        navbar.classList.add('inverted');
    }
    else {
        navbar.classList.remove('inverted');
        navbar.style.visibility = 'visible';
    }
})
