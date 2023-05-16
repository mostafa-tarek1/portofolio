AOS.init();


$(window).scroll(function(){
	let height = $(window).scrollTop();
	if (height >= 600) {
		$('.arrow').fadeIn(1000)
	}else {
		$('.arrow').fadeOut(1000)
	}
})

$('.arrow').click(function(){
	$('html , body').animate({
		scrollTop : 0
	} , 100);
})
