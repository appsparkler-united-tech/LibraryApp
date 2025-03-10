import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc"; // Google logo
import { FaFacebook } from "react-icons/fa"; // Facebook logo
import { Link } from "react-router"


import TitleLogoComponent from "../../components/TitleLogoComponent";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

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
          <button className="btn btn-primary w-full">
            Login
          </button>
        </div>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <p className="text-sm text-center mt-4">
          Don't have an account yet?{" "}
          <Link to="/sign_up" className="text-primary hover:underline">
            Sign Up
          </Link>
        </p>

        <div className="space-y-2 mt-6">
          <button className="btn btn-outline w-full flex items-center space-x-2">
            <FcGoogle size={20} /> {/* Google logo */}
            <span>Register with Google</span>
          </button>

          <button className="btn btn-outline w-full flex items-center space-x-2">
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
