import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import { GrFormSearch } from 'react-icons/gr';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>;

// Define a template for the Button stories
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: GrFormSearch,
  label: 'Search',
  isActive: true,
};

export const Active = Template.bind({});
Active.args = {
  icon: GrFormSearch,
  label: 'Search',
  isActive: true,
};
