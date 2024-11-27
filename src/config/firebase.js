// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADR0sYXCtEUUp7Fg4_Zt5TiAKnsoxLc30",
  authDomain: "react-contact-app-f336a.firebaseapp.com",
  projectId: "react-contact-app-f336a",
  storageBucket: "react-contact-app-f336a.firebasestorage.app",
  messagingSenderId: "524901617277",
  appId: "1:524901617277:web:f01df099491234a0056b14",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
