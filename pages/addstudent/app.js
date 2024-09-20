// // Import the necessary Firebase modules
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
// import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// Firebase configuration
import { initializeApp} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import {getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7kv8_zmGN1SICJwRXyCrwqyM7koIfxyg",
  authDomain: "batch11anus.firebaseapp.com",
  projectId: "batch11anus",
  storageBucket: "batch11anus.appspot.com",
  messagingSenderId: "244068579098",
  appId: "1:244068579098:web:302b00888b933fb4715ea3",
  measurementId: "G-7W8EMYL6ZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();

var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var email = document.getElementById("email");
var password = document.getElementById("password");
var cnic = document.getElementById("cnic");

window.addStudent = () => {
    // Create an object with the values from the input fields
    let obj = {
        firstName: firstName.value,
        lastName: lastName.value,  // Fixed naming issue
        email: email.value,
        password: password.value,
        cnic: cnic.value,
    };

    console.log('Function working');

    createUserWithEmailAndPassword(auth, obj.email, obj.password)
    .then((res) => {
        console.log('User created successfully:', res);

        const reference = doc(db, "Users", obj.id);

        setDoc(reference, obj).then((dbRes) => {
            console.log('User data stored successfully:', dbRes);
        }).catch((err) => {
            console.log('Error storing user data:', err);
        });
    })
    .catch((err) => {
        console.log('Error creating user:', err);
    });
};






// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyD7kv8_zmGN1SICJwRXyCrwqyM7koIfxyg",
//     authDomain: "batch11anus.firebaseapp.com",
//     projectId: "batch11anus",
//     storageBucket: "batch11anus.appspot.com",
//     messagingSenderId: "244068579098",
//     appId: "1:244068579098:web:302b00888b933fb4715ea3",
//     measurementId: "G-7W8EMYL6ZC"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth();

// // Get references to the HTML input elements
// var username = document.getElementById("username"); 
// var email = document.getElementById("email");
// var password = document.getElementById("password");

// window.signup = () => {
//     // Create an object with the values from the input fields
//     let obj = {
//         username: username.value,
//         email: email.value,
//         password: password.value,
//     };

//     // Debugging messages
//     console.log('Function working');
//     console.log(obj);  // Log the object to the console

//     // Firebase function to create a new user with email and password
//     createUserWithEmailAndPassword(auth, obj.email, obj.password)
//     .then((res) => {
//         console.log('User created successfully:', res);
//     })
//     .catch((err) => {
//         console.log('Error creating user:', err);
//     });
// };

// Import the necessary Firebase modules
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
// import {  getFirestore,
//     doc, setDoc 
// } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// // Your Firebase configuration
// // const firebaseConfig = {
// //     apiKey: "AIzaSyD7kv8_zmGN1SICJwRXyCrwqyM7koIfxyg",
// //     authDomain: "batch11anus.firebaseapp.com",
// //     projectId: "batch11anus",
// //     storageBucket: "batch11anus.appspot.com",
// //     messagingSenderId: "244068579098",
// //     appId: "1:244068579098:web:302b00888b933fb4715ea3",
// //     measurementId: "G-7W8EMYL6ZC"
// //   };
// const firebaseConfig = {
//     apiKey: "AIzaSyD7kv8_zmGN1SICJwRXyCrwqyM7koIfxyg",
//     authDomain: "batch11anus.firebaseapp.com",
//     projectId: "batch11anus",
//     storageBucket: "batch11anus.appspot.com",
//     messagingSenderId: "244068579098",
//     appId: "1:244068579098:web:302b00888b933fb4715ea3",
//     measurementId: "G-7W8EMYL6ZC"
//   };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const db = getFirestore();

// var firstName = document.getElementById("firstName")
// var lastName = document.getElementById("lastName")
// var email = document.getElementById("email")
// var password = document.getElementById("password")
// var cnic = document.getElementById("cnic")

// window.addStudent =()=>{
//     let obj = {
//         firstName: firstName.value,
//         lastNameName: lastName.value,
//         email: email.value,
//         password: password.value,
//         cnic: cnic.value,
//     };


// console.log('function working')
// console.log(obj)



// createUserWithEmailAndPassword(auth,obj.email,obj.password)
// .then((res)=>{
//     console.log(res)
//     obj.id = res.user.uid;

//     const reference = doc(db,"Users",obj.id)
//     setDoc(reference,obj).then((dbRes)=>{
//         console.log(obj,dbRes);
//     })

// })
// .catch((dberror)=>{
//     console.log(dberror);
// })
// .catch((err)=>{
//     console.log(err)
// })
// };





//  window.signup=()=> {
    
    
//     createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
        
//         console.log('User created successfully:', userCredential);
        
//     })
//     .catch((error) => {
//         console.error('Error creating user:', error);
//     });
// }

