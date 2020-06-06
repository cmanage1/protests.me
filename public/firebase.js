var app_firebase = {};


( function (){
    var firebaseConfig = {
        apiKey: "AIzaSyCj7mkuwUwj9N8o1LYjOy5q5_Sii52ven4",
        authDomain: "protestsdotme.firebaseapp.com",
        databaseURL: "https://protestsdotme.firebaseio.com",
        projectId: "protestsdotme",
        storageBucket: "protestsdotme.appspot.com",
        messagingSenderId: "1063088080451",
        appId: "1:1063088080451:web:3d494f906c07548e35f6f6",
        measurementId: "G-QZ0X6BK3L8"
    };

    firebase.initializeApp(firebaseConfig);
    app_firebase= firebase;
})() 
