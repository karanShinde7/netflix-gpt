// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZ4D-p1TgrexqOCrNdkxwdcPmh3wwIlgk",
  authDomain: "netflixgpt-7ca1f.firebaseapp.com",
  projectId: "netflixgpt-7ca1f",
  storageBucket: "netflixgpt-7ca1f.appspot.com",
  messagingSenderId: "1041708027274",
  appId: "1:1041708027274:web:3361f6de8493f1b1c2cc73",
  measurementId: "G-QT2ZT7Z9VY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
