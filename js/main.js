


/**/
$(function(){
if ($(window).width() < 959 & $(window).width() > 767){
	$(".info button").text("Click to show more");
}
if ($(window).width() > 959){
	$('.item').hover(function() {
		$(this).find('.info button').css('display', 'block')
	}, function() {
		/* Stuff to do when the mouse leaves the element */
		$(this).find('.info button').css('display', 'none')
	});
	
	$('.show_sl').click(function(event) {
		event.preventDefault()
		$('.show_sl').css({
			'transform' : 'rotate(45deg)',
			'transition' : 'all 0.5s',
			'border' : 'none',
			'display' : 'block'
		})
		$(".social_links").slideDown('400', function() {
			$('.show_sl').addClass('slided')
		});
	});
	$('.show_sl').click(function(event) {
		if($(this).hasClass('slided')){
			$('.show_sl').css({
				'transform' : 'rotate(0deg)',
				'transition' : 'all 0.5s',
				'border' : 'none',
				'display' : 'block'
			})
			$(".social_links").slideUp('400', function() {
				$('.show_sl').removeClass('slided')
			});
		}
	});
}
	$('.item button').on('click', function(event) {
		event.preventDefault();
		var nameText = $(this).parents('.item').find('.name').text()
		var imgSrc =  $(this).parents('.item').find('img').attr('src')
		var prices =  $(this).parents('.item').find('.price').children().clone()
	

		/* Act on the event */
		$(".background").css('display', 'block')
		$(".details").fadeIn(300);
		$('.details').find('h1').text(nameText);
		$('.details').find('.pic').css({
			'background':'url('+imgSrc+')',
			'background-position' : '90%',
			'background-size' : '100%',
			'background-repeat' : 'no-repeat'
		})
		$('.details').find('.price').children().remove()
		prices.appendTo($('.details').find('.price'))


	});
	$(".close").on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
			if(($(".close").css('display'))=="block"){
				$(".details").fadeOut('400');
				$(".background").css('display', 'none')
			}
	});

	$('.size li').click(function(event) {
		$('.size li').removeClass('size_clicked');
		$(this).addClass('size_clicked')
	});

	//rating
	$(".rating li").hover(function(event) {
		$(".rating li").removeClass('positive')
		$(this).prevUntil('ul').addClass('positive')
		$(this).addClass('positive')
	},function() {
		/* Stuff to do when the mouse leaves the element */
		$(".rating li").removeClass('positive')
	});
	
	$(".rating li").click(function(event) {
		$(".rating li").removeClass('positive_st')
		$(this).prevUntil('ul').addClass('positive_st')
		$(this).addClass('positive_st')
	})
})