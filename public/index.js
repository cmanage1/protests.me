// const title = document.getElementById('title');
// const date = document.getElementById('date');
// const location = document.getElementById('date');
// const description = document.getElementById('date');
// var participants = document.getElementById('participants');
//const data = {title, date, location, description, participants}
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
const title = "Some big Protest";
const description = "Example Protest Description 21312414";
const location = "LA";
const participants = 543534;
const date = "June 20";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyCj7mkuwUwj9N8o1LYjOy5q5_Sii52ven4',
    authDomain: 'protests-dot-me.firebaseapp.com',
    projectId: 'protestsdotme'
});

var db = firebase.firestore();
db.collection("protests").add({
    date : date,
    description : description,
    location : location,
    numParticipants : participants,
    title : title
}).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
}).catch(function(error) {
        console.error("Error adding document: ", error);
});


var docRef = db.collection("protests").doc('xIuT8WaGHoAwI21UFIUL');


// Valid options for source are 'server', 'cache', or
// 'default'. See https://firebase.google.com/docs/reference/js/firebase.firestore.GetOptions
// for more information.
var getOptions = {
    source: 'cache'
};

// Get a document, forcing the SDK to fetch from the offline cache.
docRef.get(getOptions).then(function (doc) {
    // Document was found in the cache. If no cached document exists,
    // an error will be returned to the 'catch' block below.
    console.log("Cached document data:", doc.data());
}).catch(function (error) {
    console.log("Error getting cached document:", error);
});
