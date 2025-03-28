// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgwFxWdr2jq5e2KflNfUjutOHhv9-KgFA",
  authDomain: "neflix-clone-16025.firebaseapp.com",
  projectId: "neflix-clone-16025",
  storageBucket: "neflix-clone-16025.firebasestorage.app",
  messagingSenderId: "206085274042",
  appId: "1:206085274042:web:0ec869f4a93afd54684583",
  measurementId: "G-05YFJV4841"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()