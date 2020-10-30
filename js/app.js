$(document).ready(function (){

    //Text Typing Animation
    var typed = new Typed('.typing-text', {

        strings: [
            "John Doe.",
            "A Photographer.",
            "A Graphics Designer."
        ],
            typedSpeed: 150,
            backSpeed: 100,
            loop: true
    });

    //Slider
    $('.slider').slick({

        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots'

    });

});