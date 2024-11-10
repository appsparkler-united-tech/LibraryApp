import React, { FC } from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
  icon: IconType;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const Button: FC<ButtonProps> = ({ icon: Icon, label, isActive, onClick }) => {
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