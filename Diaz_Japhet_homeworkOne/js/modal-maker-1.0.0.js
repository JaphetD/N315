

var ModalMaker = (function () {
       var _createSignInModal = function (headerText) {
            var _modalHTML ='<div class="modal">\n' +
                '<div class="formalHolder">\n' +
                '<h1>' + headerText + '</h1>\n' +
                '<form>\n' +
                '<label>Username / Email</label>\n' +
                '<input type="email" name="email" placeholder="email address">\n' +
                '<label>Password</label>\n' +
                '<input type="password" name="password" placeholder="Password"><br>\n' +
                '<div class="signInSubmit">Sign In</div>\n' +
                '</form>\n' +
                '<span class="closeBtn">X</span>\n' +
                '</div>\n' +
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