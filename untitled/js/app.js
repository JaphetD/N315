//This is a good way to make sure the function is working as intended.
// $("button").click(function() {
//    console.log("Hello");
// });


function addListeners() {
    //always start jquery functions with $ and in the () you write the element/class.
    $("button").click(function() {
 //For a button you need a .click function from there if the button doesn't work you can console.log it
        $(".modal").show();
    });

    //This function is the same as above. We're still in the addListener Parent. .hide works better than .remove. .hide is the counterpart of .show.
    $(".xBtn").click(function () {
        $(".modal").hide();
    });
}


//You can call the function above by writing the code below. There are two methods. The method below and document.ready
addListeners();