import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import { GrFormSearch } from 'react-icons/gr';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta<typeof Button>;

// Define a template for the Button stories
const Template: StoryFn<typeof Button> = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  icon: GrFormSearch,
  label: 'Primary Button',
  variant: 'primary',  // Set primary variant
};

export const Secondary = Template.bind({});
Secondary.args = {
  icon: GrFormSearch,
  label: 'Secondary Button',
  variant: 'secondary',  // Set secondary variant
};
