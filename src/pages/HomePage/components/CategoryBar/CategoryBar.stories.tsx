// src/components/CategoryBar/CategoryBar.stories.tsx

import { Meta, StoryFn } from '@storybook/react';
import CategoryBar from './CategoryBar';

export default {
  title: 'Components/CategoryBar',
  component: CategoryBar,
} as Meta;

const Template: StoryFn = () => <CategoryBar />;

export const Default = Template.bind({});
Default.args = {};
