import React from 'react';
import Header from './Header';
import BottomNavigation from './BottomNavigationComponent/BottomNavigation';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* Header Component */}
      <Header />
      
      {/* Page Content */}
      <main className="flex-grow p-4">
        {/* Any page-specific content can go here */}
        <p className="text-center">Welcome to your page!</p>
      </main>
      
      {/* Bottom Navigation Component */}
      <BottomNavigation />
    </div>
  );
};

export default Page;
