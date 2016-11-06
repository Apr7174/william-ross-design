$(document).ready(function() {


  //gets the html from nav-main into nav-mobile using .html() function from jQuery
  $("#nav-mobile").html($('#nav-main').html());
  $('#nav-trigger span').click(function(){
    if ($('nav#nav-mobile ul').hasClass("expanded")) {
        $('nav#nav-mobile ul.expanded').removeClass('expanded').slideUp(250);
        $(this).removeClass('open');
    } else {
        $('nav#nav-mobile ul').addClass('expanded').slideDown(250);
        $(this).addClass('open');
    }
  });

  // Change the main image on the house pages from hovering on thumbnails s
  $('.thumbnails img').mouseenter(function() {
     var imgSrc = $(this).attr('src');
    $('.hero img').attr('src', imgSrc);
    stopPropogation();
  });

    // page scroll 
    $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      $('html, body').animate({
          scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 'slow');
        event.preventDefault();
    });

    //page scroll try 2
    // $('a.page-scroll').click(function() {
    //   $('html, body').animate( {
    //     scrollTop: $(this).offset().top
    //   }, 500);
    // });





});    


  








