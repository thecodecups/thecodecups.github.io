  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDljym7QfwNKLJFLTOfn4ozTGQOA_puxQc",
    authDomain: "thecodecups.firebaseapp.com",
    projectId: "thecodecups",
    storageBucket: "thecodecups.appspot.com",
    messagingSenderId: "594859064249",
    appId: "1:594859064249:web:d48911b7eb6c56b0239468",
    measurementId: "G-BBQ8K406Y0"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
