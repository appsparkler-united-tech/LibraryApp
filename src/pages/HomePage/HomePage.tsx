import React from 'react';
import Header from './components/Header/Header';
import CategoryBar from './components/CategoryBar/CategoryBar';
import BottomNavigation from './components/BottomNavigationComponent/BottomNavigation';
import ScrollArea from './components/ScrollArea/ScrollArea';

interface PageProps {
  children: React.ReactNode;
}

const HomePage: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="container mx-auto overflow-hidden">
      {/* Header Component */}
      <Header />

      {/* Image Below Header */}
      <div className="flex flex-col items-center mt-4">
        <img
          src="homePageLibrary.png"
          alt="Descriptive alt text"
          className="w-3/5 h-auto"
        />

        {/* Centered Header below the image */}
        <h1 className="text-teal-600 text-pretty font-normal mt-2">
          The Library App
        </h1>
      </div>

      {/* Line under the image */}
      <hr className="border-t border-black max-w-full my-2" />

      {/* CategoryBar */}
      <CategoryBar />

      {/* Title for Recently Added Books */}
      <h1 className="text-black text-pretty font-light mt-2">
        Recently Added Books
      </h1>

      {/* ScrollArea for Books - This will be scrollable */}
      <div className="h-[600px] overflow-auto">
        <ScrollArea />
      </div>

      {/* Bottom Navigation Component */}
      <BottomNavigation />

      {/* Content */}
      {children}
    </div>
  );
};

export default HomePage;
