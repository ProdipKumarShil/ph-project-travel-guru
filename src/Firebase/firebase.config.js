// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW1jbaMFq9lnYBmDWNjWCIOi3mPThaevw",
  authDomain: "travel-guru-3701d.firebaseapp.com",
  projectId: "travel-guru-3701d",
  storageBucket: "travel-guru-3701d.appspot.com",
  messagingSenderId: "324696560682",
  appId: "1:324696560682:web:ba4b80e4a35708250f9f53",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app