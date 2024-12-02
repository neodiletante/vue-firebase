// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//Este código hay que reemplazarlo por el que se genere en firebase
/***************************************************
const firebaseConfig = {
  apiKey: "AIzaSyBYHt0Ne6txGluhirINTwJGzM6RUCxXyRE",
  authDomain: "vuefire-94865.firebaseapp.com",
  projectId: "vuefire-94865",
  storageBucket: "vuefire-94865.firebasestorage.app",
  messagingSenderId: "448053187763",
  appId: "1:448053187763:web:30236520f3a4f37ed94cc6"
};
 ***************************************************/

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export{db};