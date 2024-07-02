// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsFgdqw4LUC9kUNiY6ap8-9CCyv4G4i-g",
  authDomain: "seasalon-b54a5.firebaseapp.com",
  projectId: "seasalon-b54a5",
  storageBucket: "seasalon-b54a5.appspot.com",
  messagingSenderId: "541844833165",
  appId: "1:541844833165:web:4edefb413575e5c648b3c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage();
export const db = getFirestore(app);