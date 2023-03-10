// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrsQWUkUBOHcOr77uBxESVNSoQWj0zlWk",
  authDomain: "kyle-compiles.firebaseapp.com",
  projectId: "kyle-compiles",
  storageBucket: "kyle-compiles.appspot.com",
  messagingSenderId: "540218369622",
  appId: "1:540218369622:web:785107dde0c7dedd337df7",
  measurementId: "G-E2M2XDVQ9R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);