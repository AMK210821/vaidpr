// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1uWy8rugA17FBb7Bxg9OJ-G5r5yrj0dU",
    authDomain: "demo2-4e95e.firebaseapp.com",
    projectId: "demo2-4e95e",
    storageBucket: "demo2-4e95e.firebasestorage.app",
    messagingSenderId: "340008874383",
    appId: "1:340008874383:web:ea1476c2a890f082c75bfa",
    measurementId: "G-ZEKNDGV43P"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            alert("Login successful!");
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert("Error: " + errorMessage);
        });
}