function initClickListenerFunction() {
    // This is where you will put your click listener to trigger modal
    // This will be turning the display to flex

    $(document).ready(function () {
        $(".user").click(function (e) {
            $(".modalHolder").css({
                display:"block"
            })
        });
    });


    // close listener and sets the display to none
    $(document).ready(function () {
        $(".close").click(function (e) {
            $(".modalHolder").css({
                display:"none"
            })
        });
    });

}

$(document).ready(function () {
    initClickListenerFunction();
});
