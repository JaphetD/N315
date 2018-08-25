
var ModalMaker = (function () {
    //This is the login modal
    var _createSignInModal = function (headerText) {
        var _modalHTML = '<div class="modal">\n' +
            '    <div class="clickDiv"></div>\n' +
            '    <div class="formalHolder">\n' +
            '        <h1>Log in</h1>\n' +
            '        <form class="loginForm">\n' +
            '            <label>Username / Email</label>\n' +
            '            <input type="email" name="email" placeholder="email address">\n' +
            '            <label>Password</label>\n' +
            '            <input type="password" name="password" placeholder="Password"><br>\n' +
            '            <input class="loginSubmit" type="submit" value="submit">\n' +
            '        </form>\n' +
            '        <span class="closeBtn">X</span>\n' +
            '    </div>\n' +
            '</div>';


                $("body").append(_modalHTML);
                $(".clickDiv").click(function () {
                    $(this).parent().remove();
                });

                $(".closeBtn").click(function () {
                    $(".modal").remove();
                })
            };

            return {
                createSignInModal: _createSignInModal
            }

})();

var ModalMaker2 = (function () {
    //This is the modal for Speaker Signup
    var _createRegistrationModal = function (headerText) {
        var _modalHTML2 = '<div class="modal">\n' +
            '    <div class="clickDiv"></div>\n' +
            '    <div class="formalHolder">\n' +
            '        <h1>Speaker Registration</h1>\n' +
            '        <form class="Reg">\n' +
            '            <label>Email</label>\n' +
            '            <input type="email" name="email" placeholder="email address" class="email">\n' +
            '            <label>First Name</label>\n' +
            '            <input type="text" name="fName" placeholder="First Name" class="fName"><br>\n' +
            '            <label>Last Name</label>\n' +
            '            <input type="text" name="lName" placeholder="Last Name" class="lName"><br>\n' +
            '            <label>Password</label>\n' +
            '            <input type="password" name="password" placeholder="Password" class="password"><br>\n' +
            '            <label>Social Media</label>\n' +
            '            <input type="text" name="socialmedia" placeholder="Social Media" class="SocialMedia"><br>\n' +
            '            <label>Company Name</label>\n' +
            '            <input type="text" name="companyname" placeholder="Company Name" class="Company"><br>\n' +
            '            <label>Phone Number</label>\n' +
            '            <input type="number" name="phonenumber" placeholder="Phone Number" class="Phone"><br>\n' +
            '            <input class="submit" onclick="myFunction()"type="submit">\n' +
            '        </form>\n' +
            '        <span class="closeBtn">X</span>\n' +
            '    </div>\n' +
            '</div>';


        $("body").append(_modalHTML2);
        $(".clickDiv").click(function () {
            $(this).parent().remove();
        });

        $(".closeBtn").click(function () {
            $(".modal").remove();
        })
    };

    return {
        createRegistrationModal: _createRegistrationModal
    }

})();

var ModalMaker3 = (function () {
    //This is the modal for Regular User  Signup
    var _createSignUpModal = function (headerText) {
        var _modalHTML3 = '<div class="modal">\n' +
            '    <div class="clickDiv"></div>\n' +
            '    <div class="formalHolder">\n' +
            '        <h1>User Registration</h1>\n' +
            '        <form class="Reg2">\n' +
            '            <label>Email</label>\n' +
            '            <input type="email" name="email" placeholder="email address" class="email">\n' +
            '            <label>First Name</label>\n' +
            '            <input type="text" name="fName" placeholder="First Name" class="fName"><br>\n' +
            '            <label>Last Name</label>\n' +
            '            <input type="text" name="lName" placeholder="Last Name" class="lName"><br>\n' +
            '            <label>Password</label>\n' +
            '            <input type="password" name="password" placeholder="password" class="password  ">\n' +
            '            <input class="submit" onclick="myFunction2()" type="submit">\n' +
            '        </form>\n' +
            '        <span class="closeBtn">X</span>\n' +
            '    </div>\n' +
            '</div>';


        $("body").append(_modalHTML3);
        $(".clickDiv").click(function () {
            $(this).parent().remove();
        });

        $(".closeBtn").click(function () {
            $(".modal").remove();
        })
    };

    return {
        createSignUpModal: _createSignUpModal
    }

})();

var ModalMaker4 = (function () {
    //This is the modal popout for contact information
    var _createContactInformationModal = function (headerText) {
        var _modalHTML4 = '<div class="modal">\n' +
            '    <div class="clickDiv"></div>\n' +
            '    <div class="formalHolder">\n' +
            '        <h1>Contact Information</h1>\n' +
            ' <p class="modalText">You can contact our offices at ###-###-#### or through email at aaa@aaa.com</p>'+
            '        </form>\n' +
            '        <span class="closeBtn">X</span>\n' +
            '    </div>\n' +
            '</div>';


        $("body").append(_modalHTML4);
        $(".clickDiv").click(function () {
            $(this).parent().remove();
        });

        $(".closeBtn").click(function () {
            $(".modal").remove();
        })
    };

    return {
        createContactInformationModal: _createContactInformationModal
    }

})();

