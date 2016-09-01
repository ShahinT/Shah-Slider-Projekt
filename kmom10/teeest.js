'use strict';

$ (function() {

    //settings for slider
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var firstSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++firstSlide === $slides.length) {
                    firstSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }

    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider)
        .on('click', function() {
            if (++firstSlide === $slides.length) {
                firstSlide = 1;
                $slideContainer.animate({'margin-left': 0}, animationSpeed);
            }
            else if (firstSlide != $slides.length) {
                $slideContainer.animate({'margin-left': '-='+width}, animationSpeed/2);
            }
        })
    startSlider();
});
