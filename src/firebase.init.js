// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwpCyv6Vss207URj9aajcuGqvCfqOCzPM",
  authDomain: "toolsite-82cbd.firebaseapp.com",
  projectId: "toolsite-82cbd",
  storageBucket: "toolsite-82cbd.appspot.com",
  messagingSenderId: "627715789380",
  appId: "1:627715789380:web:4c8f8dc80fe51574b5e211"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;