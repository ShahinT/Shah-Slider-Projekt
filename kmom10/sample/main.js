
$(document).ready(function(){
    'use strict';
   /* var dir = "img/";
    var fileextension = ".jpg";
    $.ajax({
        //This will retrieve the contents of the folder if the folder is configured as 'browsable'
        url: dir,
        success: function (data) {
            //List all .png file names in the page
            $(data).find("a:contains(" + fileextension + ")").each(function () {
                var filename = this.href.replace(window.location.host, "").replace("http://", "");
                $("body").append("<img src='"+ filename + "'>");
            });
        }
    });*/
    var slideshowInit = function() {
        var speedOfLightBox = 3000;
        var boxEffect = "animate";
        var dynWidth = $('.slideshow img').css('width');
        var dynHeight = $('.slideshow img').css('height');
        var borderWidth = $('.slideshow img').css('border-width');
        var borderColor = $('.slideshow img').css('border-color');
        /*document.getElementById("animationResult").innerHTML = boxEffect;*/
        /******** box size buttons *******/
        $('#changeSizeBox').click(function () {
            dynWidth = $('#widthSize').val();
            dynHeight = $('#heightSize').val();
            //console.log(dynWidth+' '+dynHeight);
            $('.slideshow img').css({"width": dynWidth,"height": dynHeight});
            $('.slideshow').css({"width": dynWidth,"height": dynHeight});

            document.getElementById("widthResult").innerHTML = dynWidth;
            document.getElementById("heightResult").innerHTML = dynHeight;
        });

        /******** border buttons *******/
        $('#changeborderWith').click(function () {
            borderWidth = $('#sizeOfBorder').val();
            $('.slideshow img').css({"border-width": borderWidth});
            document.getElementById("borderResult").innerHTML = borderWidth;
        });
        $('#svartKant').click(function () {
            borderColor = $('#svartKant').val();
            $('.slideshow img').css({"border-color": borderColor});
            document.getElementById("borderColorResult").innerHTML = borderColor;
        });
        $('#vitKant').click(function () {
            borderColor = $('#vitKant').val();
            $('.slideshow img').css({"border-color": borderColor});
            document.getElementById("borderColorResult").innerHTML = borderColor;
        });

        /******** speed animation buttons *******/
        $('#changeSpeed').click(function () {
            speedOfLightBox = $('#speedOfLightBox').val()*1000;
            document.getElementById("speedResult").innerHTML = speedOfLightBox/1000;
        });

        /******** animation buttons *******/
        $('#noAnima').click(function () {
            boxEffect = "animate";
            document.getElementById("animationResult").innerHTML = "Saknar";
        });
        $('#slideUpAnim').click(function () {
            boxEffect = "slideUp";
            document.getElementById("animationResult").innerHTML = "Slide Up";
        });
        $('#fadeOutAnim').click(function () {
            boxEffect = "fadeOut";
            document.getElementById("animationResult").innerHTML = "Fade Out";
        });
        /**********************************/

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
        $('#startLB').click(function () {
            setInterval(function() {rotateImages();}, speedOfLightBox);
        });

        $('#skapa').click(function(){
            var newCss =
                    '.slideshow{width:'+dynWidth+'px;img{width:'+dynWidth+'px;}} \n' +
                    '.slideshow{height:'+dynHeight+'px;img{height:'+dynHeight+'px;}} \n' +
                    '.slideshow{img{border-width:'+borderWidth+'px;}} \n' +
                    '.slideshow{img{border-color:'+borderColor+';}}'
            ;
            var newJs =
                    'var speedReq = '+speedOfLightBox+'; \n'+
                    'var effectOfAnimation = "'+boxEffect+'";';
            ;

                /*dynWidth +'\n'+dynHeight+'\n'+borderWidth+'\n'+borderColor;*/
            $.ajax({
                type: 'post',
                url: 'download.php?action=changeCss',
                data: {css: newCss,js: newJs},
                dataType: 'html',
                success: function(data){
                    //updateCart(data);
                    console.log('Ajax request successfull');
                },
                error: function(jqXHR, textStatus, errorThrown){
                    console.log('Ajax request failed: ' + textStatus + ', ' + errorThrown);
                },
            });
            $('#downB').fadeIn();
        });



    };
    slideshowInit();



    console.log('Everything is ready.');
});
