// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzP2Vjho6Xts-Mh3D--kivbg1a4hvcRc0",
  authDomain: "newsapp-1fcec.firebaseapp.com",
  projectId: "newsapp-1fcec",
  storageBucket: "newsapp-1fcec.appspot.com",
  messagingSenderId: "1013238583281",
  appId: "1:1013238583281:web:e7b48f3b1ca79c6cfe7e50"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();