var ModalMaker5 = (function () {
    //This is the modal popout for account details
    var _createAccountDetailsModal = function (headerText) {
        var _modalHTML5 = '<div class="modal">\n' +
            '    <div class="clickDiv"></div>\n' +
            '    <div class="formalHolder">\n' +
            '        <h1>Account Information</h1>\n' +
            ' <p class="modalText"></p>'+
            '        </form>\n' +
            '        <span class="closeBtn">X</span>\n' +
            '    </div>\n' +
            '</div>';



        $("body").append(_modalHTML5);
        $(".clickDiv").click(function () {
            $(this).parent().remove();
        });

        $(".closeBtn").click(function () {
            $(".modal").remove();
        })
    };

    return {
        createAccountDetailsModal: _createAccountDetailsModal
    }

})();

var ModalMaker6 = (function () {
    //This is the modal popout for the Code of Conduct
    var _createConductModal = function (headerText) {
        var _modalHTML6 = '<div class="modal">\n' +
            '    <div class="clickDiv"></div>\n' +
            '    <div class="formalHolder">\n' +
            '        <h1>Code of Conduct</h1>\n' +
            ' <p class="modalText">You cannot personally attack other speakers.Speakers must stay on topic during the debates.As a speaker you cannot talk over your opponent when it is not your turn to speak. As for the audience members, you must stay quiet during the debates, and you can only ask the speakers questions after the debate is over.</p>'+
            '        </form>\n' +
            '        <span class="closeBtn">X</span>\n' +
            '    </div>\n' +
            '</div>';


        $("body").append(_modalHTML6);
        $(".clickDiv").click(function () {
            $(this).parent().remove();
        });

        $(".closeBtn").click(function () {
            $(".modal").remove();
        })
    };

    return {
        createConductModal: _createConductModal
    }

})();

var ModalMaker7 = (function () {
    //This is the modal popout for the Tickets
    var _createTicketModal = function (headerText) {
        var _modalHTML7 = '<div class="modal">\n' +
            '    <div class="clickDiv"></div>\n' +
            '    <div class="formalHolder">\n' +
            '        <h1>Tickets</h1>\n' +
            ' <p class="modalText">Most of our debates are free to attend if you bring your student ID. If you do not have a student ID you can purchase a ticket on site for $2.</p>'+
            '        </form>\n' +
            '        <span class="closeBtn">X</span>\n' +
            '    </div>\n' +
            '</div>';


        $("body").append(_modalHTML7);
        $(".clickDiv").click(function () {
            $(this).parent().remove();
        });

        $(".closeBtn").click(function () {
            $(".modal").remove();
        })
    };

    return {
        createTicketModal: _createTicketModal
    }

})();

var ModalMaker8 = (function () {
    //This is the modal popout for the Schedule
    var _createScheduleModal = function (headerText) {
        var _modalHTML8 = '<div class="modal">\n' +
            '    <div class="clickDiv"></div>\n' +
            '    <div class="formalHolder">\n' +
            '        <h1>Scheduling</h1>\n' +
            ' <p class="modalText">Debates are hosted in a local forum near campus, Monday through Friday 9am till 4pm. More details will be posted later on.In order to not miss an important announcement be sure to keep in touch with our email. You can find the email in our contact section above.</p>'+
            '        </form>\n' +
            '        <span class="closeBtn">X</span>\n' +
            '    </div>\n' +
            '</div>';


        $("body").append(_modalHTML8);
        $(".clickDiv").click(function () {
            $(this).parent().remove();
        });

        $(".closeBtn").click(function () {
            $(".modal").remove();
        })
    };

    return {
        createScheduleModal: _createScheduleModal
    }

})();

var ModalMaker9 = (function () {
    //This is the modal for Regular User  Signup
    var _createTalkSubmitionModal = function (headerText) {
        var _modalHTML9 = '<div class="modal">\n' +
            '    <div class="clickDiv"></div>\n' +
            '    <div class="formalHolder">\n' +
            '        <h1>Talk Submition</h1>\n' +
            '        <form class="Reg2">\n' +
            '            <label>First Name</label>\n' +
            '            <input type="text" name="fName" placeholder="First Name" class="fName"><br>\n' +
            '            <label>Last Name</label>\n' +
            '            <input type="text" name="lName" placeholder="Last Name" class="lName"><br>\n' +
            '            <label>Topic</label>\n' +
            '            <input type="password" name="password" placeholder="Topic" class="password  ">\n' +
            '            <input class="submit" onclick="myFunction3()" type="submit">\n' +
            '        </form>\n' +
            '        <span class="closeBtn">X</span>\n' +
            '    </div>\n' +
            '</div>';


        $("body").append(_modalHTML9);
        $(".clickDiv").click(function () {
            $(this).parent().remove();
        });

        $(".closeBtn").click(function () {
            $(".modal").remove();
        })
    };

    return {
        createTalkSubmitionModal: _createTalkSubmitionModal
    }

})();
