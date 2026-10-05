// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAn2PabjuPcvVXKgG9ABB9CElvTqNvYm8g",
  authDomain: "fir-practise-5501c.firebaseapp.com",
  projectId: "fir-practise-5501c",
  storageBucket: "fir-practise-5501c.firebasestorage.app",
  messagingSenderId: "415312662271",
  appId: "1:415312662271:web:42993348a62b255c8806ca"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth();