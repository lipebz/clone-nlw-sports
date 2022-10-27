

$(function() {
    $('#right-button').click(function (event) {
        event.preventDefault();
        $('.container-scroll-horizontal').animate({
            scrollLeft: "+=500px"
        }, "slow");
    });

    $('#left-button').click(function (event) {
        event.preventDefault();
        $('.container-scroll-horizontal').animate({
            scrollLeft: "-=500px"
        }, "slow");
    });
});