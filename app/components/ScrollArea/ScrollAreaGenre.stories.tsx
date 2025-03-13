import type { Meta, StoryFn } from '@storybook/react';
import ScrollAreaGenreStorybook from './ScrollAreaGenreStorybook';

export default {
  title: 'components/ScrollAreaGenre',
  component: ScrollAreaGenreStorybook,
} as Meta;

const Template: StoryFn = (args) => <ScrollAreaGenreStorybook {...args} />;

export const Default = Template.bind({});
Default.args = {};
