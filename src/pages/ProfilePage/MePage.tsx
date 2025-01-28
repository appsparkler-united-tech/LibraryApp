import React from "react";
import BottomNavigation from "../HomePage/components/BottomNavigationComponent/BottomNavigation"; // Ensure you already have this component
import TitleLogoComponent from "../../components/TitleLogoComponent"; // Ensure the TitleLogoComponent is imported
import { FaCog, FaShareAlt } from "react-icons/fa"; // Import icons for settings and share

const MePage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-base-100">
      {/* Top Navigation */}
      <div className="relative flex items-center justify-center py-4 border-b border-gray-300">
        {/* "Me" Title */}
        <h1 className="text-lg font-pretty mt-1 text-black">Me</h1>

        {/* Top Right Buttons */}
        <div className="absolute right-4 flex space-x-4">
          {/* Settings Button */}
          <button className="btn btn-ghost btn-circle">
            <FaCog className="text-lg font-light text-black" />
          </button>

          {/* Share Button */}
          <button className="btn btn-ghost btn-circle">
            <FaShareAlt className="text-xl text-gray-700" />
          </button>
        </div>
      </div>

      {/* Header Section */}
      <div className="flex flex-col p-4 border-b border-gray-300">
        <img
          src="/icons8-avatar.gif" // Replace with the actual avatar image URL
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-accent"
        />
        <h1 className="text-sm font-light text-black mt-2">Rhea</h1>
        <div className="flex items-center mt-0">
          {[...Array(4)].map((_, index) => (
            <span key={index} className="text-yellow-500">★</span>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-1">Active since 9 December 2024</p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center mt-10 justify-center text-center px-4">
        
        <TitleLogoComponent logoSrc="/homePageLibrary.png" title="The Library App" />
        <h2 className="relative flex text-medium font-pretty text-black">Got any books?</h2>
        <button className="btn btn-primary mt-6">Offer Books</button>
      </div>

      {/* Footer Section */}
      <BottomNavigation />
    </div>
  );
};

export default MePage;
