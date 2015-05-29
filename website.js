var main = function () {
  "use strict"
    setInterval(nextpicture, 5000);
}
    function nextpicture() {

    if ($('.foto1').hasClass('select')) {
      $('.foto1').fadeOut(1000, function() {
      $('.foto1').removeClass('select');
      $('.foto2').fadeIn(1000, function () {
      $('.foto2').addClass('select');
      });
      });
    }

    else if ($('.foto2').hasClass('select')) {
       $('.foto2').fadeOut(1000, function() {
       $('.foto2').removeClass('select');
       $('.foto3').fadeIn(1000, function () {
       $('.foto3').addClass('select');
      });
      });
    }

    else {
       $('.foto3').fadeOut(1000, function() {
       $('.foto3').removeClass('select');
       $('.foto1').fadeIn(1000, function () {
       $('.foto1').addClass('select');
       });
       });
    }
  
   $('ul').on('click', 'a', function() {  
     $("li").removeClass('selected'); 
     $(this).closest('li').addClass('selected');
     $("p").addClass('hidden');       
     $("." + $(this).data('par')).removeClass('hidden');

       
  });
}

$("document").ready(main);
