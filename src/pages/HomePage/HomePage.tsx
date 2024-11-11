import React from 'react';
import Header from './components/Header/Header';
import CategoryBar from './components/CategoryBar/CategoryBar';
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

        <CategoryBar />

      {/* Bottom Navigation Component */}
      <BottomNavigation />

      {/* Content */}
      {children}
    </div>
  );
};

export default Page;
