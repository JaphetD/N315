function initSubmitListener(){

    var divArray = $(".form-holder div");
    $.each(divArray, function(idx, formDiv){
        // console.log(formDiv.children.length);
        // $.each(formDiv.children, function(index, inputEle){
        // console.log(inputElem.find)
    //     })
    });
    $(".submit").click(function () {
        
    })
}

function initListeners() {

    var currentFormView = "form-one";
    var divArray = $(".form-holder div");
    var currentPos = 0;
    var divArrayLength = divArray.length;
    console.log(divArrayLength);


    $(".showModal").click(function (e) {
        $('.modal-container').css("display", "flex");
    });

    $('.closeBtn').click(function () {
        $('.modal-container').css("display", "none");
    });

    $('.clickBG').click(function () {
        $('.modal-container').css("display", "none");
    });

    $('.nextBtn').click(function (e) {
        e.preventDefault();
        if(currentPos == divArrayLength -1){
        console.log('limit');
        }else{
            $(divArray[currentPos]).animate({
                left:"-=100%"
            });

            currentPos++;

            $(divArray[currentPos]).animate({
                left:"-=100%"
            });
            //This is bad we lost the listener on the "next button" Unless we call a listener on this new button we will not get out of this encapsulation.
            if(currentPos == divArrayLength-1){
                $(".nextBtn").html("SUBMIT");
                $(".nextBtn").removeClass("next");
                $(".nextBtn").addClass("submit");
                initSubmitListener();
            }
        }
    });
}




$(document).ready(function () {
    initListeners();
});