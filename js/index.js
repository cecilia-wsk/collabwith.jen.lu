/* for having the landing home animation only the FIRST time in one session */
if (! sessionStorage.getItem('noFirstVisit') && $(window).width() > 770 ) {
    $(".progress-bar").css("top", "78.1%");
    $(".container").css("margin-top", "-65%");
    $("nav>a").addClass("landing-on");
    $(".landing").css("display", "block");
    sessionStorage.setItem('noFirstVisit', true)
    sessionStorage.clear();
};

/* landing home animation */
$(window).on("load", landingApp );

// inner-mobile scrolls
function landingApp() {

    var contentHeight_1 = $(".landing").height();

    var wh = window.innerHeight,
        $landing = (".landing"),
        $landing_gif = ("#landing-gif"),
        $landing_svg = ("#landing-svg"),
        $text = ("#welcome, #to"),
        $universal = (".progress-bar"),
        $container = (".container");

    // init
    var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    var intro = new TimelineMax();
    intro
        .to( $landing_gif, 1, { yPercent: -150 } )
        .to( $landing_svg, 1, { y: -wh*0.7 }, '0')
        .to( $text, 1.1, { y: -wh*1.5 } )
        .to( $landing_svg, 1, { yPercent: -300, zIndex: -1 }, '1' )
        .to( $universal, 0.45, { y: -wh*0.75 }, '1' );

    // scroll
    var scene1 = new ScrollMagic.Scene({
        triggerElement: $(".landing")[0],
        duration: contentHeight_1*2
    })
    .setTween(intro)
    .setPin($(".landing")[0])
    .addTo(ctrl)
    // .addIndicators();
}


// hover animation only on desktop 
if ( $(window).width() > 770 ) {
    $("section div a").bind('mousemove', function(e) {

    	var halfWidth =  $(this).find('svg').width() / 2;
    	var svgText =   $(this).find('text');
    	var svgTspan = svgText.find('tspan');
    	var svg = $(this).find('svg');
    	var svgPos =  $(this).find('svg').position();
    	var screenWidth = $( window ).width();

        $(this).find('svg').css({
           left:  e.clientX - halfWidth,
           top:   e.clientY + 70
        });

    });

    $("section div a").hover(function(e) {
    	$(this).find('svg').css({
    		display: "block"
    	});
    }, function() {
    	$(this).find('svg').css({
    		display: "none"
    	});
    })
}