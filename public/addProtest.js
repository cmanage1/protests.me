var title = "";
var date = "";
var place = "";
var description = "";
var participants = 0;
var isComplete = false;

function getInfo() {
    isComplete = true;
    console.log("Hi");
    title = document.getElementById('title');
    date = document.getElementById('date');
    place = document.getElementById('location');
    description = document.getElementById('description');
    participants = document.getElementById('participants');
    console.log(title, date);
}

if (isComplete == true){
    console.log (title, date);
    console.log("hi");
}

/* 
const firebase = require("firebase");

// Required for side-effects
require("firebase/firestore");
var db = firebase.firestore();


db.collection("protests").add({
    date: date,
    description: description,
    location: place,
    numParticipants: participants,
    title: title
}).then(function (docRef) {
    console.log("Document written with ID: ", docRef.id);
}).catch(function (error) {
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
*/