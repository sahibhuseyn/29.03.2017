$(document).ready(function(){
	var click_counter=0;
	$('#menu_icon').on('click',function(){
		click_counter++;
		if (click_counter % 2 != 0)
		{
			$('.menu_side').css('left','0');
			$('#menu_icon').css({
				'left':'240px',
				'transform':'rotate(-90deg)'
			});
		$('#menu_icon').removeClass('bar').addClass('close_x');
		}
		else
		{
			$('.menu_side').css('left','-50%');
			$('#menu_icon').css({
				'left':'',
				'transform':''
			});
			$('#menu_icon').removeClass('close_x').addClass('bar');

		}
	});
});
$(document).ready(function(){
	$('.menu_side .search_form input[type=text]').focus(function(){
		$('.menu_side .search_form label[for=search]').css({
			'transform':'scale(.8) translateY(0)',
			'left':'-1px',
			'top':'27px'
		})
	});
	$('.menu_side .search_form input[type=text]').blur(function(){
		$('.menu_side .search_form label[for=search]').css({
			'transform':'',
			'left':'',
			'top':''
		})	
	})
})