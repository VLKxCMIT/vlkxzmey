var firstHeight = document.getElementById('slide-1').offsetHeight;
document.getElementById('slideViewer').style.height = firstHeight + 'px';

function sliderHeight(sl) {
	var offsetHeight = document.getElementById(sl).offsetHeight;
	document.getElementById('slideViewer').style.height = offsetHeight + 'px';
}