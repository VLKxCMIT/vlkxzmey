
function slideHeight() {
	var getSlide = document.getElementsByClassName('slide-content');
	var sH = getSlide.clientWidth || getSlide.offsetWidth;
	alert(sH);
}