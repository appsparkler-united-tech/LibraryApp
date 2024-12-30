import React from 'react';
import Button from './components/ButtonComponent/Button'; // Adjust the import path if needed

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
      <button className="btn btn-circle btn-outline text-teal-700  hover:bg-teal-700 p-2">
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
       <button className="btn btn-link text-teal-700">Help</button>
      </div>

      <h1 className="text-teal-700 text-pretty font-serif mb-6"> The Library App </h1> {/* Teal-colored text */}
      <img
        src="bookPile.png" // Ensure this path is correct relative to the public or assets folder
        alt="Pile of books"
        className="w-0.2 h-auto mb-10" // Adjust size as needed
      />
      <h1 className="text-teal-700 text-pretty font-serif mb-6">Chat! Read! Repeat!</h1> {/* Teal-colored text */}
      <div className="space-y-4 w-1/2"> {/* Ensures both buttons share the same width */}
        <Button label="Login" variant="secondary" onClick={handleLogin} className="w-full" />
        <Button label="Register" variant="secondary" onClick={handleRegister} className="w-full" />
      </div>
    </div>
  );
};

export default AccessPage;
