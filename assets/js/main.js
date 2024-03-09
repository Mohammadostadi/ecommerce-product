'use strict'
const minusButton = document.getElementById('minus');
const plusButton = document.getElementById('plus');
const inputField = document.getElementById('input');

minusButton.addEventListener('click', event => {
    if (inputField.value > 0 ){
        event.preventDefault();
        const currentValue = Number(inputField.value) || 0;
        inputField.value = currentValue - 1;
    }
});

plusButton.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputField.value) || 0;
    inputField.value = currentValue + 1;
});


/* function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
} */


var popUps = document.getElementById('pop-ups');
var slide = document.getElementById('z-index-1')

function showPopUp(){
        popUps.classList.add("show")
        slide.classList.add("z-index-1")
}

function closePopUp(){
    popUps.classList.remove("show")
    slide.classList.remove("z-index-1")
}

var ImageProduct1 = document.getElementById('image-product-1')
var ImageProduct2 = document.getElementById('image-product-2')
var ImageProduct3 = document.getElementById('image-product-3')
var ImageProduct4 = document.getElementById('image-product-4')
var ImageProductThumbnail1 = document.getElementById('image-product-1-thumbnail')
var ImageProductThumbnail2 = document.getElementById('image-product-2-thumbnail')
var ImageProductThumbnail3 = document.getElementById('image-product-3-thumbnail')
var ImageProductThumbnail4 = document.getElementById('image-product-4-thumbnail')

let slideIndex = 1;

function showImageProduct1(){
    slideIndex = 1;
    ImageProduct1.classList.add("active-image")
    ImageProduct2.classList.remove("active-image")
    ImageProduct3.classList.remove("active-image")
    ImageProduct4.classList.remove("active-image")
    ImageProduct1.classList.remove("non-active-image")
    ImageProduct2.classList.add("non-active-image")
    ImageProduct3.classList.add("non-active-image")
    ImageProduct4.classList.add("non-active-image")
    ImageProductThumbnail1.classList.add('active-item')
    ImageProductThumbnail2.classList.remove('active-item')
    ImageProductThumbnail3.classList.remove('active-item')
    ImageProductThumbnail4.classList.remove('active-item')
}

function showImageProduct2(){
        slideIndex = 2;
        ImageProduct2.classList.add("active-image")
        ImageProduct1.classList.remove("active-image")
        ImageProduct3.classList.remove("active-image")
        ImageProduct4.classList.remove("active-image")
        ImageProduct2.classList.remove("non-active-image")
        ImageProduct1.classList.add("non-active-image")
        ImageProduct3.classList.add("non-active-image")
        ImageProduct4.classList.add("non-active-image")
        ImageProductThumbnail2.classList.add('active-item')
        ImageProductThumbnail1.classList.remove('active-item')
        ImageProductThumbnail3.classList.remove('active-item')
        ImageProductThumbnail4.classList.remove('active-item')
}

function showImageProduct3(){
    slideIndex = 3;
    ImageProduct3.classList.add('active-image')
    ImageProduct2.classList.remove('active-image')
    ImageProduct1.classList.remove('active-image')
    ImageProduct4.classList.remove('active-image')
    ImageProduct3.classList.remove('non-active-image')
    ImageProduct2.classList.add('non-active-image')
    ImageProduct1.classList.add('non-active-image')
    ImageProduct4.classList.add('non-active-image')
    ImageProductThumbnail3.classList.add('active-item')
    ImageProductThumbnail2.classList.remove('active-item')
    ImageProductThumbnail1.classList.remove('active-item')
    ImageProductThumbnail4.classList.remove('active-item')
}

function showImageProduct4(){
    slideIndex = 4;
    ImageProduct4.classList.add("active-image")
    ImageProduct2.classList.remove("active-image")
    ImageProduct3.classList.remove("active-image")
    ImageProduct1.classList.remove("active-image")
    ImageProduct4.classList.remove("non-active-image")
    ImageProduct2.classList.add("non-active-image")
    ImageProduct3.classList.add("non-active-image")
    ImageProduct1.classList.add("non-active-image")
    ImageProductThumbnail4.classList.add('active-item')
    ImageProductThumbnail2.classList.remove('active-item')
    ImageProductThumbnail3.classList.remove('active-item')
    ImageProductThumbnail1.classList.remove('active-item')
}


function plusSlides(n) {
    showSlides(slideIndex += n);
}



function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    if (slideIndex == 1){
        showImageProduct1();
    }else if (slideIndex == 2){
        showImageProduct2();
    }else if (slideIndex == 3){
        showImageProduct3();
    }else if (slideIndex == 4){
        showImageProduct4();
    }
    
}


