// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Authentication
import { getFirestore } from "firebase/firestore"; // Import Firestore (optional)
import { getAnalytics } from "firebase/analytics"; // Import Analytics (optional)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlCpRGxQI7E1aioriCoN_uFp5q2tYZOZY",
  authDomain: "libraryapp-8d9e9.firebaseapp.com",
  projectId: "libraryapp-8d9e9",
  storageBucket: "libraryapp-8d9e9.appspot.com",
  messagingSenderId: "178509995567",
  appId: "1:178509995567:web:d80d2fc9b07070c5a3f0da",
  measurementId: "G-P0WMFNNLLW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app); // Firebase Authentication
const db = getFirestore(app); // Firestore Database (optional)
const analytics = getAnalytics(app); // Firebase Analytics (optional)

// Export initialized Firebase app and services
export { app, auth, db, analytics };
