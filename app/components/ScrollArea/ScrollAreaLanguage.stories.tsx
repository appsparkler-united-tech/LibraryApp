import type { Meta, StoryFn } from '@storybook/react';
import ScrollAreaLanguageStorybook from './ScrollAreaLanguageStorybook';

export default {
  title: 'components/ScrollAreaLanguage',
  component: ScrollAreaLanguageStorybook,
} as Meta;

const Template: StoryFn = (args) => <ScrollAreaLanguageStorybook {...args} />;

export const Default = Template.bind({});
Default.args = {};
