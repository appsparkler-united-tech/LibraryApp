import React from 'react';
import Header from './components/Header/Header';
import BottomNavigation from './components/BottomNavigationComponent/BottomNavigation';

interface PageProps {
  children: React.ReactNode;
}

const Page: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="container mx-auto overflow-hidden">
      {/* Header Component */}
      <Header />

      {/* Image Below Header */}
      <div className="mt-4">
        <img
          src="/homePageLibrary.png"  // Path to the image in the public folder
          alt="Homepage Banner"
          className="w-3/4 mx-auto h-auto"  // Adjust width to 75% of the container, centered
        />
      </div>

      {/* Bottom Navigation Component */}
      <BottomNavigation />

      {/* Content */}
      {children}
    </div>
  );
};

export default Page;
