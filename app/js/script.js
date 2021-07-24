const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElms = document.querySelectorAll('.has_fade')
btnHamburger.addEventListener('click',function(){
    console.log('open hamburger');

    if(header.classList.contains('open')){ // close hamburger menu
        body.classList.remove('noscroll');
        header.classList.remove('open');
    fadeElms.forEach(function(element){
        element.classList.remove('fade-in');
        element.classList.add('fade-out');
    });
   
    }
    else{ // open hamburger menu
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElms.forEach(function(element){
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        }
        
        );

        
    }
});
