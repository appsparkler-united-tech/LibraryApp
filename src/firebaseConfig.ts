// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlCpRGxQI7E1aioriCoN_uFp5q2tYZOZY",
  authDomain: "libraryapp-8d9e9.firebaseapp.com",
  projectId: "libraryapp-8d9e9",
  storageBucket: "libraryapp-8d9e9.appspot.com",
  messagingSenderId: "178509995567",
  appId: "1:178509995567:web:d80d2fc9b07070c5a3f0da",
  measurementId: "G-P0WMFNNLLW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics if you want to use it
const analytics = getAnalytics(app);

export { app, analytics };
