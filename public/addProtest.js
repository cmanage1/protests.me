const form = document.getElementById("newProtest");

var title = "";
var date = "";
var place = "";
var description = "";
var participants = 0;

form.onsubmit= function(e) {

    e.preventDefault();
    title = document.getElementById('title').value;
    place = document.getElementById('location').value;
    date = document.getElementById('date').value;
    participants = document.getElementById('participants').value;
    description = document.getElementById('description').value;

    const firebase = require("firebase");

    // Required for side-effects
    require("firebase/firestore");
    var db = firebase.firestore();

    db.collection("protests").add({
        title: title,
        location: place,
        date: date,
        numParticipants: participants,
        description: description,
        
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

}



