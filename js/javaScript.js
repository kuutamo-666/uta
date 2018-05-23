// window.onload = function() {

// 	document.querySelector('.nav__icon').onmouseover = menuShow;

// 	document.querySelector('.nav__icon').onmouseout = menuHide;


// 	function menuShow() {
// 		document.querySelector('.main__nav').style.right = "-65%";
// 		document.querySelector('.main__nav').style.position = "fixed"; 
// 	}

// 	function menuHide() {
// 		document.querySelector('.main__nav').style.right='-100%';
// 	}
// }


function openNavigation () {
	document.getElementById('burger__nav').style.width = '100vw';
}

function closeNavigation () {
	document.getElementById('burger__nav').style.width = '0vw';
}


function up() {
	var top = Math.max( document.body.scrollTop, document.documentElement.scrollTop);

	if( top > 0) {
		window.scrollBy( 0, ((top + 100)/-10) );
		time = setTimeout( 'up()', 20 );
	} else {
		clearTimeout(time);
	}
	return false;
}
