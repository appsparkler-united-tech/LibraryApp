import React from 'react';
import HomePageStorybook from './HomePageStorybook';

export default {
  title: 'Pages/HomePage',
  component: HomePageStorybook,
};

export const Default: React.FC = () => (
  <HomePageStorybook>
    <div className="text-center p-8">
    </div>
  </HomePageStorybook>
);
