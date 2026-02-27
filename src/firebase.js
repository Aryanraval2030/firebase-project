
// -----------------------------------------------------------------------

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Replace this with your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBHUpk5j7kXdq5Vpm652A0DcMT_ryL3hSE",
  authDomain: "e-commerce-bea8b.firebaseapp.com",
  projectId: "e-commerce-bea8b",
  storageBucket: "e-commerce-bea8b.firebasestorage.app",
  messagingSenderId: "242205517149",
  appId: "1:242205517149:web:d7141bdafb676ecbad34b4",
  measurementId: "G-1037NWCYG9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);