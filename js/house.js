

var pageScroll = function() {
    // page scroll 
    $('a.page-scroll').click(function(event) {
      var $anchor = $(this);
      $('html, body').animate({
          scrollTop: ($($anchor.attr('href')).offset().top)
        }, "slow");
        event.preventDefault();
    });
}

var toggleNav = function() {
  //gets the html from nav-main into nav-mobile using .html() function from jQuery
  $("#nav-mobile").html($('#nav-main').html());
  $('#nav-trigger').click(function(){
    if ($('nav#nav-mobile ul').hasClass("expanded")) {
        $('nav#nav-mobile ul.expanded').removeClass('expanded').slideUp(250);
        $(this).removeClass('open');
    } else {
        $('nav#nav-mobile ul').addClass('expanded').slideDown(250);
        $(this).addClass('open');
    }
  });
}

var closeDropdown = function() {
  //closes the mobile dropdown when one link is clicked
  $('#nav-mobile a').click(function(){
    $('nav#nav-mobile ul.expanded').removeClass('expanded').slideUp(250);
  });
}

var handleThumbnails = function() {
  // Change the main image on the house pages from hovering on thumbnails s
  $('.thumbnails img').mouseenter(function() {
     var imgSrc = $(this).attr('src');
    $('.hero img').attr('src', imgSrc);
    // stopPropogation();
  });
}

//center the image vertically and horizontally
// imgDims.css({
//     margin: 'auto',
//     // position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0
// });

$(document).ready(function() {
  toggleNav();
  closeDropdown();
  handleThumbnails();
  // pageScroll();

});    



  








