import React from 'react';
import Button from './Button';
import { GrFormSearch } from 'react-icons/gr';

export default {
  title: 'Components/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: GrFormSearch,
  label: 'Search',
  isActive: false,
};

export const Active = Template.bind({});
Active.args = {
  icon: GrFormSearch,
  label: 'Search',
  isActive: true,
};
