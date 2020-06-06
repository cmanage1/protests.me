const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyCj7mkuwUwj9N8o1LYjOy5q5_Sii52ven4',
    authDomain: 'protests-dot-me.firebaseapp.com',
    projectId: 'protestsdotme'
});

var db = firebase.firestore();