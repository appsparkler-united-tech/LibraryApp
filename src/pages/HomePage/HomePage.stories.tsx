import React from 'react';
import Page from './HomePage';

export default {
  title: 'Components/Page',
  component: Page,
};

export const Default: React.FC = () => (
  <Page>
    <div className="text-center p-8">
      <h1 className="text-2xl font-bold">Welcome to the LibraryApp</h1>
      <p className="mt-4 text-gray-600">Start exploring books or check your notifications!</p>
    </div>
  </Page>
);
