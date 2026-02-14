// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDqwwfaSmFQnuXrjW9yhaqxMMW73FM71yI",
  authDomain: "netflix-gpt-c2116.firebaseapp.com",
  projectId: "netflix-gpt-c2116",
  storageBucket: "netflix-gpt-c2116.firebasestorage.app",
  messagingSenderId: "281335488183",
  appId: "1:281335488183:web:9a7634d37c91103b8a3732",
  measurementId: "G-N3M3XBFWC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); 

export const auth = getAuth();