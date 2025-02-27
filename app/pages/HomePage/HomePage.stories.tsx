import React from 'react';
import HomePage from './HomePage';

export default {
  title: 'Pages/HomePage',
  component: HomePage,
};

export const Default: React.FC = () => (
  <HomePage>
    <div className="text-center p-8">
    </div>
  </HomePage>
);
