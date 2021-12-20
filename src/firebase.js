// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQUmazeVXQUSd83xtf8ITPZxk_H5Qxz-Y",
  authDomain: "awesome-bot-bb27d.firebaseapp.com",
  projectId: "awesome-bot-bb27d",
  storageBucket: "awesome-bot-bb27d.appspot.com",
  messagingSenderId: "499521787496",
  appId: "1:499521787496:web:9b1bfdad0aa4f396bc0ddd",
  measurementId: "G-B0SGPYFSPZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);