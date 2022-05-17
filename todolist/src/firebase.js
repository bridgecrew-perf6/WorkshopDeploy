// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  //YOUR FIREBASE CONFIG HERE
  apiKey: "AIzaSyD64Cgt3NCaGOdT6lYd6PF2I4Cy55XxaG0",
  authDomain: "todolist-232ea.firebaseapp.com",
  projectId: "todolist-232ea",
  storageBucket: "todolist-232ea.appspot.com",
  messagingSenderId: "130551737628",
  appId: "1:130551737628:web:fd449da31faf6c201b1ed9",
  measurementId: "G-C4BGXME8W1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
