// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnzqD6rvRAOi3FT58gtHPC9zccRUYG2xw",
  authDomain: "noche-proyecto.firebaseapp.com",
  projectId: "noche-proyecto",
  storageBucket: "noche-proyecto.firebasestorage.app",
  messagingSenderId: "432772296857",
  appId: "1:432772296857:web:c083140fe29f8f93c74808"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)