
$(document).ready(function(){
    'use strict';
    var slideshowInit = function() {
        var speedOfLightBox = speedReq;
        var boxEffect = effectOfAnimation;

        var numberImages =  $('.slideshow img').length,
            currentImage = numberImages - 1,
            zIndex = parseInt($('.slideshow').css('z-index')),
            currentZIndex = zIndex;
    console.log(currentImage+1);

        var rotateImages = function() {

            if(boxEffect=="animate"){
                $('.slideshow img')
                    .eq(currentImage)
                    .animate('slow', function() {
                        $(this)
                            .css('z-index', zIndex)
                            .fadeIn(0)
                            .siblings().each(function() {
                            $(this).css('z-index', ((parseInt($(this).css('z-index')) - zIndex + 1) % numberImages + zIndex));
                        });
                    });
            }if(boxEffect=="fadeOut"){
                $('.slideshow img')
                    .eq(currentImage)
                    .fadeOut('slow', function() {
                        $(this)
                            .css('z-index', zIndex)
                            .fadeIn(0)
                            .siblings().each(function() {
                            $(this).css('z-index', ((parseInt($(this).css('z-index')) - zIndex + 1) % numberImages + zIndex));
                        });
                    });
            }if(boxEffect=="slideUp"){
                $('.slideshow img')
                    .eq(currentImage)
                    .slideUp('slow', function() {
                        $(this)
                            .css('z-index', zIndex)
                            .fadeIn(0)
                            .siblings().each(function() {
                            $(this).css('z-index', ((parseInt($(this).css('z-index')) - zIndex + 1) % numberImages + zIndex));
                        });
                    });
            }
            currentImage = (numberImages + currentImage - 1) % numberImages;
            console.log('Rotating pictures in slideshow.' + currentImage);
        };

        $('.slideshow img')
            .each(function() {
                var crop = $(this).attr('crop');
                crop = crop ? 'crop=' + crop + '&' : null;
                $(this)
                    .attr('src', $(this).attr('src1') + '?' + crop + 'w=' + $(this).width() + '&h=' + $(this).height() + '&crop-to-fit')
                    .css('z-index', currentZIndex++);
            })
            .click(function() {rotateImages();});

        console.log("Slideshow was initiated.");

        setInterval(function() {rotateImages();}, speedOfLightBox);
    };
    slideshowInit();



    console.log('Everything is ready.');
});
