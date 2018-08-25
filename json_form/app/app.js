var speakersJSON = {};
var currentUser = {};
function initSite(){
    $(".sub").click(function(e){
        //here we are listening to the submit button click and adding an event listener
        //Here we are preventing the page from refreshing and losing the information.
    e.preventDefault();
    //We are making a object and pushing it through the array because
    var speakerArray = $("form").serializeArray();
    //Below is an empty object
    var obj = {};
    // console.log(speakerArray);
    $.each(speakerArray, function (idx, formValue) {
        //here we are assigning values from the values from the data.json. Then that information gets made into an object. Instead of a 0 (because its an array) We're giving it a keyname in order to relate to the data.json.
        console.log(formValue.name + ' ' + formValue.value);
        obj[formValue.name] = formValue.value;
    });
        currentUser = obj;
        speakersJSON.Speakers.push(obj);
        console.log(speakersJSON);
        $("form").css("display", "none");
        console.log(obj['fName']);
        $('.headerName').html("Welcome " + currentUser.fName + ' ' + currentUser.lName);
    });
}

function getData() {
    $.getJSON("data/data.json", function(data) {
    }).done(function (data) {
        //Here we are filling the empty variable array with the data from data.json and then consoling it.
        speakersJSON =data;
        console.log(speakersJSON);
    }).fail(function (error) {
        //this is to display the error if we ever get one.
        console.log(error);
    })
}

$(document).ready(function () {
    //we can run anything in the document.ready but it is bad practice. Your document.ready will look cluttered. We wrote it like this in order to properly see the error if we get one.
    getData();
    initSite();
});


//we're getting the data first because in this scenario to be able to write to the index because we normally couldn't write from the js to the index