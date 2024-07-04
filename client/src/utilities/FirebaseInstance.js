// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZpfXAxtKXKQgDSIhxVm1ZTTnlB8YTgfQ",
  authDomain: "profilemanager-e3797.firebaseapp.com",
  databaseURL:
    "https://profilemanager-e3797-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "profilemanager-e3797",
  storageBucket: "profilemanager-e3797.appspot.com",
  messagingSenderId: "454873234889",
  appId: "1:454873234889:web:e68579d76b4cf3e83b7c18",
  measurementId: "G-825D5KP4KX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
