import React from 'react';
import Header from '../Header/Header';
import BottomNavigation from '../BottomNavigationComponent/BottomNavigation';

const Page = () => {
  return (
    <div className="container mx-auto overflow-hidden">
      {/* Header Component */}
      <Header />

      {/* Bottom Navigation Component */}
      <BottomNavigation />
    </div>
  );
};

export default Page;
