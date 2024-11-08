import React from 'react';
import Header from '../Header/Header';
import BottomNavigation from '../BottomNavigationComponent/BottomNavigation';

const Page = () => {
  return (
    <div className="container mx-auto overflow-hidden">
      {/* Header Component */}
      <Header />

      {/* Page Content */}
      <main className="flex-grow p-4 overflow-hidden">
        <p className="text-center">Welcome to your page!</p>
      </main>

      {/* Bottom Navigation Component */}
      <BottomNavigation />
    </div>
  );
};

export default Page;
