function initData() {
    $.getJSON("data/data.json", function (data) {
        console.log("name ", data);
    }).done(function (data) {
        console.log("twitter ", data.Speakers);
        $.each(data.Speakers, function (index, speaker) {
            console.log(index + " " + speaker.name);

        });
    })
}

initData();