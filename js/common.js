$(document).ready(function() {

	/* Adaptive menu */
   
    $('.menu__icon').on('click', function(){
        $('.menu').toggleClass('menu_state_open');
        $('.our-contacts').toggleClass('hidden-div');
    });

    /*******************  Табы переключатели   *******************/
	$(".tab__item").not(":first").hide();
	$(".tabs__wrapper .tab").click(function() {
		$(".tabs__wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab__item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");

	// if ($('.tab__item').css('display', 'block')){
	// 	$('table.table .table__row--first').css('width', '140px');
	// }
     
   	

	/* Pop-Up forms */

	$(".order-call").click(function() {
		$("#form_back h4").html($(this).text());
		$("#form_back input[name=formname]").val($(this).text());
	}).magnificPopup({
		type:"inline",
		mainClass: 'mfp-forms'
	});

});

	/* Flexslider */
   	
   	$(window).load(function(){
        $('.flexslider').flexslider({
            animation: "slide",
            touch: true,
            start: function(slider){
                $('body').removeClass('loading');
            }
        });
 
    });


