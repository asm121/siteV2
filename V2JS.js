/**
 * Created by Austin on 5/26/2017.
 *
 * sections - intro - infopage - skills - contact
 */

$(document).ready(function(){


    if (screen.width <= 1000) {

        window.location.href = "https://austin-martinagile.github.io/";

    }

    /*
    //Highlight navigation circles of page currently in view
    function isScrolledIntoView(elem) {
        var $window = $(window),
            docViewTop = $window.scrollTop(),
            docViewBottom = docViewTop + $window.height(),
            elemTop = $(elem).offset().top,
            elemBottom = elemTop + $(elem).outerHeight();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    $(window).on("scroll", function() {


        $('.dots').each(function() {
            if (isScrolledIntoView(this)) {
                $(this).css("top","30px");
            } else {
                $(this).css("top","-30px");
            }
        });

    });
*/



    if (this.hash !== "") {
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        $('html, body').animate({
            scrollTop: $("#1").offset().top
        },1000, function(){
            window.location.hash = hash;


        });
    }



    // Add smooth scrolling to all links
    $("#dot1").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            var hash = this.hash;


            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $("#1").offset().top
            },1000, function(){
                window.location.hash = hash;


            });
        }

    });

    $("#dot2").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $("#2").offset().top

            },1000, function(){
                window.location.hash = hash;


            });
        }


    });

    $("#dot3").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $("#3").offset().top
            },1000, function(){


                window.location.hash = hash;

            });
        }

    });

    $("#dot4").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $('html, body').animate({
                scrollTop: $("#4").offset().top
            },1000, function(){


                window.location.hash = hash;

            });
        }

    });

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';
    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    if(isFirefox) {
        (function () {$(this).css('background-color','BLACK');
            var delay = false;

            $(document).on('mousewheel DOMMouseScroll', function (event) {
                event.preventDefault();
                if (delay) return;

                delay = true;
                setTimeout(function () {
                    delay = false
                }, 200)

                var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

                var a = document.getElementsByTagName('a');
                if (wd < 0) {
                    for (var i = 0; i < a.length; i++) {
                        var t = a[i].getClientRects()[0].top;
                        if (t >= 40) break;
                    }
                }
                else {
                    for (var i = a.length - 1; i >= 0; i--) {
                        var t = a[i].getClientRects()[0].top;
                        if (t < -20) break;
                    }
                }
                if (i >= 0 && i < a.length){
                    $('html,body').animate({
                        scrollTop: a[i].offsetTop + 14
                    });
                }
            });
        })();
    }

    if (isChrome){
        (function () {
            var delay = false;

            $(document).on('mousewheel DOMMouseScroll', function (event) {
                event.preventDefault();
                if (delay) return;

                delay = true;
                setTimeout(function () {
                    delay = false
                }, 200)

                var wd = event.originalEvent.wheelDelta || -event.originalEvent.detail;

                var a = document.getElementsByTagName('a');
                if (wd < 0) {
                    for (var i = 0; i < a.length; i++) {
                        var t = a[i].getClientRects()[0].top;
                        if (t >= 40) break;
                    }
                }
                else {
                    for (var i = a.length - 1; i >= 0; i--) {
                        var t = a[i].getClientRects()[0].top;
                        if (t < -20) break;
                    }
                }
                if (i >= 0 && i < a.length) {
                    $('html,body').animate({
                        scrollTop: a[i].offsetTop
                    });
                }
            });
        })();


    }

    if ((isChrome||isFirefox)==false){
        document.getElementById('html').style.overflowY = "scroll";
        document.getElementById('#contact').style.height = "";
        document.getElementById('#skills').style.height = "";
        document.getElementById('#infopage').style.height = "";
        document.getElementById('#intro').style.height = "";
    }

    //waves https://codepen.io/loktar00/pen/kfrKC was referenced
    var ocean = document.getElementById("ocean"),
        waveWidth = 5,
        waveCount = Math.floor(window.innerWidth/waveWidth),
        docFrag = document.createDocumentFragment();

    for(var i = 0; i < waveCount; i++){
        var wave = document.createElement("div");
        wave.className += " wave";
        docFrag.appendChild(wave);
        wave.style.left = i * waveWidth + "px";
        wave.style.webkitAnimationDelay = (i/100) + "s";
    }

    ocean.appendChild(docFrag);


    /* disable space and arrow keys to scroll */
    window.addEventListener("keydown", function(e) {
        // space and arrow keys
        if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);


});