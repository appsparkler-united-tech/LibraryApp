import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "firebase/auth";
import TitleLogoComponent from "../../components/TitleLogoComponent";

const RegistrationPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState<"email" | "password">("email"); // Track the current step

  // Handlers for registration
  const handleEmailRegistration = () => {
    if (!email) {
      alert("Please enter a valid email");
      return;
    }
    setStep("password"); // Move to the password setup step
  };

  const handlePasswordRegistration = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User registered with email:", userCredential.user);
      // Redirect to the homepage or a welcome page
    } catch (error) {
      console.error("Error registering with email:", error);
    }
  };

  const handleGoogleRegistration = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User registered with Google:", result.user);
    } catch (error) {
      console.error("Error registering with Google:", error);
    }
  };

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
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Top Navigation */}
      <div className="absolute top-10 w-full flex justify-between px-5">
      <button className="btn btn-primary btn-circle">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"  // Icon size
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
</button>
       <button className="btn btn-primary">Help</button>
      </div>

      {/* Reused TitleLogoComponent */}
      <TitleLogoComponent logoSrc="/homePageLibrary.png" title="The Library App" />

      {/* Form Section */}
      <div className="w-3/4 max-w-md space-y-4">
        {step === "email" ? (
          <div className="space-y-2">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full"
            />
            <button
              onClick={handleEmailRegistration}
              className="btn btn-primary w-full"
            >
              Continue
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            <input
              type="password"
              placeholder="Create Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input input-bordered w-full"
            />
            <button
              onClick={handlePasswordRegistration}
              className="btn btn-primary w-full"
            >
              Register
            </button>
          </div>
        )}

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-primary hover:underline">
            Login
          </a>
        </p>

        <div className="space-y-2 mt-6">
          <button
            onClick={handleGoogleRegistration}
            className="btn btn-outline w-full flex items-center space-x-2"
          >
            <FcGoogle size={20} />
            <span>Register with Google</span>
          </button>

          <button
            onClick={handleFacebookRegistration}
            className="btn btn-outline w-full flex items-center space-x-2"
          >
            <FaFacebook size={20} color="#1877F2" />
            <span>Register with Facebook</span>
          </button>
        </div>
      </div>

      {/* Recaptcha */}
      <div id="recaptcha-container"></div>
    </div>
  );
};

export default RegistrationPage;
