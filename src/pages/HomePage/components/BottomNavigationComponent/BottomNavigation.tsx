import React from "react";
import { CiSearch, CiHeart, CiCirclePlus, CiChat1, CiUser } from "react-icons/ci";

type BottomNavigationProps = {
  onClick: (action: string) => void;
};

const BottomNavigation: React.FC<BottomNavigationProps> = ({ onClick }) => {
  return (
    <footer className="footer footer-horizontal footer-center rounded bg-base-300 p-4">
      <nav className="w-full flex justify-around">
        <a className="flex flex-col items-center cursor-pointer" onClick={() => onClick("search")}>
          <CiSearch className="text-2xl text-secondary-content" />
          <span className="text-xs text-secondary-content">Search</span>
        </a>
        <a className="flex flex-col items-center cursor-pointer" onClick={() => onClick("favourite")}>
          <CiHeart className="text-2xl text-black" />
          <span className="text-xs text-black">Favourite</span>
        </a>
        <a className="flex flex-col items-center cursor-pointer" onClick={() => onClick("offer")}>
          <CiCirclePlus className="text-2xl text-black" />
          <span className="text-xs text-black">Offer</span>
        </a>
        <a className="flex flex-col items-center cursor-pointer" onClick={() => onClick("message")}>
          <CiChat1 className="text-2xl text-black" />
          <span className="text-xs text-black">Message</span>
        </a>
        <a className="flex flex-col items-center cursor-pointer" onClick={() => onClick("me")}>
          <CiUser className="text-2xl text-black" />
          <span className="text-xs text-black">Me</span>
        </a>
      </nav>
    </footer>
  );
};

export default BottomNavigation;
