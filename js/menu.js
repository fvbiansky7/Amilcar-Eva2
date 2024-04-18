let btnMenu=document.getElementById('btnmenu');
let menu=document.getElementById('menu');
btnMenu.addEventListener('click',function(){
    'user strict';
    menu.classList.toggle('mostrar');
 
});

// const myCarouselElement = document.querySelector('#myCarousel')    este es el constructor del carrusel pero de momento no lo necesito

// const carousel = new bootstrap.Carousel(myCarouselElement, {
//   interval: 2000,
//   touch: false
// })
