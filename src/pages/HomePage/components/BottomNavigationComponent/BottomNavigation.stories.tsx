import { Meta, StoryFn } from '@storybook/react';
import BottomNavigation from './BottomNavigation';

export default {
  title: 'Components/BottomNavigation',
  component: BottomNavigation,
} as Meta<typeof BottomNavigation>;

const Template: StoryFn<typeof BottomNavigation> = (args) => <BottomNavigation {...args} />;

export const Default = Template.bind({});
Default.args = {};
