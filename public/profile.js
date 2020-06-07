var db = firebase.firestore();
//Have to modify code to read the user's protest collection AND the most recent added DOC
var docRef = db.collection("jane-protests").doc("example-protest");

var title;
var date;
var place;
var numPartipants;
var description;

docRef.get().then(function (doc) {
    if (doc.exists) {
        console.log(doc.data());
        title = JSON.stringify( doc.data().title );
        date = JSON.stringify(doc.data().date);
        place = JSON.stringify(doc.data().location);
        numPartipants = JSON.stringify(doc.data().numParticipants);
        description = JSON.stringify(doc.data().description);
        console.log( typeof title);

 
            
        let output = 'Your new Protest(s): '
            output += `
                <ul>
                    <li class="result"> ${title} </li>
                    <li class="result"> ${date} </li>
                    <li class="result"> ${place} </li>
                    <li class="result"> ${numPartipants} </li>
                    <li class="result"> ${description} </li>
                </ul>
            `;
            document.getElementById('output').innerHTML = output;


        
        
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function (error) {
    console.log("Error getting document:", error);
});

