let times = document.querySelectorAll('.time');

times.forEach(function (time) {
    let btn = time.querySelector('.time-btn');

    btn.addEventListener('click', function() {
        time.classList.toggle('show-text');
    })
})