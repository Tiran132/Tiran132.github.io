function func(){
	if ($(window).width() <= 550) {
		$('header').toggleClass('big');
		$('.wrapper').toggleClass('pbig');	
	}
}