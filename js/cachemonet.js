$(document).ready( replace_span );
$(window).resize( replace_span );

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
                console.log(volume);
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
        'poster': "img/poster_cachemonet.jpg",
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
    $(".main-section video").on('click tap', function (){
        $(this).each( function () {
            if ( $(this).get(0).paused ) {
                $(".main-section video").each( function() { 
                    this.pause(); 
                    $(this).css('cursor', 'url("../../img/cursor/ui_audio_play.png"), pointer');
                });
                $(this).get(0).play();
                $(this).css('cursor', 'url("../../img/cursor/ui_pause.png"), pointer');
                // snap video
                $("html, body").animate({
                    scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2  
                });
                // videos paused when out of viewport
                $(window).scroll(function() {
                        $('.main-section video').each(function(){
                        if ( $(this).is(":above-the-top") || $(this).is(":below-the-fold") ) {
                            $(this)[0].pause();
                            $(this).css('cursor', 'url("../../img/cursor/ui_audio_play.png"), pointer');
                        } 
                    })
                });
            } else { 
                $(this).get(0).pause();
                $(this).css('cursor', 'url("../../img/cursor/ui_audio_play.png"), pointer');
            }
        })
    });
} else {
    $(".main-section video").prop({
        'muted': false,
        'autoplay': false,
        'preload': false,
        'loop': false,
        'controls': true,
        'width' : 640
    });
}

function replace_span() {

    if ( $(window).width() < 770 ) {
        var replaced = $(".main-section .right-side .descr span:not(.minimize), .main-section .left-side .descr span:not(.minimize)").html().replace("Click", "Tap");
        $(".main-section .right-side .descr span:not(.minimize), .main-section .left-side .descr span:not(.minimize)").html(replaced);
    } else {
        var replaced = $(".main-section .right-side .descr span:not(.minimize), .main-section .left-side .descr span:not(.minimize)").html().replace("Tap", "Click");
        $(".main-section .right-side .descr span:not(.minimize), .main-section .left-side .descr span:not(.minimize)").html(replaced);
    }

}