let toggleButton = document.querySelector('.toggle-button');
let navLinks = document.querySelector('.mid-nav');

toggleButton.addEventListener('click', function() {
    navLinks.classList.toggle('active')
})
