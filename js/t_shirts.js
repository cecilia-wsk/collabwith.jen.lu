
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
}  else {
    $(".video-main video").prop({
        'muted': false,
        'poster': "img/poster_tshirts.jpg",
        'autoplay': false,
        'preload': false,
        'loop': false,
        'controls': true,
        'width' : 640,
        'height': 360
    });
} 