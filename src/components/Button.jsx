// Button.js
import React from 'react';

const Button = ({ icon, label, onClick, className }) => (
  <button onClick={onClick} className={`flex flex-col items-center ${className}`}>
    {icon}
    <span className="btm-nav-label">{label}</span>
  </button>
);

export default Button;
