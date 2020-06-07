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


    var db = firebase.firestore();

    //WRITE TO DATABASE
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

    window.location.href = "profile.html";


}



