import React from 'react';

const Button = ({ icon: Icon, label, isActive, onClick }) => {
  // Define color classes based on the state
  const textColor = isActive ? 'text-black' : 'text-white';
  const iconColor = isActive ? 'text-black' : 'text-white';
  
  return (
    <button
      className={`flex flex-col items-center p-2 bg-teal-500 ${textColor} ${iconColor} hover:bg-teal-600`}
      onClick={onClick}
    >
      {Icon && <Icon className={`h-5 w-5 ${iconColor}`} />}
      <span className={`btm-nav-label ${textColor}`}>{label}</span>
    </button>
  );
};

export default Button;
