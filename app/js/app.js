const body = document.querySelector('body');
const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const heroImg = document.querySelector('.hero__image');

btnHamburger.addEventListener('click',()=>{
    if(header.classList.contains('open')){
        header.classList.remove('open');
        fadeElems.forEach(elem=>{
            body.classList.remove('noscroll');
            elem.classList.add('fade-out');
            elem.classList.remove('fade-in');
            heroImg.classList.remove('noOpacity'); 
        })
    }else{
        header.classList.add('open')
        fadeElems.forEach(elem =>{
            body.classList.add('noscroll');
            elem.classList.add('fade-in');
            elem.classList.remove('fade-out');
            heroImg.classList.add('noOpacity');
        })
    }
})