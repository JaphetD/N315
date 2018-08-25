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

    $("form .submit").click(function (e) {
        e.preventDefault();
        var firstName = $('.fName').val(),
            lastName = $('.lName').val(),
            email = $('.email').val(),
            password = $('.password').val();

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