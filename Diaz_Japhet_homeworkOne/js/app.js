

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

function myFunction() {
    alert("Speaker successfully registered!");
}

function myFunction2() {
    alert("User successfully registered!");
}

function myFunction3() {
    alert("Talk successfully submitted!");
}

$(document).ready(function () {
    $(".signIn").click(function (e) {
        ModalMaker.createSignInModal("Sign In Now!!");
    });
    $(".register").click(function (e) {
        //Speaker Signup
        ModalMaker2.createRegistrationModal("Speaker Register Now!!");
        $(".Reg .submit").click(function (e) {
            e.preventDefault();
            console.log("click");

            var firstName = $('.fName').val(),
                lastName = $('.lName').val(),
                email = $('.email').val(),
                password = $('.password').val(),
                social = $('.SocialMedia').val(),
                company = $('.Company').val(),
                phone = $('.Phone').val();



            console.log(social);
            console.log(company);
            console.log(phone);



            var newUserObj = {
                "name": firstName + ' ' + lastName,
                "email": email,
                "social": social,
                "company": company,
                "phone": phone,
                "password": password
            }
            FIREBASE_PROVIDER.createNewUser(newUserObj);
        });
    });
    $(".signUp").click(function (e) {
        //Regular user signup
        ModalMaker3.createSignUpModal("User Register Now!!");
        $(".Reg2 .submit").click(function (e) {
            e.preventDefault();
            console.log("click");

            var firstName = $('.fName').val(),
                lastName = $('.lName').val(),
                email = $('.email').val(),
                password = $('.password').val();


            var newUserObj = {
                "name": firstName + ' ' + lastName,
                "email": email,
                "password": password
            };
            FIREBASE_PROVIDER.createNewUser(newUserObj);
        });
    });
    $(".contact").click(function (e) {
        //Contact information popout
        ModalMaker4.createContactInformationModal("Contact Information!");
    });
    $(".account").click(function (e) {
        //Contact information popout
        ModalMaker5.createAccountDetailsModal("Contact Information!");

        var firstName = $('.fName').val(),
            lastName = $('.lName').val(),
            email = $('.email').val(),
            password = $('.password').val();

        document.getElementById(".modalText").innerHtml = firstName + ' ' + lastName;
    });

    $(".conduct").click(function (e) {
        //Contact information popout
        ModalMaker6.createConductModal("Code of Conduct Information");

    });
    $(".ticket").click(function (e) {
        //ticket information popout
        ModalMaker7.createTicketModal("Ticket Information");
    });
    $(".schedule").click(function (e) {
        //schedule information popout
        ModalMaker8.createScheduleModal("Schedule Information");
    });
    $(".talksubmition").click(function (e) {
        //schedule information popout
        ModalMaker9.createTalkSubmitionModal("TalkInformation");
    });

});

function init() {
    FIREBASE_PROVIDER.getAllDataOnce();

    $('.loginForm .loginSubmit').click(function (e) {
        e.preventDefault();
        var email = $('.loginForm .email').val(),
            password = $('.loginForm .password').val();

        var loginUserObj = {
            "email": email,
            "password": password
        };
        FIREBASE_PROVIDER.signIn(loginUserObj);
    });

    $('.logout').click(function () {
        FIREBASE_PROVIDER.signOut();
    });

    $(".Reg .submit").click(function (e) {
        e.preventDefault();
        console.log("click");

        var firstName = $('.fName').val(),
            lastName = $('.lName').val(),
            email = $('.email').val(),
            password = $('.password').val();

            console.log(firstName);
            console.log(lastName);
            console.log(password);
            console.log(email);
            console.log(password);

        var newUserObj = {
            "name": firstName + ' ' + lastName,
            "email": email,
            "password": password
        }
        FIREBASE_PROVIDER.createNewUser(newUserObj);
    });

    $(".delete").click(function (e) {
        FIREBASE_PROVIDER.deleteSpeaker();
    });

    $(".update").click(function (e) {
        var updateObj = {
            email:"jk@jk.com",
            fName:"Mujtaba"
        };

        FIREBASE_PROVIDER.updateSpeaker(updateObj)
    });

    $(".add").click(function (e) {
        //.set replaces all of your data in the firebase database but .push adds a new array of data into your database.
        //this is where you would get all your input values from a form
        var spkInfo = {
            "fName": "Todd",
            "lName": "Shelton",
            "email": "tod@kdkl.com",
            "twitter": "tomsmith",
            "github": "TShelton41",
            "talks": []
        }

        FIREBASE_PROVIDER.createSpeaker(spkInfo);
    });
}

$(document).ready(function () {
    init();
    FIREBASE_PROVIDER.createSpeaker();
});