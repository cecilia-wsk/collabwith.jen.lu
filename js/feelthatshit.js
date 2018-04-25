// activate parallax -- only on desktop
if ( $(window).width() > 770 ) {
    var parallax = new Parallax(document.getElementById("scene"));
}

$(window).on("load", calculateHeight );
$(window).on("resize", calculateHeight);

// calculate height of parent div of absolute images
function calculateHeight() {

	var childrenHeight = 0;

	$(".main-images img").each(function () {
		var singleHeight = Math.round($(this).height());
		childrenHeight += singleHeight;
	});

	var parentHeight = (childrenHeight/2.66)+"px";
	$(".main-images").css("height", parentHeight);

}

// activate / desactivate audio on video 
if ( $(window).width() > 770 ) {
    $(".video-main video").on('click tap', function (){
        if( $(this).prop('muted') ) {
            $(this).prop('muted', false);
            $(this).css('cursor', 'url("../../img/cursor/ui_audio_off.png"), pointer');
            // snap video
            $("html, body").animate({
                scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2  
            });
            // sound fading out on scroll
            var height = $(window).height();
            $(window).scroll(function() {
                var volume = 1 - ( $(window).scrollTop() / (height*1.5) );
                if (volume < 0) { 
                    volume = 0;
                    $(".video-main video")[0].pause();
                } else {
                    $(".video-main video")[0].play();
                }
                // console.log(volume);
                $(".video-main video")[0].volume = volume;
        	});
        } else {
          $(this).prop('muted', true);
          $(this).css('cursor', 'url("../../img/cursor/ui_audio_on.png"), pointer');
        }
    });
} else {
    $(".video-main video").prop({
        'muted': false,
        'poster': "img/mobile_feelthatshit_video_1.jpg",
        'autoplay': false,
        'preload': false,
        'loop': false,
        'controls': true,
        'width' : 640,
        'height': 360
    });
}

// changing video poster 
// if ( $(window).width() < 770 ) {
//     $(".video-main video").prop('autoplay', false);
//     $(".video-main video").prop('poster', "img/mobile_feelthatshit_video_1.jpg");
// }

// changing cursor on draggable images -- only on desktop 
if ( $(window).width() > 770 ) {
    $(".main-images img").mousedown( function() {
        $(this).css('cursor', 'url("../../img/cursor/cursor_drag.png"), pointer');
    })

    $(".main-images img").mouseup( function() {
        $(this).css('cursor', 'url("../../img/cursor/cursor_drop.png"), pointer');
    })
}

// drag and drop images -- only on desktop
if ( $(window).width() > 770 ) {
    $(function() {

        var zindex = 50;

      $('.main-images li').draggable({ 
      	revert: false, 
      	stack: '.main-images',
        start: function() { 
                $(this).css("z-index", zindex++);
            },
        stop: function() { 
                $(this).css("z-index", zindex++);
            }
        });

    })
}
