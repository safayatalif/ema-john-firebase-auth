// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAk3akQhbgRkWtU7AGz7nHnX3zrTij63Zk",
    authDomain: "ema-john-firebase-auth-4d7ad.firebaseapp.com",
    projectId: "ema-john-firebase-auth-4d7ad",
    storageBucket: "ema-john-firebase-auth-4d7ad.appspot.com",
    messagingSenderId: "520059456318",
    appId: "1:520059456318:web:3e99e5a7044324f4267a6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app