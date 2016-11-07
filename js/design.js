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

  //closes the mobile dropdown when one link is clicked
  $('#nav-mobile a').click(function(){
    $('nav#nav-mobile ul.expanded').removeClass('expanded').slideUp(250);
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
        }, "slow");
        event.preventDefault();
    });

    //page scroll try 2
    // $('a.page-scroll').click(function() {
    //   $('html, body').animate( {
    //     scrollTop: $(this).offset().top
    //   }, 500);
    // });


down vote
accepted
The only reliable solution is to use a formula to determine maximum scale ratio:

var $img = $('.carousel-inner img'),
    imageWidth = $img[0].width, //need the raw width due to a jquery bug that affects chrome
    imageHeight = $img[0].height, //need the raw height due to a jquery bug that affects chrome
    maxWidth = $(window).width(),
    maxHeight = $(window).height(),
    widthRatio = maxWidth / imageWidth,
    heightRatio = maxHeight / imageHeight;

var ratio = widthRatio; //default to the width ratio until proven wrong

if (widthRatio * imageHeight > maxHeight) {
    ratio = heightRatio;
}

//now resize the image relative to the ratio
$img.attr('width', imageWidth * ratio)
    .attr('height', imageHeight * ratio);

//and center the image vertically and horizontally
$img.css({
    margin: 'auto',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
});




if(window.innerHeight > window.innerWidth){
    alert("Please use Landscape!");
}

});    



  








