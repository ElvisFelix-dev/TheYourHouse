// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBNwQycpqm8SqkhEDud_DcEpyEmSBQvi14',
  authDomain: 'house-your.firebaseapp.com',
  projectId: 'house-your',
  storageBucket: 'house-your.appspot.com',
  messagingSenderId: '1096036474028',
  appId: '1:1096036474028:web:06a2cb2a2893f4c9c05309',
}

// Initialize Firebase
initializeApp(firebaseConfig)
export const db = getFirestore()
