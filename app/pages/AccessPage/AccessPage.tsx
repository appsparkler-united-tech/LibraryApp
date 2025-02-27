import React from 'react';
import TitleLogoComponent from "../../components/TitleLogoComponent";

const AccessPage: React.FC = () => {
  const handleLogin = () => {
    console.log('Login clicked');
  };

  const handleRegister = () => {
    console.log('Register clicked');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
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
                        <TitleLogoComponent
        logoSrc="/homePageLibrary.png"
        title="The Library App"
      />
      <h1 className="text-pretty font-serif mb-6">Chat! Read! Repeat!</h1>
      <div className="space-y-4 w-1/2"> {/* Ensures both buttons share the same width */}
      <button className="btn btn-primary w-full" onClick={handleLogin}>Login</button>
<button className="btn btn-primary w-full" onClick={handleRegister}>Register</button>

      </div>
    </div>
  );
};

export default AccessPage;
