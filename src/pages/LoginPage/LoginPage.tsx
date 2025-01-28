import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc"; // Google logo
import { FaFacebook } from "react-icons/fa"; // Facebook logo

import { auth } from "../../firebase";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import TitleLogoComponent from "../../components/TitleLogoComponent";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Handle Email Login
  const handleEmailLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in with email:", userCredential.user);
  
      // Remove navigation
      console.log("User logged in successfully!");
    } catch (error: any) {
      setError("Invalid email or password. Please try again.");
      console.error("Error logging in with email:", error);
    }
  };
  

  // Handle Google Login
  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User logged in with Google:", result.user);

      // Redirect to Me Page
    } catch (error) {
      setError("Error logging in with Google. Please try again.");
      console.error("Error logging in with Google:", error);
    }
  };

  // Handle Facebook Login
  const handleFacebookLogin = async () => {
    const provider = new FacebookAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User logged in with Facebook:", result.user);

      // Redirect to Me Page
      navigate("/me");
    } catch (error) {
      setError("Error logging in with Facebook. Please try again.");
      console.error("Error logging in with Facebook:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Top Navigation */}
      <div className="absolute top-10 w-full flex justify-between px-5">
        <button className="btn btn-circle btn-outline text-teal-700 hover:bg-teal-700 p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <button className="btn btn-link text-teal-700">Help</button>
      </div>

      {/* Reused TitleLogoComponent */}
      <TitleLogoComponent logoSrc="/homePageLibrary.png" title="The Library App" />

      {/* Form Section */}
      <div className="w-3/4 max-w-md space-y-4">
        <div className="space-y-2">
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
          <button onClick={handleEmailLogin} className="btn btn-primary bg-teal-600 w-full">
            Login
          </button>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <p className="text-sm text-center mt-4">
          Don't have an account yet?{" "}
          <button className="text-primary hover:underline">
            Sign Up
          </button>
        </p>

        <div className="space-y-2 mt-6">
          <button onClick={handleGoogleLogin} className="btn btn-outline w-full flex items-center space-x-2">
            <FcGoogle size={20} /> {/* Google logo */}
            <span>Register with Google</span>
          </button>

          <button onClick={handleFacebookLogin} className="btn btn-outline w-full flex items-center space-x-2">
            <FaFacebook size={20} color="#1877F2" /> {/* Facebook logo */}
            <span>Register with Facebook</span>
          </button>
        </div>
      </div>

      {/* Recaptcha */}
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default LoginPage;
