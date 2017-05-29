/**
 * Created by Austin on 5/26/2017.
 *
 * sections - intro - infopage - skills - contact
 */

$(document).ready(function(){
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




    $('.scroll').one('2', function(e) {
        // jump to section
        // window.location.hash = 'section';
        alert('jumping to #section');
    });

});