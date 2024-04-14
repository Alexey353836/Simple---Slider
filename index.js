"use strict"

//  Slider

const offerSlide = document.querySelectorAll('.offer__slide'),
      offerSliderPrev = document.querySelector('.offer__slider-prev'),
      offerSliderNext = document.querySelector('.offer__slider-next'),
      current = document.querySelector('#current'),
      total = document.querySelector('#total');
let slideIndex = 1;

showSlides(slideIndex);

function fTotal () {
    if (offerSlide.length < 10) {
        total.textContent = `0${offerSlide.length}`;
    }if (slideIndex < 10) {
        current.textContent = `0${slideIndex} /`;
       
    }if (offerSlide.length >= 10) {
        total.textContent = `${offerSlide.length}`;
    }if (slideIndex >= 10){
        current.textContent = `s{slideIndex} /`;
    }
}fTotal ();

function showSlides (n) {
    if (n > offerSlide.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = offerSlide.length;
    }

    if (slideIndex < 10) {
        current.textContent = `0${slideIndex} /`;
    }else {
        current.textContent = `${slideIndex} /`;
    }

    offerSlide.forEach(item => item.style.opacity = '0');
    offerSlide.forEach(item => item.style.visibility = 'hidden');
    offerSlide.forEach(item => item.style.scale = 0.6);

    offerSlide[slideIndex -1].style.opacity = '1';
    offerSlide[slideIndex -1].style.visibility = 'visible';
    offerSlide[slideIndex -1].style.scale = 1;   
}

function plusSlide (n) {
    showSlides(slideIndex += n);
}

offerSliderPrev.addEventListener('click', () =>{plusSlide(-1)});
offerSliderNext.addEventListener('click', () =>{plusSlide(+1)});


