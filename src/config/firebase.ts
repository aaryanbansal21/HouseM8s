// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5uXcxQCNuhJC09e-iqNLeip9N_D5QIZ4",
  authDomain: "housem8s-bac0e.firebaseapp.com",
  projectId: "housem8s-bac0e",
  storageBucket: "housem8s-bac0e.firebasestorage.app",
  messagingSenderId: "1017444486163",
  appId: "1:1017444486163:web:1f11a4cf09362da9db43e6",
  measurementId: "G-J8TYFFGYWC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);