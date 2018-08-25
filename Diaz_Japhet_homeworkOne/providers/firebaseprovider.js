var FIREBASE_PROVIDER = (function () {
// Initialize Firebase
    var config = {
        apiKey: "AIzaSyDveK_bz8lhnKPQCbtMqXtCsiTtrmXXQgs",
        authDomain: "diazjaphethomeworkone.firebaseapp.com",
        databaseURL: "https://diazjaphethomeworkone.firebaseio.com",
        projectId: "diazjaphethomeworkone",
        storageBucket: "",
        messagingSenderId: "392437385264"
    };
    firebase.initializeApp(config);


firebase.auth().onAuthStateChanged(function (user) {
    window.user = user.uid; // user is undefined if no user signed in
    console.log('authChange ', user)
});


var _dbRef = firebase.database();
var _speakersRef = _dbRef.ref('Speakers');

var _signIn = function(loginObj) {
    firebase.auth().createUserWithEmailAndPassword(loginObj.email, loginObj.password).then(function (value) {
        console.log(value.uid);
        _speakersRef
        //setting the child as the user's unique token
            .child(value.uid)
            .set({email: loginObj.email});
    }).catch(function (error) {
        var errorCode = error.code;
        console.log('errorCode ', errorCode);
        var errorMessage = error.message;
        console.log('errorMessage ', errorMessage);
    });
};

//Below this segment of code is creating a new user, and authenticating the user as well. It is currently checking for error and will give us an error code and message back.
var _createNewUser = function (newUserObj) {
    var newInfo = {
        name: newUserObj.name,
        email: newUserObj.email
    };

    firebase.auth().createUserWithEmailAndPassword(newUserObj.email, newUserObj.password).then(function (value) {
        console.log(value.uid);
        _speakersRef.push(newInfo).then(function (snap) {
            _speakerID = snap.key;
        });
    }).catch(function (error) {
        var errorCode = error.code;
        console.log('errorCode ', errorCode);
        var errorMessage = error.message;
        console.log('errorMessage ', errorMessage);
    });
};

var _createSpeaker = function (speakerInfo) {
    _speakersRef.push(speakerInfo).then(function (snap) {
      _speakerID = snap.key;
    });
};

var _updateSpeaker = function (updateInfo) {
    _speakersRef.child(_speakerID).update(updateInfo);
};

var _deleteSpeaker = function () {
    _speakersRef.child(_speakerID).remove();

};



var _getAllDataOnce = function () {
     return firebase.database().ref('/Speakers/').once('value').then(function(snapshot) {
        console.log(snapshot.val());
     });
 };

var _logout = function() {
    firebase.auth().signOut();
}

return {
    createSpeaker: _createSpeaker,
    updateSpeaker: _updateSpeaker,
    deleteSpeaker: _deleteSpeaker,
    getAllDataOnce: _getAllDataOnce,
    createNewUser: _createNewUser,
    signIn: _signIn,
    signOut: _logout
}

})();