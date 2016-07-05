// https://codepen.io/ace/pen/BqEer
// By ace
// 12.06.16


var $black_white = $('.black_white'),
		img_width = $('.black_white img').width(),
		init_split = Math.round(img_width/2);

  $black_white.width(init_split);

		$('.before_after_slider').mousemove(function(e){
		var offX  = (e.offsetX || e.clientX - $black_white.offset().left);
			$black_white.width(offX);
		});

		$('.before_after_slider').mouseleave(function(e){
		$black_white.stop().animate({
		width: init_split
		},1000)
		});
