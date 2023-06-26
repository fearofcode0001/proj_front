// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxS3dnzMob7N8AVrINa3doa9VSLt2PDd4",
  authDomain: "immutable-finalproj.firebaseapp.com",
  projectId: "immutable-finalproj",
  storageBucket: "immutable-finalproj.appspot.com",
  messagingSenderId: "597264130146",
  appId: "1:597264130146:web:382e8ef501a76b3192713b",
  measurementId: "G-NJSFHHK126"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);