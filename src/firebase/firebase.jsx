// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWyfPPYwcd3ICSSM_8uuieJVGvrwTvjVk",
  authDomain: "netflixgpt-372f0.firebaseapp.com",
  projectId: "netflixgpt-372f0",
  storageBucket: "netflixgpt-372f0.firebasestorage.app",
  messagingSenderId: "162159355963",
  appId: "1:162159355963:web:f4973416d9b5189201d41e",
  measurementId: "G-9W6DZ6NQBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);