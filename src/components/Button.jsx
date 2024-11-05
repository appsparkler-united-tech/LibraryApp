// Button.jsx
import React from 'react';

const Button = ({ icon, label, isActive, onClick }) => (
  <button
    className={`flex flex-col items-center ${isActive ? 'bg-base-100' : 'bg-transparent'}`}
    onClick={onClick}
  >
    <span className="h-5 w-5 text-black">{icon}</span> {/* Set icon color to black */}
    <span className="btm-nav-label text-black">{label}</span> {/* Set label color to black */}
  </button>
);

export default Button;
