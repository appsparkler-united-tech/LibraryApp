// src/pages/RegistrationPage.tsx
import React, { useState } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";

const RegistrationPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Email registration
  const handleEmailRegistration = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered with email:", userCredential.user);
    } catch (error) {
      console.error("Error registering with email:", error);
    }
  };

  // Google registration
  const handleGoogleRegistration = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User registered with Google:", result.user);
    } catch (error) {
      console.error("Error registering with Google:", error);
    }
  };

  // Facebook registration
  const handleFacebookRegistration = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User registered with Facebook:", result.user);
    } catch (error) {
      console.error("Error registering with Facebook:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Register for LibraryApp</h1>
      <div className="w-3/4 max-w-md space-y-4">
        {/* Email Registration */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered w-full"
        />
        <button onClick={handleEmailRegistration} className="btn btn-primary w-full">
          Register with Email
        </button>

        {/* Google Registration */}
        <button onClick={handleGoogleRegistration} className="btn btn-outline w-full">
          Register with Google
        </button>

        {/* Facebook Registration */}
        <button onClick={handleFacebookRegistration} className="btn btn-outline w-full">
          Register with Facebook
        </button>
      </div>
    </div>
  );
};

export default RegistrationPage;
