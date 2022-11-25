// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApcT8guoOsLOkZDE0fq4ZgXH01LQGtHo4",
  authDomain: "panda-mart-durjoy.firebaseapp.com",
  projectId: "panda-mart-durjoy",
  storageBucket: "panda-mart-durjoy.appspot.com",
  messagingSenderId: "631826235726",
  appId: "1:631826235726:web:e4a3d2a2aea59c42c91e1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
