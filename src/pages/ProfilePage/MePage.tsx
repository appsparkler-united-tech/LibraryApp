import React from "react";
import BottomNavigation from "../HomePage/components/BottomNavigationComponent/BottomNavigation"; // Ensure you already have this component
import TitleLogoComponent from "../../components/TitleLogoComponent"; // Ensure the TitleLogoComponent is imported

const MePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-100"> {/* Match LoginPage */}
      {/* Header Section */}
      <div className="flex flex-col items-center p-4">
        <img
          src="/path-to-avatar-image.jpg" // Replace with the actual avatar image URL
          alt="Profile"
          className="w-16 h-16 rounded-full border-2 border-accent"
        />
        <h1 className="text-lg font-semibold mt-2 text-primary">Rhea</h1>
        <div className="flex items-center mt-1">
          {[...Array(4)].map((_, index) => (
            <span key={index} className="text-yellow-500">★</span>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-1">Active since 9 December 2024</p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col flex-1 items-center justify-center text-center px-4">
        <h2 className="text-xl font-medium mb-4 text-primary">Got any books?</h2>
        <TitleLogoComponent logoSrc="/homePageLibrary.png" title="The Library App" />
        <button className="btn btn-primary mt-6">Offer Books</button>
      </div>

      {/* Footer Section */}
      <BottomNavigation />
    </div>
  );
};

export default MePage;
