import type { Meta, StoryFn } from '@storybook/react';
import ScrollAreaAuthorStorybook from './ScrollAreaAuthorStorybook';

export default {
  title: 'components/ScrollAreaAuthor',
  component: ScrollAreaAuthorStorybook,
} as Meta;

const Template: StoryFn = (args) => <ScrollAreaAuthorStorybook {...args} />;

export const Default = Template.bind({});
Default.args = {};
