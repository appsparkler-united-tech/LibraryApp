import React from 'react';
import Header from './components/Header/Header';
import BottomNavigation from './components/BottomNavigationComponent/BottomNavigation';

interface PageProps {
  children: React.ReactNode;
}

const HomePage: React.FC<PageProps> = ({ children }) => {
  return (
    <div className="container mx-auto overflow-hidden">
      {/* Header Component */}
      <Header />

      {/* Bottom Navigation Component */}
      <BottomNavigation />

      {/* Content */}
      {children}
    </div>
  );
};

export default HomePage;
