
// activate / desactivate audio on video 
if ( $(window).width() > 770 ) {
    $("header video").on('click tap', function (){
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
                    $("header video")[0].pause();
                } else {
                    $("header video")[0].play();
                }
                // console.log(volume);
                $("header video")[0].volume = volume;
        	});
        } else {
          $(this).prop('muted', true);
          $(this).css('cursor', 'url("../../img/cursor/ui_audio_on.png"), pointer');
        }
    });
} else {
    $("header video").prop({
        'muted': false,
        'poster': "img/poster_simplifythatshit_video.jpg",
        'autoplay': false,
        'preload': false,
        'loop': false,
        'controls': true,
        'width' : 640,
        'height': 360
    });
}

// play and stop video  
if ( $(window).width() > 770 ) {
    $(".first-section video").on('click tap', function (){
            if ( $(this).get(0).paused ) {
                $(this).get(0).play();
                $(this).css('cursor', 'url("../../img/cursor/ui_pause.png"), pointer');
                // snap video
                $("html, body").animate({
                    scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2  
                }); 
                // video paused when out of viewport
                $(window).scroll(function() {
                    if ( $(".first-section video").is(":above-the-top") || 
                        $(".first-section video").is(":below-the-fold") ) {
                        $(".first-section video")[0].pause();
                        $(".first-section video").css('cursor', 'url("../../img/cursor/ui_audio_play.png"), pointer');
                    }
                });
            } else { 
                $(this).get(0).pause();
                $(this).css('cursor', 'url("../../img/cursor/ui_audio_play.png"), pointer');
            }
    });
}  else {
    $(".first-section video").prop({
        'muted': false,
        'autoplay': false,
        'preload': false,
        'loop': false,
        'controls': true,
        'width' : 640,
        'height': 360
    });
}
