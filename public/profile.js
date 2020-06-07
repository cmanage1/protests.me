//Make sure to stay in "LOGGED IN" state
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function () {
        // Existing and future Auth states are now persisted in the current
        // session only. Closing the window would clear any existing state even
        // if a user forgets to sign out.
        // ...
        // New sign-in will be persisted with session persistence.
        return firebase.auth().signInWithEmailAndPassword(email, password);
    })
    .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
    });

var db = firebase.firestore();


var docRef = db.collection("protests").doc('xIuT8WaGHoAwI21UFIUL');
// Valid options for source are 'server', 'cache', or
// 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
// for more information.
var getOptions = {
    //source: "cache" //Works without this for some reason
};

//READ FROM DATABASE

docRef.get(getOptions).then(function (doc) {
    // Document was found in the cache. If no cached document exists,
    // an error will be returned to the 'catch' block below.
    console.log("Cached document data:", doc.data());
}).catch(function (error) {
    console.log("Error getting cached document:", error);
});