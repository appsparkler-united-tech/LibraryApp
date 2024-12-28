import React from 'react';
import Page from './HomePage';

export default {
  title: 'Components/Page',
  component: Page,
};

export const Default: React.FC = () => (
  <Page>
    <div className="text-center p-8">
    </div>
  </Page>
);
