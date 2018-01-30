$(document).ready(function(){
    setBindings();
});

function setBindings(){
    $("nav a").click(function(e){
        var sectionID = e.currentTarget.id +"Section";

        $("html,body").animate({
            scrollTop: $("#" + sectionID).offset().top
        }, 1000)
    })
}

$(document).ready(function () {
    $(".signIn").click(function (e) {
        ModalMaker.createSignInModal("Sign In Now!!");
    });
});

function sweet(){
    swal(
        'Error',
        'Come back later!',
        'error'
    )
}
function sweet3(){
swal(
    'Error',
    'Come back later!',
    'error'
)
}



function sweet4(){
    swal(
        'Error',
        'Come back later!',
        'error'
    )
}


function sweet5(){
    swal(
        'Error',
        'Come back later!',
        'error'
    )
}


function sweet6() {
    swal(
       'Congratulations!',
        'You are officially registered!',
        'success'
    )
}

function sweet7() {
    swal(
        'Congratulations!',
        'You are now logged in!',
        'success'
    )
}

function sweet8() {
    swal({
        title:'Congratulations!',
        text:'You successfully submitted your presentation!',
        type:'success'
    })
}


