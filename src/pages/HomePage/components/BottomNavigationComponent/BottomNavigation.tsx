import React from "react";
import { CiSearch, CiHeart, CiCirclePlus, CiChat1, CiUser } from "react-icons/ci";

type BottomNavigationProps = {
  onClick: (action: string) => void;
};




const BottomNavigation: React.FC<BottomNavigationProps> = ({ onClick }) => {
  const handleButtonClick = (action: string) => {
    console.log(`Button clicked: ${action}`);
    onClick(action);
  };
  return (
    <footer className="footer bg-primary p-4">
      <nav className="w-full flex justify-between">
        <button
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleButtonClick("search")}
        >
          <CiSearch className="text-2xl text-primary-content" />
          <span className="text-xs text-primary-content">Search</span>
        </button>
        <button
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleButtonClick("favourite")}
        >
          <CiHeart className="text-2xl text-primary-content" />
          <span className="text-xs text-primary-content">Favourite</span>
        </button>
        <button
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleButtonClick("offer")}
        >
          <CiCirclePlus className="text-2xl text-primary-content" />
          <span className="text-xs text-primary-content">Offer</span>
        </button>
        <button
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleButtonClick("message")}
        >
          <CiChat1 className="text-2xl text-primary-content" />
          <span className="text-xs text-primary-content">Message</span>
        </button>
        <button
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleButtonClick("me")}
        >
          <CiUser className="text-2xl text-primary-content" />
          <span className="text-xs text-primary-content">Me</span>
        </button>
      </nav>
    </footer>
  );
};

export default BottomNavigation;
