$(document).ready(function() {
  scrolltoPage();
});

function scrolltoPage() {

        var topNavY = $('.nav').height()+50;

        $('.nav a')
            .on('click', function() {
               

                var id = $(this).attr('id'),
                topPos = $('section#'+ id).offset().top - topNavY;

                console.log(id)

                $('html,body').animate({
                    scrollTop: topPos
                }, 800);

            });

    };
