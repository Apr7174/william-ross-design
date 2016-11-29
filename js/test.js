var getImgHeight = function(){
	var imgDims = $('.img-full-screen'),
	    // imageWidth = imgDims[0].width, //need the raw width due to a jquery bug that affects chrome
	    imageHeight = imgDims[0].height; //need the raw height due to a jquery bug that affects chrome
	return imageHeight;
}
var getImgWidth = function(){
	var imgDims = $('.img-full-screen'),
	    imageWidth = imgDims[0].width; //need the raw width due to a jquery bug that affects chrome
	return imageWidth;	    
}

console.log("Get Image Width: " + getImgWidth() + " Get Image Height "+ getImgHeight());

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


var renderProjectTitle = function() {
	if ($('.item').hasClass("active")){
		$('.carousel-inner div').css("color", "red");
	}
	console.log("render title");
}

var getProjectTitle = function() {
	setInterval(moveRight, 1000);
	setInterval(renderProjectTitle, 1000);
}

function moveRight(){
	$('.carousel-inner .active').fadeTo('slow', 0.5);
		var imgAlt = $(this).find('img');
		$('#bottom-nav').html(imgAlt);
		console.log("imgAlt " + imgAlt);

}

// resizes images on rezise screen
$(window).resize(function(){
	setImgDims();
	setMainDims();
	console.log("Resized Image");
});

// resizes image on orientation change
$(window).on("orientationchange", function() {
	setImgDims();
	printDims();
	setMainDims();
	console.log("Orientation Change")
});

$(function() {
	setImgDims();
	// printDims();
	setMainDims();
	toggleNav();
	closeDropdown();
	getProjectTitle();

});