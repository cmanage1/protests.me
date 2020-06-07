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
    var result;

    //Have to change code so each user will have their own database collection
    var docRef = db.collection("jane-protests").doc("example-protest");
    
    //WRITE TO DATABASE
   docRef.set({
        title: title,
        location: place,
        date: date,
        numParticipants: participants,
        description: description,
    }).then(function () {
        console.log("Document written With ID: ", docRef.id);
        window.location.href = "profile.html";
    }).catch(function (error) {
        console.error("Error adding document: ", error);
    });


}



