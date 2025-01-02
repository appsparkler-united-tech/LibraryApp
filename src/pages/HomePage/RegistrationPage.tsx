import React, { useState } from "react";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const RegistrationPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState("");

  // Initialize Recaptcha
  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => {
            console.log("Recaptcha verified");
          },
        },
        auth
      );
    }
  };

  // Phone Number Registration
  const handlePhoneRegistration = async () => {
    setupRecaptcha();
    const appVerifier = window.recaptchaVerifier;

    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setVerificationId(confirmationResult.verificationId);
      console.log("OTP sent");
    } catch (error) {
      console.error("Error with phone number registration:", error);
    }
  };

  // Verify OTP
  const handleOtpVerification = async () => {
    try {
      const credential = auth.PhoneAuthProvider.credential(verificationId, otp);
      const result = await auth.signInWithCredential(credential);
      console.log("User registered with phone:", result.user);
    } catch (error) {
      console.error("Error verifying OTP:", error);
    }
  };

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
    <div className="flex flex-col items-center justify-center h-screen">
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

        {/* Phone Registration */}
        <input
          type="tel"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="input input-bordered w-full"
        />
        <button onClick={handlePhoneRegistration} className="btn btn-outline w-full">
          Register with Phone
        </button>

        {verificationId && (
          <>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="input input-bordered w-full"
            />
            <button onClick={handleOtpVerification} className="btn btn-primary w-full">
              Verify OTP
            </button>
          </>
        )}

        {/* Recaptcha */}
        <div id="recaptcha-container"></div>
      </div>
    </div>
  );
};

export default RegistrationPage;
