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
	}
}


var printDims = function() {
	console.log("Image Width: " + imageWidth + " Image height: " + imageHeight + " Image W/H Ratio " + (imageWidth/imageHeight));
	console.log("Window Width: " + windowWidth + " Window Height: " + windowHeight + " Window W/H Ratio " + (windowWidth/windowHeight));
}


//center the image vertically and horizontally
imgDims.css({
    margin: 'auto',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
});


$(function() {
	setImgDims();
});