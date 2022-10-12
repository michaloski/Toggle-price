const tog = document.querySelector('.tog');
const circle = document.querySelector('.circle');

tog.addEventListener('click', function(){
    circle.classList.toggle('circle-margin');
})