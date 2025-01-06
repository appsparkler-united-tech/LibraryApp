import { Meta, StoryFn } from '@storybook/react';
import AccessPage from '../AccessPage/AccessPage';

export default {
  title: 'Pages/AccessPage',
  component: AccessPage,
} as Meta<typeof AccessPage>;

const Template: StoryFn<typeof AccessPage> = () => <AccessPage />;

export const Default = Template.bind({});
Default.args = {};
