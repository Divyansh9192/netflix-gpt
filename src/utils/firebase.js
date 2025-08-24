// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBe1YcCoGIVA2IHfZy0c-9SfLsSUN3yDGE",
  authDomain: "netflixgpt-8e39e.firebaseapp.com",
  projectId: "netflixgpt-8e39e",
  storageBucket: "netflixgpt-8e39e.firebasestorage.app",
  messagingSenderId: "479186068552",
  appId: "1:479186068552:web:47276d5b685efc1aff247d",
  measurementId: "G-VWSJ0VC2CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
