import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router"


import TitleLogoComponent from "../../components/TitleLogoComponent";

const RegistrationPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState<"email" | "password">("email"); // Track the current step






  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Top Navigation */}
      <div className="absolute top-10 w-full flex justify-between px-5">
  <Link to="/" className="btn btn-link btn-sm text-secondary-content font-light">Back</Link>
  <button className="btn btn-link btn-sm text-secondary-content font-light">Help</button>
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
              className="btn btn-primary w-full"
            >
              Register
            </button>
          </div>
        )}

        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>

        <div className="space-y-2 mt-6">
          <button
            className="btn btn-outline w-full flex items-center space-x-2"
          >
            <FcGoogle size={20} />
            <span>Register with Google</span>
          </button>

          <button
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
function createUserWithEmailAndPassword(auth: any, email: string, password: string) {
  throw new Error("Function not implemented.");
}

