const elToggleItem = document.querySelector('.js-toggle-item');
const elToggleShow = document.querySelector('.js-toggle-show');
const elToggleImgMonth = document.querySelector('.js-toggle-img-month');
const elToggleImgSun = document.querySelector('.js-toggle-img-sun');

elToggleItem.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    
    if (elToggleShow.style.left == '') {
        elToggleShow.style.left = '24px';
        elToggleShow.style.zIndex = '100';
        elToggleImgMonth.classList.remove('toggle--none');
        elToggleShow.classList.add('toggle__show--box-shadow');
    } else {
        elToggleShow.style.left = '';
    }
});

const elsInfoLink = document.querySelectorAll('.info__link');
const elsInfoLinkImg = document.querySelectorAll('.info__link-img');

elsInfoLink.forEach(function(item, index) {
    elsInfoLinkImg[index].textContent = elsInfoLink[index].textContent;
    elsInfoLinkImg[index].href = `./img/PerfectPixel/${elsInfoLink[index].textContent}.jpg`;
    // elsInfoLink[index].href = `https://teletype.in/@nuriddinovakramjon/${elsInfoLink[index].textContent}`;
});


// MODAL
const elModalBtn = document.querySelector('.js-modal-btn');
const elModal = document.querySelector('.js-modal');

elModalBtn.addEventListener('click', function () {
    elModal.classList.remove('modal--open');
});

setTimeout(function() {
    elModal.classList.add('modal--open');
}, 2000);

setTimeout(function() {
    elModal.classList.remove('modal--open');
}, 6000);