
$(document).ready( calculateHeight );
$(window).on("load", calculateHeight );
$(window).on("resize", calculateHeight);


// calculate height of header
function calculateHeight() {

    var childrenHeight = 0;

    $(".gif-bg img").each(function () {
        var singleHeight = Math.round($(this).height());
        childrenHeight += singleHeight;
    });

    var parentHeight = (childrenHeight / 3.6)+"px";
    $(".gif-bg").css("height", parentHeight);

    // gif aside height
    $(".gif-aside").css("height", $("#gif-aside-2").height());

if ( $(window).width() > 770 ) {
        // second line height
        $(".second-line").css("height", $(".mobile").height());
    }

}
