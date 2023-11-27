// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC87petc83OJyV5Gzg9ktuFB2EMOusVVhY",
  authDomain: "portfolio-proyects.firebaseapp.com",
  projectId: "portfolio-proyects",
  storageBucket: "portfolio-proyects.appspot.com",
  messagingSenderId: "786931316937",
  appId: "1:786931316937:web:6e992bed201d91a53ab518",
  measurementId: "G-40QNFZCWF1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)
