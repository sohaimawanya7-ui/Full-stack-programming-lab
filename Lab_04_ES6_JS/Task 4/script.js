$(document).ready(function(){

    $(".tab-content").hide();
    $("#tab1").show();

    $(".tab-link").click(function(){

        let target = $(this).data("target");

        $(".tab-content").slideUp(400);
        $("#" + target).slideDown(400);

        $("html, body").animate({
            scrollTop: $("#" + target).offset().top
        }, 600);

    });

});