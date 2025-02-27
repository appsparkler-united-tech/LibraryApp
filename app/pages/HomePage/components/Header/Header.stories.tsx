import type { Meta, StoryFn } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Pages/HomePage/Header',
  component: Header,
} as Meta;

const Template: StoryFn = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
