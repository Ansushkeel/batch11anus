
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";
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
  const analytics = getAnalytics(app);
const auth = getAuth();

