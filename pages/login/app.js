     // Import the functions you need from the Firebase SDKs
     import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
     import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
     import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

     // Your web app's Firebase configuration
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

     // Login function
     window.Login = async () => {
         // Get form values
         const email = document.getElementById("email").value;
         const password = document.getElementById("password").value;

         if (!email || !password) {
             alert('Please enter both email and password');
             return;
         }

         try {
             // Log in with email and password
             const res = await signInWithEmailAndPassword(auth, email, password);

             // Get user data from Firestore
             const userId = res.user.uid;
             const userRef = doc(db, "users", userId);
             const userDoc = await getDoc(userRef);

             if (userDoc.exists()) {
                 console.log("User data:", userDoc.data());
                 alert('Login successful!');
             } else {
                 console.log("No such document!");
             }
         } catch (error) {
             console.error("Error logging in:", error);
             alert(`Login failed: ${error.message}`);
         }
     };




//   // Import the functions you need from the SDKs you need
//   import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
//   import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
//   import { getFirestore,
//     doc, getDoc
//     } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

  
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyD7kv8_zmGN1SICJwRXyCrwqyM7koIfxyg",
//     authDomain: "batch11anus.firebaseapp.com",
//     projectId: "batch11anus",
//     storageBucket: "batch11anus.appspot.com",
//     messagingSenderId: "244068579098",
//     appId: "1:244068579098:web:302b00888b933fb4715ea3",
//     measurementId: "G-7W8EMYL6ZC"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
// const auth = getAuth();
// const db = getFirestore();

// var email = document.getElementById("email")
// var password = document.getElementById("password")


// window.Login =()=>{
//     let obj = {
//         email: email.value,
//         password: password.value,
//     };


// console.log('function working')
// console.log(obj)



// signInWithEmailAndPassword(auth,obj.email,obj.password)
// .then(async (res)=>{
//   // console.log(res)
//   let id = res.user.uid;
//   const reference = doc(db,"users",id);

//   const user = await getDoc(reference);
//   if(user.exists()){
//     console.log(user.data());
//   }
   
// })
// .catch((err)=>{
//     console.log(err)
// })
// };

