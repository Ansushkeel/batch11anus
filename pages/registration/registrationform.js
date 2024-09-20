// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
// import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// // Firebase configuration
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
// const auth = getAuth();
// const db = getFirestore();

// // Register function
// window.register = async () => {
//     // Get form values
//     const name = document.getElementById("name").value;
//     const course = document.getElementById("course").value;
//     const rollNumber = document.getElementById("rollNumber").value;
//     const cnic = document.getElementById("cnic").value;

//     if (!name || !course || !rollNumber || !cnic) {
//         alert('All fields are required!');
//         return;
//     }

//     try {
//         // Create user with Firebase Auth (using rollNumber as email and cnic as password)
//         const userCredential = await createUserWithEmailAndPassword(auth, `${rollNumber}@example.com`, cnic);

//         // Add student details to Firestore
//         await addDoc(collection(db, "students"), {
//             name,
//             course,
//             rollNumber,
//             cnic,
//             uid: userCredential.user.uid
//         });

//         console.log("Student registered successfully");
//         alert('Registration successful!');
//     } catch (error) {
//         console.error("Error registering student:", error);
//         alert(`Error: ${error.message}`);
//     }
// };




import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
import {  getFirestore,
  collection, addDoc 
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD7kv8_zmGN1SICJwRXyCrwqyM7koIfxyg",
    authDomain: "batch11anus.firebaseapp.com",
    projectId: "batch11anus",
    storageBucket: "batch11anus.appspot.com",
    messagingSenderId: "244068579098",
    appId: "1:244068579098:web:302b00888b933fb4715ea3",
    measurementId: "G-7W8EMYL6ZC"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();



var name = document.getElementById("name")
var course = document.getElementById("course")
var rollNumber = document.getElementById("rollNumber")
var cnic = document.getElementById("cnic")


window.register=  ()=>{
  let obj ={
     name: name.value,
     course: course.value,
     rollNumber: rollNumber.value,
     cnic: cnic.value,
   }

createUserWithEmailAndPassword(auth,obj.name ,obj.course, obj.rollNumber, obj.cnic)

const reference = collection(db, "student");
addDoc(reference, obj)
.then(()=>{
  console.log("register student");
})
.catch((err)=>{
  console.log(err)
})


   console.log(obj)
};


// window.signup =()=>{
//     let obj = {
//         username: username.value,
//         email: email.value,
//         password: password.value,
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