import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';  // Firebase Authentication
import { getAnalytics } from 'firebase/analytics';
import * as firebaseui from 'firebaseui';  // Import FirebaseUI
import firebase from 'firebase/compat/app';

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
const analytics = getAnalytics(app);
const auth = getAuth(app);  // Initialize Firebase Auth

// FirebaseUI configuration
const uiConfig = {
  signInSuccessUrl: '/',  // URL to redirect to after sign-in
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,  // Correct reference to EmailAuthProvider from firebaseui
  ],
  tosUrl: '/terms-of-service',
  privacyPolicyUrl: '/privacy-policy',
};

// Initialize FirebaseUI Auth instance
const ui = new firebaseui.auth.AuthUI(auth);

// Export the initialized FirebaseUI and config
export { app, analytics, auth, ui, uiConfig };
