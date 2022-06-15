const elDarkModeBtn = document.querySelector('.js-dark-mode-btn');

elDarkModeBtn.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});