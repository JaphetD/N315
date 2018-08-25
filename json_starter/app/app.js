// This function gets JSON
function initData() {
    //We're getting the data from the JSON file with this string below.Notice how we don't have to back out to reach the data folder.
    //We can also name data anything we want. We just name it data for clarity.
    //Find more information at Jquery API documentation GetJSON
    $.getJSON("data/data.json", function (data) {
        // console.log("first ", data);
    }).done(function (data) {
        // console.log("second ", data.Speakers);
        var speakerString = "";
        $.each(data.Speakers, function (idx, speaker) {
            // console.log("What is my index value" + idx + " " + speaker.name);
            if (speaker.Topics.length > 0) {
                speakerString += '<div class="speakerHolder">' +
                    '<h1>Speaker Name:' + speaker.name + '</h1>' +
                    '<p>Twitter:' + speaker.twitter + '</p>' +
                    '<p>Business:' + speaker.business + '</p>' +
                    '<div class="topic">' +
                    '<h3>Topic Name: </h3>';


                //Nested Loop now we're trying to accessing the topic names and this is looping through the array to find the topics.
                $.each(speaker.Topics, function (idx, topic) {
                    speakerString += '<p>' + topic.topicName + '</p>';
                    speakerString += '<p>' + "Type: " + topic.type + '</p>';
                    speakerString += '<p>' + "Category: " + topic.category + '</p>';
                    speakerString += '<p>' + "Description: " + topic.description + '</p>';
                });

                speakerString += '</div></div>';

            }


        });

        //uncomment the string below to append the data from the JSON file
        // $('body').append(speakerString);
        $('.container').append(speakerString);


    }).fail(function (error) {
        console.log("error ", error);
        alert("You have an error ", error);
    });
}


$(document).ready(function () {
    initData();
});