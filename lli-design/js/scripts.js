jQuery(document).ready(function () {
	/* Slider */
	$('#slider').slick({
		infinite: true,
		autoplay: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		arrows: false,
		dots: false
	});
	
	/* pasar las imagenes */
	$('#btn-prev').on('click', function () {
		$('#slider').slick('slickPrev');
	});

	$('#btn-next').on('click', function () {
		$('#slider').slick('slickNext');
	});

	/* mostrar/esconde los botones play-pause */
	$('#slider-controls').on('click', function () {
		$(this).children().find('i').toggleClass('disable-btn');
	});

	/* play/pause el slider*/
	$('#btn-pause').on('click', function () {
		$('#slider').slick('slickPause');
	});

	$('#btn-play').on('click', function () {
		$('#slider').slick('slickPlay');
	});

	/* visualizar el menu y aplicar estilos */
	$('.main-menu').on('click', function () {
		$('html').toggleClass('clicked')
	});

});
