// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeCcOnYRxVr3oTSYIk3fcd3xaABoj8BSA",
  authDomain: "diafit-1ee12.firebaseapp.com",
  projectId: "diafit-1ee12",
  storageBucket: "diafit-1ee12.appspot.com",
  messagingSenderId: "197004953318",
  appId: "1:197004953318:web:64d260c34b611a64df1d27",
  measurementId: "G-WR6MXJ8NTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app)
const firestoredb = getFirestore(app)

export {app, firebaseAuth, firestoredb}