const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'Empty',
    authDomain: 'protests-dot-me.firebaseapp.com',
    projectId: 'protestsdotme'
});

var db = firebase.firestore();