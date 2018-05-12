// Scroll resize navbar
$(document).on("scroll", function() {

	if($(document).scrollTop()>100) {
		$("nav").removeClass("large").addClass("small");
	} else {
		$("nav").removeClass("small").addClass("large");
	}


	if($(document).scrollTop()>100) {
		$("div.dropdown").removeClass("dp-largeNav").addClass("dp-smallNav");
	} else {
		$("div.dropdown").removeClass("dp-smallNav").addClass("dp-largeNav");
	}




});

// ScrollTop para os links da barra de navegação
jQuery('a').click(function(){
    jQuery('html, body').animate({
        scrollTop: jQuery( jQuery(this).attr('href') ).offset().top -110
    }, 500);
    return false;
}); 

// Mostrar menu dropdown sem deslizar
// function dropdown() {
//     document.querySelector(".dropdown").classList.toggle("show-dropdown");
// }

// Mostrar menu dropdown deslizando
$(".menu").click(function(){
	$(".dropdown").slideToggle();
});

$("a.dropdown-link").click(function(){
    $(".dropdown").hide();
});

