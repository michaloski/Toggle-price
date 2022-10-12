const tog = document.querySelector('.tog');
const circle = document.querySelector('.circle');
// price
const basic = document.querySelector('.basic');
const professional = document.querySelector('.professional');
const expert = document.querySelector('.expert');

const price = function(type, price){
    type.textContent = `$ ${price}`;
}

tog.addEventListener('click', function(){
    circle.classList.toggle('circle-margin');
    if(circle.classList.contains('circle-margin')){
        price(basic, 39.99)
        price(professional, 49.99)
        price(expert, 59.99)
    }
    else{
        price(basic, 19.99)
        price(professional, 25.99)
        price(expert, 39.99)
    }
})