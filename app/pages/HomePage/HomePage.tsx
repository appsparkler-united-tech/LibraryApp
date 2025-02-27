import React from 'react';
import Header from './components/Header/Header';
import BottomNavigation from './components/BottomNavigationComponent/BottomNavigation';
import ScrollArea from './components/ScrollArea/ScrollArea';

const books = [
  { title: 'Book 1', description: 'A great book', imageSrc: '/books/mockingBird.png', buttonText: 'Read More' },
  { title: 'Book 2', description: 'Another amazing book', imageSrc: '/books/ringOfFire.png', buttonText: 'Read More' },
  { title: 'Book 3', description: 'A must-read', imageSrc: '/books/mockingBird.png', buttonText: 'Read More' },
  { title: 'Book 4', description: 'An exciting tale', imageSrc: '/books/mockingBird.png', buttonText: 'Read More' },
  { title: 'Book 5', description: 'A thrilling adventure', imageSrc: '/books/mockingBird.png', buttonText: 'Read More' },
  { title: 'Book 6', description: 'A great book', imageSrc: '/books/mockingBird.png', buttonText: 'Read More' },
  { title: 'Book 7', description: 'Another amazing book', imageSrc: '/books/ringOfFire.png', buttonText: 'Read More' },
  { title: 'Book 8', description: 'A must-read', imageSrc: '/books/mockingBird.png', buttonText: 'Read More' },
  { title: 'Book 9', description: 'An exciting tale', imageSrc: '/books/mockingBird.png', buttonText: 'Read More' },
  { title: 'Book 10', description: 'A thrilling adventure', imageSrc: '/books/mockingBird.png', buttonText: 'Read More' }
];

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 w-full z-10">
        <Header />
      </div>

      {/* Main Content */}
      <div className="mt-[70px] flex flex-col items-center px-4">
        <img
          src="homePageLibrary.png"
          alt="Descriptive alt text"
          className="w-1/5 h-auto"
        />
        <div className="divider divider-default text-secondary-content font-normal">
          The Library App
        </div>
      </div>

      {/* Filter Form */}
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

      {/* Scrollable Book Section */}
      <ScrollArea books={books} />

      {/* Fixed Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full shadow-md z-50">
        <BottomNavigation />
      </div>
    </div>
  );
};

export default HomePage;
