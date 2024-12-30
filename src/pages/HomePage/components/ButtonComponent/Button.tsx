import { FC } from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
  icon?: IconType;
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  className?: string; // Allow custom class names
}

const Button: FC<ButtonProps> = ({ icon: Icon, label, onClick, variant = 'primary', className = '' }) => {
  const textColor = variant === 'secondary' ? 'text-white' : 'text-black';
  const buttonColor = variant === 'secondary' ? 'bg-teal-700' : 'bg-teal-500';
  const roundedStyle = variant === 'secondary' ? 'rounded-full' : '';

  return (
    <button
      className={`flex items-center justify-center p-3 ${buttonColor} ${textColor} ${roundedStyle} hover:bg-teal-600 ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon className={`mr-2`} />}
      {label}
    </button>
  );
};

export default Button;
