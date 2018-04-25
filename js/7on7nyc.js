
$(window).on("load", calculateHeight );
$(window).on("load", scrollApp );
$(window).on("resize", calculateHeight );

// calculate height of mobile-container
function calculateHeight() {

	var frameHeight = $(".frame").height();
	// margin = 21.25 % from entire height
	var marginFrame = frameHeight * (20.25 / 100);

	var containerHeight = (frameHeight - marginFrame) + "px";
	$(".mobile-container").css("height", containerHeight);

}

if ( $(window).width() > 770 ) {
    $(window).scroll(function() {
        $('.video-tablet video').each(function(){
            if ($(this).is(":in-viewport")) {
                $(this)[0].play();
            } else {
                $(this)[0].pause();
            }
        })
    });
} else {
    $(".video-tablet video").prop({
        'muted': false,
        'poster': "img/poster_video.png",
        'autoplay': false,
        'preload': false,
        'loop': false,
        'controls': true,
        'width' : 640,
        'height': 360
    });
}

// play and stop video  
$(".video-tablet video").on('click tap', function (){
    
    $("html, body").animate({
        scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2  
    });
    
});

// inner-mobile scrolls
function scrollApp() {

    if ( $(window).width() > 770 ) {
        
        calculateHeight();
        // the actual height of container
        var containerHeight = $(".mobile-container").height();
        var frame = $(".frame").height();
        // the height of content 
        var contentHeight_1 = $('#content-1').height();
        var contentHeight_2 = $('#content-2').height();
        var contentHeight_3 = $('#content-3').height();
        var contentHeight_4 = $('#content-4').height();

        // contentscroll of mobile 
    	var contentScroll_1 = -(contentHeight_1 - containerHeight) + 'px';
        var contentScroll_2 = -(contentHeight_2 - containerHeight) + 'px';
        var contentScroll_3 = -(contentHeight_3 - containerHeight) + 'px';
        var contentScroll_4 = -(contentHeight_4 - containerHeight) + 'px';

        // Get window height
        var wh = window.innerHeight;
        var border = wh-frame;
        var offset = border/2;

        // init
        var ctrl = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: 'onLeave', 
                offset: -offset
            }
        });

        // init first scene
        var scrollApp_1 = new TimelineMax();
        scrollApp_1
            .to( $('#content-1'), 1, { y: contentScroll_1, delay: 0.5 })
            .to( $('#content-2'), 1, { y: contentScroll_2, delay: 0.5 });

        // scroll
        var scene1 = new ScrollMagic.Scene({
            triggerElement: $(".first-mobile")[0],
            duration: contentHeight_1
        })
        .setTween(scrollApp_1)
        .setPin($(".first-mobile")[0])
        .addTo(ctrl);

        // init second scene 
        var scrollApp_2 = new TimelineMax();
        scrollApp_2
            .to( $('#content-3'), 1, { y: contentScroll_3, delay: 0.5 })
            .to( $('#content-4'), 1, { y: contentScroll_4, delay: 0.5 });

        // scroll
        var scene2 = new ScrollMagic.Scene({
            triggerElement: $(".second-mobile")[0],
            duration: contentHeight_2
        })
        .setTween(scrollApp_2)
        .setPin($(".second-mobile")[0])
        .addTo(ctrl);

    };

}



