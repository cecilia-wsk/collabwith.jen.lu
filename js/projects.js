// animation only on desktop 
 if ( $(window).width() > 770 ) {
	// make appear projects image
	$(".project-links").hover(function() {
		var id = $(this).attr("id");
		$("._"+id).css({
			opacity: 1
		});
	}, function() {
		var id = $(this).attr("id");
		$("._"+id).css({
			opacity: 0
		});
	})
}