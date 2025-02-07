import React from "react";
import BottomNavigation from "../HomePage/components/BottomNavigationComponent/BottomNavigation"; // Ensure you already have this component
import TitleLogoComponent from "../../components/TitleLogoComponent"; // Ensure the TitleLogoComponent is imported
import { CiSettings, CiShare2 } from "react-icons/ci"; // Import icons for settings and share

interface PageProps {
  children: React.ReactNode;
}

const MePage: React.FC<PageProps> = ({  }) => {

  return (
    <div className="flex flex-col h-screen bg-base-100">
      {/* Top Navigation */}
      <div className="relative flex justify-center py-4">
        {/* "Me" Title */}
        <h1 className="text-lg font-pretty mt-1 text-secondary-content">Me</h1>

        {/* Top Right Buttons */}
        <div className="absolute right-4 flex space-x-4">
          {/* Settings Button */}
          <button className="btn btn-ghost btn-circle">
            <CiSettings className="text-lg font-light text-secondary-content" />
          </button>

          {/* Share Button */}
          <button className="btn btn-ghost btn-circle">
            <CiShare2 className="text-xl text-secondary-content" />
          </button>
        </div>
      </div>

      <div className="divider"></div>

      {/* Header Section with DaisyUI Avatar */}
      <div className="flex flex-col p-4">
        <div className="avatar">
          <div className="w-8 rounded">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="Profile"
            />
          </div>
        </div>
        <h1 className="text-sm font-light text-secondary-content mt-2">Rhea</h1>
        <div className="flex items-center mt-0">
          {[...Array(4)].map((_, index) => (
            <span key={index} className="text-yellow-500">★</span>
          ))}
        </div>
        <p className="text-xs text-secondary-content mt-1">Active since 9 December 2024</p>
      </div>

      <div className="divider"></div>

      {/* Main Content Section */}
      <div className="flex flex-col items-center mt-10 justify-center text-center px-4">
        <TitleLogoComponent logoSrc="/homePageLibrary.png" title="The Library App" />
        <h2 className="relative flex text-medium font-pretty text-secondary-content">Got any books?</h2>
        <button className="btn btn-primary mt-6">Offer Books</button>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full shadow-md z-10">
        <BottomNavigation />
      </div>
    </div>
  );
};

export default MePage;
