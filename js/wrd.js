var getImgHeight = function(){
	var imgDims = $('.img-full-screen'),
	    imageHeight = imgDims[0].height; //need the raw height due to a jquery bug that affects chrome
	return imageHeight;
}
var getImgWidth = function(){
	var imgDims = $('.img-full-screen'),
	    imageWidth = imgDims[0].width; //need the raw width due to a jquery bug that affects chrome
	return imageWidth;	    
}

var getWindowWidth = function(){
	var windowWidth = window.innerWidth;
	return windowWidth;
}

var getWindowHeight = function(){
	var windowHeight = window.innerHeight;
	return windowHeight;
}

var getImgWidthRatio = function() {
	var imageWidRatio = getImgWidth() / getImgHeight();
	return imageWidRatio;
}

var getWindowWidthRatio = function() {
	var windowWidRatio = getWindowWidth() / getWindowHeight();
	return windowWidRatio;
}

var setImgDims = function(){
	if (getImgWidthRatio() > getWindowWidthRatio()) {
		console.log("image is wider than window...portrait mode?")
		$('.img-full-screen').css("height", getWindowHeight());	
	} else {
		$('.img-full-screen').css("width", getWindowWidth());
	}
}

var setMainDims = function() {
	$('#slideshow').css("height", getWindowHeight());
	$('#slideshow').css("width", getWindowWidth());
}

var printDims = function() {
	console.log("Image Width: " + getImgWidth() + " Image height: " + getImgHeight() + " Image W/H Ratio " + getImgWidthRatio());
	console.log("Window Width: " + getWindowWidth() + " Window Height: " + getWindowHeight() + " Window W/H Ratio " + getWindowWidthRatio());
}
function previousSlide() {
    var $active = $('#slideshow IMG.active');
    var $next = $active.prev();    
    
    $next.addClass('active');
    
    $active.removeClass('active');
    renderCaption($active);
}

function slideSwitch() {
    var $active = $('#slideshow img.active');
    renderCaption($active);   
    // define a default image for the $active variable 
    // default needs to be last image since it appears on top with absolute positioning
    //need to start with top image to avoid flicker
    if ($active.length == 0) $active = $('#slideshow img:last');    
    
    // loop for end
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow IMG:first');

    $active.addClass('last-active');
        
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 200, function() {
            $active.removeClass('active last-active');
        });
}

function handleSlideSwitch() {
	$('#arrow2').on('click', function(event) {
		slideSwitch();
	});
}

function handlePreviousSlide() {
	$('#arrow1').on('click', function(event) {
		previousSlide();
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
 function handleThumbnails() {
  // Change the main image on the house pages from hovering on thumbnails s
  $('.thumbnails img').mouseenter(function() {
     var imgSrc = $(this).attr('src');
    $('.hero img').attr('src', imgSrc);
    stopPropogation();
  });
 }

 function getCaption(element){
 	var caption = element.attr("alt");
 	return caption;
 }

 function renderCaption(element){
 	$('#bottom-nav').html(getCaption(element));
 }

// resizes images on rezise screen
$(window).resize(function(){
	setImgDims();
	setMainDims();
		window.location.reload();

	console.log("Resized Image");
});

// resizes image on orientation change
$(window).on("orientationchange", function() {
	setImgDims();
	setMainDims();
	window.location.reload();
	console.log("Orientation Change")
});

$(function() {
	setImgDims();
	setMainDims();
	toggleNav();
	closeDropdown();
    setInterval( "slideSwitch()", 5000);	
	handlePreviousSlide();
	handleSlideSwitch();
	handleThumbnails();	
	// getCaption();
	renderCaption($('#slideshow img.active'));
});