import React from 'react';
import Header from './components/Header/Header';
import BottomNavigation from './components/BottomNavigationComponent/BottomNavigation';
import ScrollArea from './components/ScrollArea/ScrollArea';

interface PageProps {
  children: React.ReactNode;
}

const HomePage: React.FC<PageProps> = ({ children }) => {
  const handleNavigationClick = () => {
    console.log('handleNavigationClick triggered'); // Debugging log
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-10">
        <Header />
      </div>

      {/* Main Content (Non-Scrollable) */}
      <div className="mt-[60px] flex flex-col items-center px-4">
        <img
          src="homePageLibrary.png"
          alt="Descriptive alt text"
          className="w-3/5 h-auto"
        />
        <div className="divider divider-default text-secondary-content font-normal">
          The Library App
        </div>
      </div>

      {/* Replacing CategoryBar with Filter Form */}
      <form className="filter filter-primary flex justify-center gap-2 my-4">
        <input className="btn btn-square" type="reset" value="×" />
        <input className="btn" type="radio" name="frameworks" aria-label="Author" />
        <input className="btn" type="radio" name="frameworks" aria-label="Title" />
        <input className="btn" type="radio" name="frameworks" aria-label="Genre" />
        <input className="btn" type="radio" name="frameworks" aria-label="Language" />
      </form>

      <h1 className="text-secondary-content text-pretty font-light mt-2">
        Recently Added Books
      </h1>

      {/* Only Scrollable Book List */}
      <div className="flex-1 overflow-y-auto px-4">
        <ScrollArea />
      </div>

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full shadow-md z-50">
        <BottomNavigation onClick={handleNavigationClick} />
      </div>

      {children}
    </div>
  );
};

export default HomePage;
