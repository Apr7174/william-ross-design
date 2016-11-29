// var $img = $('.carousel-inner img'),
//     imageWidth = $img[0].width, //need the raw width due to a jquery bug that affects chrome
//     imageHeight = $img[0].height, //need the raw height due to a jquery bug that affects chrome
//     maxWidth = $(window).width(),
//     maxHeight = $(window).height(),
//     widthRatio = maxWidth / imageWidth,
//     heightRatio = maxHeight / imageHeight;

// var ratio = widthRatio; //default to the width ratio until proven wrong

// if (widthRatio * imageHeight > maxHeight) {
//     ratio = heightRatio;
// }

// //now resize the image relative to the ratio
// $img.attr('width', imageWidth * ratio)
//     .attr('height', imageHeight * ratio);

// //and center the image vertically and horizontally
// $img.css({
//     margin: 'auto',
//     position: 'absolute',
//     top: 0,
//     bottom: 0,
//     left: 0,
//     right: 0
// });
var imgDims = $('.img-full-screen'),
    imageWidth = imgDims[0].width, //need the raw width due to a jquery bug that affects chrome
    imageHeight = imgDims[0].height //need the raw height due to a jquery bug that affects chrome
;

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

var imageWidRatio = imageWidth / imageHeight;
var windowWidRatio = windowWidth / windowHeight;

var setImgDims = function(){
  if (imageWidRatio > windowWidRatio) {
    console.log("image is wider than window...portrait mode?")
    $('.img-full-screen').css("height", windowHeight);  
  } else {
    $('.img-full-screen').css("width", windowWidth);
    // $('.img-full-screen').css("height", windowHeight);

  }
}

var printDims = function() {
  console.log("Image Width: " + imageWidth + " Image height: " + imageHeight + " Image W/H Ratio " + (imageWidth/imageHeight));
  console.log("Window Width: " + windowWidth + " Window Height: " + windowHeight + " Window W/H Ratio " + (windowWidth/windowHeight));
}


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

var renderHouseLinks = function() {
  // Change the main image on the house pages from hovering on thumbnails s
  $('.thumbnails img').mouseenter(function() {
     var imgSrc = $(this).attr('src');
    $('.hero img').attr('src', imgSrc);
    stopPropogation();
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
  setImgDims();
  printDims();
  renderHouseLinks();
  toggleNav();
  closeDropdown();
  // pageScroll();

});    



  








