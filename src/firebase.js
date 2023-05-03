// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0eb5-scCHK0L3JLDPSg_gZc0QRNQrHpU",
  authDomain: "your-house-v1.firebaseapp.com",
  projectId: "your-house-v1",
  storageBucket: "your-house-v1.appspot.com",
  messagingSenderId: "1047944137958",
  appId: "1:1047944137958:web:940d4204ab58650b563f27"
};

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()