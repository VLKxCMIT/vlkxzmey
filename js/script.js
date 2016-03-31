window.onload=function() {
	var inputs = document.getElementsByName("toggle");
	var selectedValue = -1;
	var input_len = inputs.length;
	for (var i = 0; i < input_len; i++) {
	    if (inputs[i].checked)
	    {
	    	var valueI = i + 1;
	        selectedValue = 'slide-' + valueI;
	        var firstHeight = document.getElementById(selectedValue).offsetHeight;
			document.getElementById('slideViewer').style.height = firstHeight + 'px';
	        break;
	    }
	}
}

function sliderHeight(sl) {
	var offsetHeight = document.getElementById(sl).offsetHeight;
	document.getElementById('slideViewer').style.height = offsetHeight + 'px';
}