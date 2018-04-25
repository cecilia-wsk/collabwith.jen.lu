
$(document).ready( HoverEffect );

// document.addEventListener("DOMContentLoaded", function() { initialiseMediaPlayer(); }, false);

// var mediaPlayer;

// function initialiseMediaPlayer() {
//    mediaPlayer = document.getElementById('media-video');
//    mediaPlayer.controls = false;
// }

// function togglePlayPause() {
//    var btn = document.getElementById('play-pause-button');
//    if (mediaPlayer.paused || mediaPlayer.ended) {
//       btn.title = 'pause';
//       btn.innerHTML = '<img src="../../img/cursor/ui_pause.png" alt="Pause">';
//       btn.className = 'pause';
//       mediaPlayer.play();
//    }
//    else {
//       btn.title = 'play';
//       btn.innerHTML = '<img src="../../img/cursor/ui_audio_play.png" alt="Play">';
//       btn.className = 'play';
//       mediaPlayer.pause();
//    }
// }

// function changeButtonType(btn, value) {
//    btn.title = value;
//    btn.innerHTML = value;
//    btn.className = value;
// }



// shuffle elements in array
function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

// logo progress bar 
$(function() {
    
    var getMax = function() {
        if ( window.location.href.indexOf("index") > -1 && $(window).width() > 770 ) 
            return ($(document).height() - $('.landing').height()*2) - $(window).height()
        else
            return $(document).height() - $(window).height();
    }
    
    var getValue = function() {
        if ( window.location.href.indexOf("index") > -1 && $(window).width() > 770  ) 
            return $(window).scrollTop() - ($('.landing').height()*2);
        else
            return $(window).scrollTop();
    }
    
    var progressBar = $('.progress-container');
    var max;
    var value;
    var width;
    
    var getWidth = function(){
    	max = getMax();
        // calculate width in percentage
        value = getValue();            
        width = (value/max) * 100;
        if ( width > 100 ) width = 100;
        width = width + '%';
        return width;
    }
    
    var setWidth = function(){
        progressBar.css({ width: getWidth() });
    }
    
    $(document).on('scroll', setWidth);
    $(window).on('resize', function(){
        // need to reset the max attr
        setWidth();
    });

});

// video play/pause when it's in or out viewport
if ( $(window).width() > 770 ) {
    $(window).scroll(function() {
        $('.video-main video:not(.first-section video)').each(function(){
            if ($(this).is(":in-viewport")) {
                $(this)[0].play();
            } else {
                $(this)[0].pause();
            }
        })
    })
};

// animation hover on link back to top 
if ( $(window).width() > 770 ) {
    $(".scrollTo").hover(function() {
    	$(".top img").css("transform", "translateY(-15%)");
    }, function() {
    	$(".top img").css("transform", "translateY(0)");
    });
}

// back to top with smooth scroll
$(function() {
  $('.scrollTo').on('click tap', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 950);
        return false;
      }
    }
  });
});

 if ( $(window).width() > 770 ) {
    // make appear next project image
    $(".next").hover(function() {
    	$(".next-project").css({
    		zIndex: 1000,
    		opacity: 1
    	});
    }, function() {
    	$(".next-project").css({
    		zIndex: -1000,
    		opacity: 0
    	});
    })

    // make appear previous project image
    $(".previous").hover(function() {
    	$(".previous-project").css({
    		zIndex: 1000,
    		opacity: 1
    	});
    }, function() {
    	$(".previous-project").css({
    		zIndex: -1000,
    		opacity: 0
    	});
    })
}

// links :hover
function HoverEffect() {

    if ( $(window).width() > 770 ) {

        // partners names funny hover
        $('.partners a, .awards a, .press a, .exhibitions a, .construct a, .social-media-links a').each(function(i, obj){

            var splitText = new SplitText($(obj), {type:"chars"});
            var tl;
            var _chars;
            var hoverEffects = [];

            function hover_1() {     
                _chars = [];
                _chars = shuffle(splitText.chars);
                var half_length = Math.ceil(_chars.length / 2);
                var split = _chars.slice(0, half_length);
                tl = new TimelineMax({repeat:-1, repeatDelay:0.2});
                tl.staggerTo(split, 0.3, {y:-10, rotationX:360, ease:Linear.easeNone, repeat:-1, repeatDelay:1, yoyo:false}, 0.1);
            };

            function hover_2() { 
                tl = new TimelineMax({repeat:-1, repeatDelay:0});
                tl.staggerTo(splitText.chars, 0.3, {y:-10, rotationX: -180, ease:Linear.easeNone, repeat:1, yoyo:true}, 0.1);
            };

            function hover_3() {   
                tl = new TimelineMax({repeat:-1, repeatDelay:0});
                tl.staggerTo(splitText.chars, 0.3, {rotationY:360, ease:Linear.easeNone, overwrite:false}, 0.1);
            };

            function hover_4() {
                _chars = [];
                _chars = shuffle(splitText.chars);
                var half_length = Math.ceil(_chars.length / 2);
                var split = _chars.slice(0, half_length);
                tl = new TimelineMax({repeat:-1, repeatDelay:0});
                tl.staggerTo(split, 0.3, { rotationY: 180, ease:Linear.easeNone, repeat:-1, repeatDelay:1, yoyo:true}, 0);
            };

            function hover_5() {  
                tl = new TimelineMax({repeat:-1, repeatDelay:0});
                tl.staggerTo(splitText.chars, 0.3, {y:10, rotationY:360, ease:Linear.easeNone, repeat:1, yoyo:true}, 0.1);
            };

            hoverEffects.push(hover_1, hover_2, hover_3, hover_4, hover_5);

            $(obj).bind('mouseenter', function(event){
                var i = Math.floor((Math.random() * hoverEffects.length) + 0);
                hoverEffects[i]();
            });

            $(obj).bind('mouseleave', function(event){
                _chars = [];
                tl.seek(0);
                tl.stop();
            });

        });
    }
}




